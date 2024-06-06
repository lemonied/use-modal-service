import React from 'react';
import { Modal } from 'antd';
import type { ModalHolderItem } from './model';
import { ModalServiceProvider } from './Context';
import { isModernModal } from '../util';

export interface ModalHolderInstance {
  items: ModalHolderItem[];
  setItems: React.Dispatch<React.SetStateAction<ModalHolderItem[]>>;
}

const ModalHolderFC = React.forwardRef<ModalHolderInstance>((_, ref) => {

  /**
   * Put responsive data into child components to ensure that the parent component does not perform unnecessary rerenders
   */
  const [items, setItems] = React.useState<ModalHolderItem[]>([]);

  const isModern = React.useMemo(() => {
    return isModernModal();
  }, []);

  React.useImperativeHandle(ref, () => {
    return { items, setItems };
  }, [items, setItems]);

  return (
    <>
      {
        items.map(item => {
          const controller = isModern ? { open: item.open } : { visible: item.open };
          return (
            <React.Fragment key={item.key}>
              <ModalServiceProvider value={item.hooks}>
                <Modal
                  {...item.options}
                  {...controller}
                  onOk={item.hooks.get('triggerOk')}
                  onCancel={item.hooks.get('onCancel')}
                  afterClose={item.hooks.get('afterClose')}
                >{item.options.children}</Modal>
              </ModalServiceProvider>
            </React.Fragment>
          );
        })
      }
    </>
  );

});

export const ModalHolder = React.memo(ModalHolderFC);
