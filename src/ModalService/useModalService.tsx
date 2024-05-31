import React from 'react';
import type { ModalInstance, ModalServiceItem, ModalServiceOptions } from './model';
import { ModalHolder } from './ModalHolder';
import type { ModalHolderInstance } from './ModalHolder';
import { getInstanceFromHooks } from './Context';

export const useModalService = () => {

  const modalHolderRef = React.useRef<ModalHolderInstance>(null);
  const keyRef = React.useRef(0);

  const getHolderInstance = React.useCallback(() => {
    if (!modalHolderRef.current) {
      // eslint-disable-next-line no-console
      console.error('Please insert the holder into the page node, otherwise ModalService will not work properly');
    }
    return modalHolderRef.current;
  }, []);

  const update = React.useCallback((key: number, modalProps: Parameters<ModalInstance['update']>[0]) => {
    const holderInstance = getHolderInstance();
    holderInstance?.setItems(pre => {
      const item = pre.find(v => v.key === key);
      if (!item) {
        return pre;
      }
      const mergedProps = typeof modalProps === 'function' ? modalProps({ ...item.options, onOk: item.hooks.get('onOk') }) : modalProps;
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
  }, [getHolderInstance]);

  const close = React.useCallback(function <T = any>(key: number, value?: T) {
    const holderInstance = getHolderInstance();
    holderInstance?.setItems(pre => {
      const item = pre.find(v => v.key === key);
      if (item) {
        item.hooks.get('resolve')(value);
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
  }, [getHolderInstance]);

  const ok = React.useCallback(async (key: number) => {
    update(key, { confirmLoading: true });
    try {
      const holderInstance = getHolderInstance();
      const hooks = holderInstance?.items.find(v => v.key === key)?.hooks;
      const onOks: (() => any)[] = hooks?.get('onOks') ?? [];
      const onOk: () => any = hooks?.get('onOk');
      const fn = onOks[onOks.length - 1] ?? onOk;
      const value = await fn?.();
      update(key, { confirmLoading: false });
      return value;
    } catch (err) {
      update(key, { confirmLoading: false });
      throw err;
    }
  }, [getHolderInstance, update]);

  const open = React.useCallback(function <Result = any>(options: ModalServiceOptions) {

    keyRef.current += 1;
    const key = keyRef.current;

    const { onOk, children, ...restOptions } = options;

    const item: ModalServiceItem = {
      key,
      open: true,
      children,
      options: restOptions,
      hooks: new Map(),
    };

    item.hooks.set('close', (result?: any) => close(key, result));
    item.hooks.set('onOk', onOk);
    item.hooks.set('onOks', []);
    item.hooks.set('triggerOk', () => ok(key));
    item.hooks.set('update', (props: ModalServiceItem['options']) => update(key, props));
    item.hooks.set('onCancel', (...args: Parameters<NonNullable<ModalServiceOptions['onCancel']>>) => {
      const holderInstance = getHolderInstance();
      const item = holderInstance?.items.find(v => v.key === key);
      if (item) {
        close(key);
        return item.options.onCancel?.(...args);
      }
    });
    item.hooks.set('afterClose', () => {
      const holderInstance = getHolderInstance();
      const item = holderInstance?.items.find(v => v.key === key);
      holderInstance?.setItems(pre => pre.filter(v => v.key !== key));
      return item?.options.afterClose?.();
    });

    const afterClose = new Promise<Result | undefined>((resolve) => {
      item.hooks.set('resolve', resolve);
    });

    const holderInstance = getHolderInstance();
    holderInstance?.setItems(pre => [...pre, item]);

    return {
      afterClose,
      ...getInstanceFromHooks<Result>(item.hooks),
    };

  }, [close, getHolderInstance, ok, update]);

  return React.useMemo(() => {
    return [
      open,
      <ModalHolder key="modalHolder" ref={modalHolderRef} />,
    ] as const;
  }, [open]);

};
