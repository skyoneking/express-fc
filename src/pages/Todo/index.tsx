import React from 'react';
import { Table, Button } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import { useModel } from 'umi';

import PageContainer from '@/components/PageContainer';
import TodoDetail from './TodoDetail';

const Todo: React.FC = () => {
  const { todoList, getTodoListLoading, deleteTodo } = useModel('todo');

  const columns: ColumnsType<Todo.TodoItem> = [
    {
      title: '标题',
      dataIndex: 'title',
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      align: 'center',
    },
    {
      title: '触发时间',
      dataIndex: 'triggerTime',
      align: 'center',
    },
    {
      title: '触发周期',
      dataIndex: 'triggerPeriod',
      align: 'center',
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
      title: '操作',
      dataIndex: 'operate',
      align: 'center',
      render: (_, record) => (
        <>
          <TodoDetail todoItem={record} />
          <Button type="link" onClick={() => deleteTodo(record.id)}>
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
      <Table columns={columns} dataSource={todoList} loading={getTodoListLoading} rowKey="id" />
    </PageContainer>
  );
};
export default Todo;
