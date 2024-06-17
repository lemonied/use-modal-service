import React from 'react';
import { Modal } from 'antd';
import { usePortal } from '@lemonied/use-portal';
import { getModalInstanceFromHooks, ModalServiceProvider } from './Context';
import { isModernModal } from './util';
import type { ModalInstance, ModalHolderItem, ModalServiceOptions } from './model';

const isModern = isModernModal();

export const useModalService = () => {

  const [renderPortal, holder] = usePortal();
  const itemsRef = React.useRef<ModalHolderItem[]>([]);
  const keyRef = React.useRef(0);

  const render = React.useCallback((items: ModalHolderItem[] | ((pre: ModalHolderItem[]) => ModalHolderItem[])) => {
    const list = typeof items === 'function' ? items(itemsRef.current) : items;
    itemsRef.current = list;
    renderPortal(
      <>
        {
          list.map(item => {
            const controller = isModern ? { open: item.open } : { visible: item.open };
            return (
              <ModalServiceProvider value={item.hooks} key={item.key}>
                <Modal
                  {...item.options}
                  {...controller}
                  onOk={item.hooks.get('triggerOk')}
                  onCancel={item.hooks.get('onCancel')}
                  afterClose={item.hooks.get('afterClose')}
                >{item.options.children}</Modal>
              </ModalServiceProvider>
            );
          })
        }
      </>,
    );
  }, [renderPortal]);

  const create = React.useCallback(function <Result = any>(options: ModalServiceOptions = {}) {

    keyRef.current += 1;
    const key = keyRef.current;

    const item: ModalHolderItem = {
      key,
      open: true,
      options,
      hooks: new Map(),
    };
    const hooks = item.hooks;

    const close: ModalInstance<Result>['close'] = (result) => {
      hooks.get('resolve')(result);
      render(pre => {
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
      render(pre => {
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
      return itemsRef.current.find(v => v.key === key)?.options.onCancel?.(...args);
    });

    hooks.set('afterClose', () => {
      render(pre => pre.filter(v => v.key !== key));
      return itemsRef.current.find(v => v.key === key)?.options.afterClose?.();
    });

    const afterClose = new Promise<Result | undefined>((resolve) => {
      hooks.set('resolve', resolve);
    });

    render(pre => [...pre, item]);

    return {
      afterClose,
      ...getModalInstanceFromHooks<Result>(item.hooks),
    };

  }, [render]);

  return [create, holder] as const;

};
