import { NextApiRequest, NextApiResponse } from 'next';
import productsData from '../../data/products.json';

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json(productsData);
};

export default handler;