// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 GET /api/user */
export async function UsersControllerFindAll(options?: { [key: string]: any }) {
  return request<API.UserListRes>('/api/user', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/user */
export async function UsersControllerUpdate(
  body: API.UpdateUserDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/user', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/user */
export async function UsersControllerCreate(
  body: API.CreateUserDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/user/${param0} */
export async function UsersControllerFindOne(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.UsersControllerFindOneParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.UserRes>(`/api/user/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /api/user/${param0} */
export async function UsersControllerDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.UsersControllerDeleteParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/user/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/user/byName */
export async function UsersControllerFindOneByName(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.UsersControllerFindOneByNameParams,
  options?: { [key: string]: any },
) {
  return request<API.UserRes>('/api/user/byName', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
