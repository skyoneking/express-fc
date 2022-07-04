import { Button, Table } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import React, { useEffect, useState } from 'react';

import PageContainer from '@/components/PageContainer';
import { DateTimeFormat, OperateType } from '@/constants/global';
import * as strategyService from '@/services/todo/strategy';
import * as service from '@/services/todo/todo';
import moment from 'moment';
import { useRequest } from 'umi';
import Operate from './Operate';
import styles from './style.less';

const Todo: React.FC = () => {
  const [todoList, setTodoList] = useState<API.Todo[]>([]);
  const [strategyList, setStrategyList] = useState<API.Strategy[]>([]);

  const { run: todoFindAll, loading: todoFindAllLoading } = useRequest(service.TodoControllerFindAll, {
    manual: true,
    onSuccess(data) {
      setTodoList(data);
    },
  });
  const { run: todoDelete, loading: todoDeleteLoading } = useRequest(service.TodoControllerDelete, {
    manual: true,
    onSuccess() {
      todoFindAll();
    },
  });
  const { run: todoCreate, loading: todoCreateLoading } = useRequest(service.TodoControllerCreate, {
    manual: true,
    onSuccess() {
      todoFindAll();
    },
  });
  const { run: todoUpdate, loading: todoUpdateLoading } = useRequest(service.TodoControllerUpdate, {
    manual: true,
    onSuccess() {
      todoFindAll();
    },
  });
  const { run: strategyFindAll } = useRequest(strategyService.StrategyControllerFindAll, {
    manual: true,
    onSuccess(data) {
      setStrategyList(data ?? []);
    },
  });

  useEffect(() => {
    strategyFindAll();
    todoFindAll();
  }, []);

  const columns: ColumnsType<API.Todo> = [
    {
      title: '标题',
      dataIndex: 'title',
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      align: 'center',
      render: (v) => moment(v).format(DateTimeFormat),
    },
    {
      title: '类别',
      dataIndex: 'type',
      align: 'center',
    },
    {
      title: '状态',
      dataIndex: 'status',
      align: 'center',
    },
    {
      title: '提醒时间',
      dataIndex: 'startTime',
      align: 'center',
      render: (v) => moment(v).format(DateTimeFormat),
    },
    {
      title: '策略',
      dataIndex: 'strategyId',
      align: 'center',
      render: (v) => strategyList.find((item) => item.id === v)?.name,
    },
    {
      title: '操作',
      dataIndex: 'operate',
      align: 'center',
      render: (_, record) => (
        <>
          <Operate strategyList={strategyList} todoItem={record} operateType={OperateType.READ} />
          <Operate
            strategyList={strategyList}
            todoItem={record}
            operateType={OperateType.WRITE}
            onOk={(todoItem) => {
              todoUpdate({ ...todoItem, id: record.id });
            }}
          />
          <Button
            type="link"
            onClick={() => {
              todoDelete({ id: String(record.id) });
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
      title="代办管理"
      routes={[
        { path: '/home', breadcrumbName: '首页' },
        { path: '/todo', breadcrumbName: '代办列表' },
      ]}
    >
      <div className={styles.createBox}>
        <Operate
          strategyList={strategyList}
          operateType={OperateType.CREATE}
          onOk={(todoItem) => {
            todoCreate(todoItem);
          }}
        />
      </div>
      <Table
        columns={columns}
        dataSource={todoList}
        loading={todoFindAllLoading || todoDeleteLoading || todoCreateLoading || todoUpdateLoading}
        rowKey="id"
      />
    </PageContainer>
  );
};
export default Todo;
