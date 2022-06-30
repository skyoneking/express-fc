import { DateTimeFormat, OperateType, OperateTypeMap } from '@/constants/global';
import { useBoolean } from 'ahooks';
import type { FormInstance } from 'antd';
import { Button, DatePicker, Form, Input, Modal } from 'antd';
import moment from 'moment';
import React, { useEffect, useRef } from 'react';

export interface TodoItemForForm extends Omit<API.Todo, 'id' | 'createTime' | 'startTime'> {
  startTime: moment.Moment;
}

interface Props {
  todoItem?: API.Todo;
  operateType: OperateType.CREATE | OperateType.READ | OperateType.WRITE;
  onOk?: (todoItem: Omit<TodoItemForForm, 'startTime'> & { startTime: string }) => any;
}

const Operate: React.FC<Props> = (props) => {
  const { todoItem, operateType, onOk } = props;
  const isDisabled = operateType === OperateType.READ;

  const todoFormRef = useRef<FormInstance<TodoItemForForm>>(null);

  const [isShowOperateModal, { setTrue: openOperateModal, setFalse: closeOperateModal }] = useBoolean(false);

  useEffect(() => {
    if (isShowOperateModal) {
      const { title, type, status, startTime, strategyId } = todoItem ?? {};
      todoFormRef.current?.setFieldsValue({ title, type, status, startTime: moment(startTime), strategyId });
    } else {
      todoFormRef.current?.resetFields();
    }
  }, [todoItem, isShowOperateModal]);

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
        title="代办详情"
        centered={true}
        width={800}
        visible={isShowOperateModal}
        onCancel={closeOperateModal}
        onOk={() => {
          if (operateType === OperateType.READ) {
            closeOperateModal();
            return;
          }
          todoFormRef.current
            ?.validateFields()
            .then((res) => {
              if (onOk) {
                onOk({ ...res, startTime: res.startTime.format(DateTimeFormat) });
              }
              closeOperateModal();
            })
            .catch(() => {});
        }}
        okText="确定"
        cancelButtonProps={{ style: { display: 'none' } }}
      >
        <Form<TodoItemForForm> ref={todoFormRef} labelCol={{ span: 4, offset: 4 }} wrapperCol={{ span: 8 }}>
          <Form.Item label="标题" name="title" rules={[{ required: true }]}>
            <Input disabled={isDisabled} />
          </Form.Item>
          <Form.Item label="类别" name="type" rules={[{ required: true }]}>
            <Input disabled={isDisabled} />
          </Form.Item>
          {operateType === OperateType.READ && (
            <Form.Item label="状态" name="status">
              <Input disabled={isDisabled} />
            </Form.Item>
          )}
          <Form.Item label="开始时间" name="startTime" rules={[{ required: true }]}>
            <DatePicker style={{ width: '100%' }} disabled={isDisabled} showTime />
          </Form.Item>
          <Form.Item label="策略" name="strategyId" rules={[{ required: true }]}>
            <Input disabled={isDisabled} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default Operate;
