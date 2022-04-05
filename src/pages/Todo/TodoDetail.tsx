import React, { useRef } from 'react';
import { Button, Modal, Form, Input } from 'antd';
import type { FormInstance } from 'antd';
import { useBoolean } from 'ahooks';

import styles from './style.less';

interface Props {
	todoItem: Todo.TodoItem;
}

const TodoDetail: React.FC<Props> = (props) => {
	const { todoItem } = props;
	const { name, createTime, triggerTime, triggerPeriod, type, status } =
		todoItem;

	const todoFormRef = useRef<FormInstance<Todo.TodoItemForForm>>(null);

	const [
		isShowTodoDetailModal,
		{ setTrue: openTodoDetailModal, setFalse: closeTodoDetailModal },
	] = useBoolean(false);

	return (
		<>
			<Button type="link" onClick={openTodoDetailModal}>
				查看
			</Button>
			<Modal
				title="代办详情"
				centered={true}
				width={800}
				visible={isShowTodoDetailModal}
				onCancel={closeTodoDetailModal}
				onOk={() => {
					todoFormRef.current
						?.validateFields()
						.then((res) => {
							closeTodoDetailModal()
						})
						.catch(() => {});
				}}
				okText="确定"
				cancelButtonProps={{ style: { display: 'none' } }}
			>
				<Form<Todo.TodoItemForForm>
					ref={todoFormRef}
					labelCol={{ span: 4, offset: 4 }}
					wrapperCol={{ span: 8 }}
				>
					<Form.Item
						label="名称"
						name="name"
						rules={[{ required: true, message: '请输入名称' }]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						label="类别"
						name="type"
						rules={[{ required: true, message: '请输入类别' }]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						label="触发时间"
						name="triggerTime"
						rules={[{ required: true, message: '请输入触发时间' }]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						label="触发周期"
						name="triggerPeriod"
						rules={[{ required: true, message: '请输入触发周期' }]}
					>
						<Input />
					</Form.Item>
					{/* <Form.Item label="状态" name="status">
						<Input />
					</Form.Item>
					<Form.Item label="创建时间" name="createTime">
						<Input />
					</Form.Item> */}
				</Form>
			</Modal>
		</>
	);
};
export default TodoDetail;
