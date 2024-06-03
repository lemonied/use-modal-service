import React from 'react';
import { Modal } from 'antd';
import type { ModalServiceItem } from './model';
import { ModalServiceProvider } from './Context';

export interface ModalHolderInstance {
  items: ModalServiceItem[];
  setItems: React.Dispatch<React.SetStateAction<ModalServiceItem[]>>;
}

const ModalHolderFC = React.forwardRef<ModalHolderInstance>((_, ref) => {

  /**
   * Put responsive data into child components to ensure that the parent component does not perform unnecessary rerenders
   */
  const [items, setItems] = React.useState<ModalServiceItem[]>([]);

  React.useImperativeHandle(ref, () => {
    return { items, setItems };
  }, [items, setItems]);

  return (
    <>
      {
        items.map(item => {
          return (
            <React.Fragment key={item.key}>
              <ModalServiceProvider value={item}>
                <Modal
                  {...item.options}
                  open={item.open}
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
