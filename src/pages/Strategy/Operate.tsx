import { OperateType, OperateTypeMap } from '@/constants/global';
import { useBoolean } from 'ahooks';

import type { FormInstance } from 'antd';

import { Button, Form, Input, Modal, Select } from 'antd';
import React, { useEffect, useRef, useState } from 'react';

export type StrategyItemForForm = Omit<API.Strategy, 'id' | 'createTime'>;

interface Props {
  strategyItem?: API.Strategy;
  operateType: OperateType.CREATE | OperateType.READ | OperateType.WRITE;
  onOk?: (strategyItem: StrategyItemForForm) => any;
}

const Operate: React.FC<Props> = (props) => {
  const { strategyItem, operateType, onOk } = props;
  const [isPeriod, setIsPeriod] = useState(false);
  const isDisabled = operateType === OperateType.READ;

  const strategyFormRef = useRef<FormInstance<StrategyItemForForm>>(null);

  const [isShowOperateModal, { setTrue: openOperateModal, setFalse: closeOperateModal }] = useBoolean(false);

  useEffect(() => {
    setIsPeriod(strategyItem?.type === 'period');
  }, [strategyItem]);

  useEffect(() => {
    if (isShowOperateModal) {
      const { name, type, period, unit } = strategyItem ?? {};
      strategyFormRef.current?.setFieldsValue({ name, type, period, unit });
    } else {
      strategyFormRef.current?.resetFields();
    }
  }, [strategyItem, isShowOperateModal]);

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
        title="策略详情"
        centered={true}
        width={800}
        visible={isShowOperateModal}
        onCancel={closeOperateModal}
        onOk={() => {
          if (operateType === OperateType.READ) {
            closeOperateModal();
            return;
          }
          strategyFormRef.current
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
        <Form<StrategyItemForForm>
          ref={strategyFormRef}
          labelCol={{ span: 4, offset: 4 }}
          wrapperCol={{ span: 8 }}
          onValuesChange={(changeValues) => {
            if (Reflect.has(changeValues, 'type')) {
              setIsPeriod(changeValues.type === 'period');
            }
          }}
        >
          <Form.Item label="名称" name="name" rules={[{ required: true }]}>
            <Input disabled={isDisabled} />
          </Form.Item>
          <Form.Item label="类型" name="type" rules={[{ required: true }]}>
            <Select>
              {['once', 'period'].map((item) => (
                <Select.Option value={item} key={item}>
                  {item}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          {isPeriod && (
            <>
              <Form.Item label="周期" name="period" rules={[{ required: true }]}>
                <Input disabled={isDisabled} />
              </Form.Item>
              <Form.Item label="单位" name="unit" rules={[{ required: true }]}>
                <Select>
                  {['seconds', 'minutes', 'hours', 'days', 'weeks', 'months', 'years'].map((item) => (
                    <Select.Option value={item} key={item}>
                      {item}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </>
          )}
        </Form>
      </Modal>
    </>
  );
};
export default Operate;
