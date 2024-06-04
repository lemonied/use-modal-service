import type { ModalProps } from 'antd';

export interface ModalServiceOptions extends Omit<ModalProps, 'open' | 'onOk'> {
  onOk?: () => any;
}

export interface ModalServiceItem {
  key: number;
  open: boolean;
  hooks: Map<string, any>;
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
  getHooks: (token: symbol) => ModalServiceItem['hooks'];
}
