import { mock } from 'mockjs';

export default {
  'GET /api/todoList': mock({
    success: true,
    'data|11-21': [
      {
        'id|+1': 1,
        name: '@cword(6, 40)',
        createTime: '@datetime()',
        triggerTime: '@datetime()',
        'triggerPeriod|1': ['每天', '每周', '每月'],
        type: '@cword(4, 6)',
        'status|1': ['新建', '已完成'],
      },
    ],
  }),
};
