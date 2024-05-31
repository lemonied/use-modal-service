import React from 'react';
import type { InternalModalInstance, ModalInstance, ModalServiceItem, ModalServiceOptions } from './model';

const INTERNAL_TOKEN = Symbol('hooks');

const ModalServiceContext = React.createContext<ModalInstance | null>(null);

export function useModalInstance<Result = any>(): ModalInstance<Result> | null {
  return React.useContext(ModalServiceContext);
};

export function getInstanceFromHooks<Result = any>(hooks: ModalServiceItem['hooks']) {
  const instance: InternalModalInstance<Result> = {
    close: hooks.get('close'),
    triggerOk: hooks.get('triggerOk'),
    update: hooks.get('update'),
    getHooks: (token) => {
      if (token === INTERNAL_TOKEN) {
        return hooks;
      }
      throw new Error('getHooks method is for internal use only');
    },
  };
  return instance as ModalInstance<Result>;
};

export const ModalServiceProvider = React.memo((props: React.PropsWithChildren<{ value: ModalServiceItem }>) => {

  const { children, value } = props;
  const { hooks } = value;

  const instance = React.useMemo(() => {
    return getInstanceFromHooks(hooks);
  }, [hooks]);

  return (
    <ModalServiceContext.Provider value={instance}>{children}</ModalServiceContext.Provider>
  );

});

export const useOnOkInject = (fn: NonNullable<ModalServiceOptions['onOk']>) => {

  const fnRef = React.useRef(fn);
  fnRef.current = fn;

  const { getHooks } = useModalInstance() as InternalModalInstance;

  const hooks = getHooks(INTERNAL_TOKEN);

  React.useEffect(() => {
    const onOks: (typeof fn)[] = hooks.get('onOks');
    const inject = () => fnRef.current();
    onOks.push(inject);

    return () => {
      const index = onOks.indexOf(inject);
      if (index > -1) {
        onOks.splice(index, 1);
      }
    };
  }, [hooks]);

};
