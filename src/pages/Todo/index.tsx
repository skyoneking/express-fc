import React from 'react';
import { Table, Button } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import { useModel } from 'umi';

import TodoDetail from './TodoDetail';

const Todo: React.FC = () => {
	const { todoList, getTodoListLoading, deleteTodo } = useModel('todo');

	const columns: ColumnsType<Todo.TodoItem> = [
		{
			title: '名称',
			dataIndex: 'name',
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
		<Table
			columns={columns}
			dataSource={todoList}
			loading={getTodoListLoading}
			rowKey="id"
		/>
	);
};
export default Todo;
