// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 POST /api/login */
export async function LoginControllerLogin(
  body: API.LoginUserDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
