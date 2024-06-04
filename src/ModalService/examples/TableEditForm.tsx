import React from 'react';
import { Form, Input } from 'antd';
import { useModalInstance, useOnOkInject } from 'use-modal-service';

export const EditForm = (props: { record?: Record<string, any> }) => {
  const { record } = props;
  const [form] = Form.useForm();

  const modal = useModalInstance();
  useOnOkInject(async () => {
    const values = await form.validateFields();
    await new Promise((resolve) => { setTimeout(resolve, 1000); }); // 模拟异步接口调用
    modal?.close(values); // 关闭弹窗并将数据回传给afterClose
  });

  React.useEffect(() => {
    // 异步更新modalProps
    modal?.update({
      title: record ? '编辑' : '新增',
    });
  }, [modal, record]);

  return (
    <Form layout="vertical" form={form} initialValues={record} >
      <Form.Item label="姓名" name="name">
        <Input />
      </Form.Item>
      <Form.Item label="年龄" name="age">
        <Input />
      </Form.Item>
    </Form>
  );
};
