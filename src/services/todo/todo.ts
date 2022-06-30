// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** findAll GET /api/todo */
export async function TodoControllerFindAll(options?: { [key: string]: any }) {
  return request<API.TodoListRes>('/api/todo', {
    method: 'GET',
    ...(options || {}),
  });
}

/** update PUT /api/todo */
export async function TodoControllerUpdate(
  body: API.UpdateTodoDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/todo', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** create POST /api/todo */
export async function TodoControllerCreate(
  body: API.CreateTodoDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/todo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findOne GET /api/todo/${param0} */
export async function TodoControllerFindOne(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.TodoControllerFindOneParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.TodoRes>(`/api/todo/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** delete DELETE /api/todo/${param0} */
export async function TodoControllerDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.TodoControllerDeleteParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/todo/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/todo/todoType */
export async function TodoControllerQueryTodoType(options?: { [key: string]: any }) {
  return request<API.TodoTypeRes>('/api/todo/todoType', {
    method: 'GET',
    ...(options || {}),
  });
}
