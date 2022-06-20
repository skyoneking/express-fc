export const APIHost = 'http://fc.yojcl.top';

export const DateTimeFormat = 'YYYY-MM-DD HH:mm:ss'

export enum OperateType {
  READ = 'read',
  CREATE = 'create',
  WRITE = 'write',
}

export const OperateTypeMap = {
  [OperateType.READ]: '查看',
  [OperateType.WRITE]: '编辑',
  [OperateType.CREATE]: '新增',
};
