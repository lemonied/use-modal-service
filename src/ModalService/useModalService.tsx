import React from 'react';
import type { ModalInstance, ModalHolderItem, ModalServiceOptions } from './model';
import { ModalHolder } from './ModalHolder';
import type { ModalHolderInstance } from './ModalHolder';
import { getModalInstanceFromHooks } from './Context';
import { render } from '../util';

export const useModalService = () => {

  const scopedHolderRef = React.useRef<ModalHolderInstance>(null);
  const rootHolderRef = React.useRef<ModalHolderInstance>(null);
  const keyRef = React.useRef(0);

  const create = React.useCallback(function <Result = any>(options: ModalServiceOptions = {}) {

    keyRef.current += 1;
    const key = keyRef.current;

    const holderRef = scopedHolderRef.current ? scopedHolderRef : rootHolderRef;

    const item: ModalHolderItem = {
      key,
      open: true,
      options,
      hooks: new Map(),
    };
    const hooks = item.hooks;

    const close: ModalInstance<Result>['close'] = (result) => {
      hooks.get('resolve')(result);
      holderRef.current?.setItems(pre => {
        const item = pre.find(v => v.key === key);
        if (item) {
          return [
            ...pre.filter(v => v !== item),
            {
              ...item,
              open: false,
              options: {
                ...item.options,
                confirmLoading: false,
              },
            },
          ];
        }
        return pre;
      });
    };
    hooks.set('close', close);

    hooks.set('onOk', options.onOk);

    hooks.set('onOks', []);

    const update: ModalInstance<Result>['update'] = (options) => {
      holderRef.current?.setItems(pre => {
        const item = pre.find(v => v.key === key);
        if (!item) {
          return pre;
        }
        const mergedProps = typeof options === 'function' ? options({ ...item.options, onOk: item.hooks.get('onOk') }) : options;
        const { onOk, ...restProps } = mergedProps;
        if ('onOk' in mergedProps) {
          item.hooks.set('onOk', onOk);
        }
        return [
          ...pre.filter(v => v !== item),
          {
            ...item,
            options: {
              ...item.options,
              ...restProps,
            },
          },
        ];
      });
    };
    hooks.set('update', update);

    const triggerOk: ModalInstance<Result>['triggerOk'] = async () => {
      update({ confirmLoading: true });
      try {
        const onOks: (() => any)[] = hooks.get('onOks') ?? [];
        const onOk: () => any = hooks.get('onOk');
        const fn = onOks[onOks.length - 1] ?? onOk;
        const value = await fn?.();
        update({ confirmLoading: false });
        return value;
      } catch (err) {
        update({ confirmLoading: false });
        throw err;
      }
    };
    hooks.set('triggerOk', triggerOk);

    hooks.set('onCancel', (...args: Parameters<NonNullable<ModalServiceOptions['onCancel']>>) => {
      close();
      return holderRef.current?.items.find(v => v.key === key)?.options.onCancel?.(...args);
    });

    hooks.set('afterClose', () => {
      holderRef.current?.setItems(pre => pre.filter(v => v.key !== key));
      return holderRef.current?.items.find(v => v.key === key)?.options.afterClose?.();
    });

    const afterClose = new Promise<Result | undefined>((resolve) => {
      hooks.set('resolve', resolve);
    });

    holderRef.current?.setItems(pre => [...pre, item]);

    return {
      afterClose,
      ...getModalInstanceFromHooks<Result>(item.hooks),
    };

  }, []);

  React.useEffect(() => {
    const container = document.createDocumentFragment();
    document.body.appendChild(container);
    return render(
      container,
      <ModalHolder ref={rootHolderRef} />,
    );
  }, []);

  const holder = React.useMemo(() => <ModalHolder key="modal-holder" ref={scopedHolderRef} />, []);

  return [create, holder] as const;

};
