// @ts-ignore
import { Request, Response } from 'express';

export default {
  'PUT /api/todo': (req: Request, res: Response) => {
    res.status(200).send({});
  },
};
