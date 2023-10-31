import { NextApiRequest, NextApiResponse } from 'next';
import api from '../api';

// fix this
export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await api.post('/v1/customers', req.body);
    const data = response.data;
    res.status(200).json(data);
  } catch (error) {
    if (error.response) {
      const status = error.response.status;
      const errorMessage = error.response.data.message;
      res.status(status).json({ error: errorMessage });
    }
  }
}
