import { OperateType, OperateTypeMap } from '@/constants/global';
import { useBoolean } from 'ahooks';
import type { FormInstance } from 'antd';
import { Button, Form, Input, Modal } from 'antd';
import React, { useEffect, useRef } from 'react';

export type UserItemForForm = Omit<API.User, 'id' | 'createTime' | 'todos'>;

interface Props {
  userItem?: API.User;
  operateType: OperateType.CREATE | OperateType.READ | OperateType.WRITE;
  onOk?: (userItem: UserItemForForm) => any;
}

const Operate: React.FC<Props> = (props) => {
  const { userItem, operateType, onOk } = props;
  const isDisabled = operateType === OperateType.READ;

  const userFormRef = useRef<FormInstance<UserItemForForm>>(null);

  const [isShowOperateModal, { setTrue: openOperateModal, setFalse: closeOperateModal }] = useBoolean(false);

  useEffect(() => {
    if (isShowOperateModal) {
      const { username, password } = userItem ?? {};
      userFormRef.current?.setFieldsValue({ username, password });
    } else {
      userFormRef.current?.resetFields();
    }
  }, [userItem, isShowOperateModal]);

  return (
    <>
      <Button
        type={operateType === OperateType.CREATE ? 'primary' : 'link'}
        size={operateType === OperateType.CREATE ? 'large' : 'small'}
        onClick={openOperateModal}
      >
        {OperateTypeMap[operateType]}
      </Button>
      <Modal
        title="用户详情"
        centered={true}
        width={800}
        visible={isShowOperateModal}
        onCancel={closeOperateModal}
        onOk={() => {
          if (operateType === OperateType.READ) {
            closeOperateModal();
            return;
          }
          userFormRef.current
            ?.validateFields()
            .then((res) => {
              if (onOk) {
                onOk(res);
              }
              closeOperateModal();
            })
            .catch(() => {});
        }}
        okText="确定"
        cancelButtonProps={{ style: { display: 'none' } }}
      >
        <Form<UserItemForForm> ref={userFormRef} labelCol={{ span: 4, offset: 4 }} wrapperCol={{ span: 8 }}>
          <Form.Item label="用户名" name="username" rules={[{ required: true }]}>
            <Input disabled={isDisabled} />
          </Form.Item>
          <Form.Item label="密码" name="password" rules={[{ required: true }]}>
            <Input disabled={isDisabled} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default Operate;
