// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 GET /api/strategy */
export async function StrategyControllerFindAll(options?: { [key: string]: any }) {
  return request<API.StrategyListRes>('/api/strategy', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/strategy */
export async function StrategyControllerCreate(
  body: API.CreateStrategyDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/strategy', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PATCH /api/strategy */
export async function StrategyControllerUpdate(
  body: API.UpdateStrategyDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/strategy', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/strategy/${param0} */
export async function StrategyControllerFindOne(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.StrategyControllerFindOneParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.StrategyRes>(`/api/strategy/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /api/strategy/${param0} */
export async function StrategyControllerRemove(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.StrategyControllerRemoveParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/strategy/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
