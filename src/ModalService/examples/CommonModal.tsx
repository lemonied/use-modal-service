import React from 'react';
import { Button } from 'antd';
import { useModalService } from 'use-modal-service';

export default () => {

  const [create] = useModalService();

  return (
    <>
      <Button
        onClick={async () => {
          const modal = create<string>({
            title: '这是一个弹窗',
            children: '弹窗内容',
            async onOk() {
              await new Promise((resolve) => { setTimeout(resolve, 1000); });
              modal.close('弹窗关闭了');
            },
          });
          const result = await modal.afterClose; // result为close方法传入的值
          // eslint-disable-next-line no-console
          console.log(result); // 点击ok时，result = "弹窗关闭了"，否则 result = undefined
        }}
      >点击弹窗</Button>
    </>
  );
};
