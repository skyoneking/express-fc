import { useState, useEffect } from 'react';
import { useRequest } from 'umi';
import { queryTodoList } from '@/services/todo';

export default function todo() {
	const [todoList, setTodoList] = useState<Todo.TodoList>([]);

	const { run: getTodoList, loading: getTodoListLoading } = useRequest(
		queryTodoList,
		{
			manual: true,
			onSuccess: (data) => {
				setTodoList(data);
			},
		},
	);

    const deleteTodo = (id: number) => {
        const newTodoList = todoList.filter(item => item.id !== id)
        setTodoList(newTodoList)
    }

	useEffect(() => {
		getTodoList();
	}, []);

	return { todoList, getTodoListLoading, deleteTodo };
}
