import { request } from 'umi';

export const queryTodoList = () => {
	return request<Res<Todo.TodoList>>('/api/todoList');
};
