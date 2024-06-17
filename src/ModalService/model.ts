import type { ModalProps } from 'antd/lib/modal';

export interface ModalServiceOptions extends Omit<ModalProps, 'open' | 'onOk' | 'visible'> {
  onOk?: () => any;
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
  getHooks: (token: symbol) => ModalHolderItem['hooks'];
}
