import type { ModalProps } from 'antd';

export interface ModalServiceOptions extends Omit<ModalProps, 'open' | 'onOk'> {
  onOk?: () => any;
}

export interface ModalServiceItem {
  key: number;
  open: boolean;
  hooks: Map<string, any>;
  children: ModalServiceOptions['children'];
  options: Omit<ModalServiceOptions, 'children'>;
}

export interface ModalInstance<Result = any> {
  close: (value?: Result) => void;
  triggerOk: NonNullable<ModalServiceOptions['onOk']>;
  /**
   * update modal options
   */
  update: (options: ModalServiceItem['options'] | ((pre: ModalServiceItem['options']) => ModalServiceItem['options'])) => void;
};

export interface InternalModalInstance<Result = any> extends ModalInstance<Result> {
  getHooks: (token: symbol) => ModalServiceItem['hooks'];
}
