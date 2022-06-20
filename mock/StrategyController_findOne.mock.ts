// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /api/strategy/:id': (req: Request, res: Response) => {
    res.status(200).send({
      success: false,
      data: {
        id: 85,
        name: '郝芳',
        launchTime: '具联平查四应事青容却们增住连己完。',
        period: '当术长作一和九然林由后应之基入需连。',
      },
    });
  },
};
