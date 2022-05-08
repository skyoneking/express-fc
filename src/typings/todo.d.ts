declare namespace Todo {
    export interface TodoItem {
        id: number;
        title: string;
        createTime: string;
        triggerTime: string;
        triggerPeriod: string;
        type: string;
        status: string;
    }

    export type TodoList = TodoItem[]

    export type TodoItemForForm = Omit<TodoItem, 'id' | 'createTime'>
}
