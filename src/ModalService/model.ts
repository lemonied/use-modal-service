import type React from 'react';
import type { ModalProps } from 'antd/lib/modal';

export interface ModalServiceOptions extends Omit<ModalProps, 'open' | 'onOk' | 'visible' | 'children'> {
  onOk?: () => any;
  children?: React.ReactNode;
}

export type InternalHooks = Map<string, any>;

export interface ModalHolderItem {
  key: number;
  open: boolean;
  hooks: InternalHooks;
  options: ModalServiceOptions;
}

export interface ModalInstance<Result = any> {
  close: (value?: Result) => void;
  triggerOk: () => Promise<any>;
  /**
   * update modal options
   */
  update: (options: ModalServiceOptions | ((pre: ModalServiceOptions) => ModalServiceOptions)) => void;
};

export interface InternalModalInstance<Result = any> extends ModalInstance<Result> {
  getHooks: (token: string) => ModalHolderItem['hooks'];
}
