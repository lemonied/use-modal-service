import React from 'react';
import { Button, Space } from 'antd';
import { useModalService } from 'use-modal-service';

const Context = React.createContext<string>('');

const ModalContent = () => {

  const context = React.useContext(Context);

  return (
    <>{context}</>
  );
};

export default () => {

  const [create, holder] = useModalService();
  const [createWithoutHolder] = useModalService();

  return (
    <Context.Provider value="hello world">
      {holder}
      <Space>
        <Button
          onClick={async () => {
            create({
              title: '有上下文的Modal',
              children: <ModalContent />,
            });
          }}
        >有上下文</Button>
        <Button
          onClick={async () => {
            createWithoutHolder({
              title: '无上下文的Modal',
              children: <ModalContent />,
            });
          }}
        >无上下文</Button>
      </Space>
    </Context.Provider>
  );
};
