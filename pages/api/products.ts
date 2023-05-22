import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import productsData from '../../data/products.json';

// const handler = (_req: NextApiRequest, res: NextApiResponse) => {
    
//     res.status(200).json(productsData);
// };
export default async function handler (req: NextApiRequest, res: NextApiResponse){
    const response = await axios.get('http://localhost:8000/api/products');
    res.status(200).json(response.data);
}