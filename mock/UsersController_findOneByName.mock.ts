// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /api/user/byName': (req: Request, res: Response) => {
    res.status(200).send({
      success: true,
      data: {
        id: 92,
        username: 'Gonzalez',
        password: 'string(16)',
        createTime: 89,
        todos: [
          '后内完形约生东位而力住度家资志科自。',
          '加基些阶产达真手矿员明标系人北口器得。',
          '关历织以事消参速可教断花达达。',
          '照技外规车但组热和次断入。',
          '道通真听文布等王原记基劳验。',
          '往转她近示委收家以还周近。',
          '水实直但经每使响等重片构酸三。',
          '列划反行历市劳很几调响方区研想建。',
          '白南规极水管断动群少量在前价严更。',
        ],
      },
    });
  },
};
