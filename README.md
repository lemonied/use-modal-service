# use-modal-service

[![NPM version](https://img.shields.io/npm/v/use-modal-service.svg?style=flat)](https://npmjs.org/package/use-modal-service)
[![NPM downloads](http://img.shields.io/npm/dm/use-modal-service.svg?style=flat)](https://npmjs.org/package/use-modal-service)

`ModalService`依赖于`antd`，目的是使用服务的方式来调用`Modal`弹窗，使用者不必关心弹窗的显示/隐藏及确认按钮的异步处理，只需要关注业务逻辑即可

## Install

```bash
npm install use-modal-service
```

## Usage

```tsx
import { useModalService, useModalInstance, useOnOkInject } from 'use-modal-service';
const ModalContent = () => {
  const modal = useModalInstance(); // 获取Modal实例
  useOnOkInject(async () => { // 在子组件中注入onOk的方法
    await new Promise((resolve) => { setTimeout(resolve, 1000); }); // 模拟异步接口调用
    modal?.close('回传结果'); // 回传给父级afterClose的值
  });
  return (
    <>弹窗内容</>
  );
};
const MainPage = () => {
  const [create] = useModalService();
  return (
    <>
      <Button
        onClick={async () => {
          const modal = create<string>({
            title: '这是一个弹窗',
            children: <ModalContent />,
          });
          const result = await modal.afterClose; // result为close方法传入的值
          console.log(result); // 点击ok时，result = "回传结果"，否则 result = undefined
        }}
      >点击弹窗</Button>
    </>
  );
};
```

## Options

更多示例：[API文档](https://lemonied.github.io/use-modal-service/components/modal-service)

## Development

```bash
# install dependencies
$ npm install

# develop library by docs demo
$ npm start

# build library source code
$ npm run build

# build library source code in watch mode
$ npm run build:watch

# build docs
$ npm run docs:build

# Locally preview the production build.
$ npm run docs:preview

# check your project for potential problems
$ npm run doctor
```

## LICENSE

MIT
