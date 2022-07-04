import { Button, Table } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import React, { useEffect, useState } from 'react';

import PageContainer from '@/components/PageContainer';
import { DateTimeFormat, OperateType } from '@/constants/global';
import * as service from '@/services/todo/strategy';
import moment from 'moment';
import { useRequest } from 'umi';
import Operate from './Operate';
import styles from './style.less';

const Strategy: React.FC = () => {
  const [strategyList, setStrategyList] = useState<API.Strategy[]>([]);

  const { run: strategyFindAll, loading: strategyFindAllLoading } = useRequest(service.StrategyControllerFindAll, {
    manual: true,
    onSuccess(data) {
      setStrategyList(data);
    },
  });
  const { run: strategyDelete, loading: strategyDeleteLoading } = useRequest(service.StrategyControllerRemove, {
    manual: true,
    onSuccess() {
      strategyFindAll();
    },
  });
  const { run: strategyCreate, loading: strategyCreateLoading } = useRequest(service.StrategyControllerCreate, {
    manual: true,
    onSuccess() {
      strategyFindAll();
    },
  });
  const { run: strategyUpdate, loading: strategyUpdateLoading } = useRequest(service.StrategyControllerUpdate, {
    manual: true,
    onSuccess() {
      strategyFindAll();
    },
  });

  useEffect(() => {
    strategyFindAll();
  }, []);

  const columns: ColumnsType<API.Strategy> = [
    {
      title: '名称',
      dataIndex: 'name',
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      align: 'center',
      render: (v) => moment(v).format(DateTimeFormat),
    },
    {
      title: '类型',
      dataIndex: 'type',
      align: 'center',
    },
    {
      title: '周期',
      dataIndex: 'period',
      align: 'center',
      render: (v, record) => (record.type === 'once' ? '-' : v ?? '-'),
    },
    {
      title: '单位',
      dataIndex: 'unit',
      align: 'center',
      render: (v, record) => (record.type === 'once' ? '-' : v),
    },
    {
      title: '操作',
      dataIndex: 'operate',
      align: 'center',
      render: (_, record) => (
        <>
          <Operate strategyItem={record} operateType={OperateType.READ} />
          <Operate
            strategyItem={record}
            operateType={OperateType.WRITE}
            onOk={(strategyItem) => {
              strategyUpdate({ ...strategyItem, id: record.id });
            }}
          />
          <Button
            type="link"
            onClick={() => {
              strategyDelete({ id: String(record.id) });
            }}
          >
            删除
          </Button>
        </>
      ),
    },
  ];

  return (
    <PageContainer
      title="策略管理"
      routes={[
        { path: '/home', breadcrumbName: '首页' },
        { path: '/strategy', breadcrumbName: '策略列表' },
      ]}
    >
      <div className={styles.createBox}>
        <Operate
          operateType={OperateType.CREATE}
          onOk={(strategyItem) => {
            strategyCreate(strategyItem);
          }}
        />
      </div>
      <Table
        columns={columns}
        dataSource={strategyList}
        loading={strategyFindAllLoading || strategyDeleteLoading || strategyCreateLoading || strategyUpdateLoading}
        rowKey="id"
      />
    </PageContainer>
  );
};
export default Strategy;
