// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /api/todo/:id': (req: Request, res: Response) => {
    res.status(200).send({
      success: false,
      data: {
        id: 98,
        title: '表查历能省派即片则完所便查地。',
        type: 11,
        status: 'default',
        startTime: '成目那火斗天商般积院家音则即京面京。',
        createTime: 79,
        strategyId: 79,
      },
    });
  },
};
