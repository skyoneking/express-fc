// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /api/user/:id': (req: Request, res: Response) => {
    res.status(200).send({
      success: true,
      data: {
        id: 84,
        username: 'Johnson',
        password: 'string(16)',
        createTime: 87,
        todos: [
          '在持有车民听军却处从电类理会做。',
          '素准全会按接之越车青商今布。',
          '有号农问件律团们利划打条众局格。',
          '强才细会议己式候色确京打为。',
          '专主行消在管教写选长行信矿特县。',
          '调则太主但利眼术中说指么。',
          '列社务国代今布快老往备作几无。',
          '量低王究亲等成去低条话电专历期。',
        ],
      },
    });
  },
};
