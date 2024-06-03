---
title: ModalService
---

`ModalService`依赖于`antd`，目的是使用服务的方式来调用`Modal`弹窗，使用者不必关心弹窗的显示/隐藏及确认按钮的异步处理，只需要关注业务逻辑即可

## 示例

### 一般使用

<code src="./examples/CommonModal.tsx"></code>

### 在表格中使用

在子组件中获取`modal实例`并注入`onOk`的函数

<code src="./examples/TableModal.tsx"></code>

从这个例子可以看出来`useModalService`的核心作用：

1. `Table`组件只负责`Modal`的显示/关闭，并且处理`Modal`关闭后的返回值
2. `EditForm`组件只负责表单的逻辑，注入点击`OK`的回调，以及关闭后的返回值

## API

### useModalService()

`useModalService()`返回`[create, holder]`

#### create

`create(options)`打开一个弹窗并返回弹窗的实例

```tsx | pure
type create = <Result=any>(options?: ModalServiceOptions) => ModalInstance<Result> & { afterClose: Promise<Result | undefined> };
```

- `create`方法返回的实例会额外多出一个`afterClose`属性，这是个`Promise`，返回值为调用`close`方法时传入的值；
- 如果不是通过主动调用`close`方法关闭的弹窗（点击空白处、点击×号、点击Cancel按钮），则返回值为`undefined`，可以通过`afterClose`的返回值来判断弹窗内业务是否处理成功，并根据返回值做下一步的处理；

**注意：** 这里的`afterClose`跟配置项里的`afterClose`不同，配置项里的`afterClose`代表弹窗完全关闭时的回调函数；

#### holder

`holder`是一个`ReactElement`，需要插入到当前页面的节点中去（最好放在最外层），例如：
```tsx | pure
return (
  <>
    {holder}
    <OtherComponent />
  </>
);
```
目的是为了让`Modal`组件内可以获取到`holder`所处位置的上下文（`Context`、`redux`、`dva`等）

```tsx | pure
type holder = React.ReactElement;
```

### useModalInstance()

在弹窗内部使用的`hook`，返回值为[ModalInstance](#modalinstance)

### useOnOkInject()

在弹窗内组件注入`onOk`的回调函数

**注意：** 通过`useOnOkInject`注入的函数会覆盖`ModalServiceOptions`中的`onOk`函数

```tsx | pure
// 参数同onOk，支持Promise
type useOnOkInject = (onOk: () => any) => void;
```

### 类型

#### ModalServiceOptions

继承自antd [ModalProps](https://ant-design.antgroup.com/components/modal-cn#api)

```tsx | pure
export interface ModalServiceOptions extends Omit<ModalProps, 'open' | 'onOk'> {
  // onOk函数返回一个Promise时，将会给ok按钮自动加上loading
  onOk?: () => any;
}
```

#### ModalInstance

```tsx | pure
interface ModalInstance<Result = any> {
  /**
   * 关闭弹窗，传入的value将作为afterClose的返回值
   */
  close: (value?: Result) => void;
  /**
   * 手动触发onOk函数
   */
  triggerOk: NonNullable<ModalServiceOptions['onOk']>;
  /**
   * 更新ModalProps
   */
  update: (options: ModalServiceOptions | ((pre: ModalServiceOptions) => ModalServiceOptions)) => void;
};
```

## FAQ

### `destroyOnClose`, `forceRender`参数无效？

`ModalService`只有在调用`create`时才创建并打开弹窗，在完全关闭后销毁；这样做的目的是为了防止页面多次调用`create`但未及时销毁从而造成应用的性能损耗，所以在弹窗关闭后销毁了对应的`Modal`组件
