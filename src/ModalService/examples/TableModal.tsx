import React from 'react';
import { Button, Table } from 'antd';
import { useModalService } from 'use-modal-service';
import { EditForm } from './TableEditForm';

export default () => {
  const [data, setData] = React.useState(() => [
    {
      key: '0',
      name: '小明',
      age: 18,
    },
    {
      key: '1',
      name: '小红',
      age: 12,
    },
  ]);
  const [open, holder] = useModalService();

  return (
    <>
      {holder}
      <Table
        dataSource={data}
        pagination={false}
        bordered
        columns={[
          {
            title: '姓名',
            dataIndex: 'name',
          },
          {
            title: '年龄',
            dataIndex: 'age',
          },
          {
            title: '操作',
            key: 'option',
            render(_, record, index) {
              return (
                <>
                  <Button
                    type="link"
                    onClick={async () => {
                      const modal = open({
                        title: '编辑',
                        children: <EditForm record={record} />,
                      });
                      const result = await modal.afterClose; // result为close方法传入的值，如果点击×号或点击Cancel关闭的弹窗，result为undefined
                      if (result) {
                        setData(pre => {
                          const ret = [...pre];
                          ret.splice(index, 1, { ...record, ...result });
                          return ret;
                        });
                      }
                    }}
                  >编辑</Button>
                </>
              );
            },
          },
        ]}
      />
    </>
  );
};
