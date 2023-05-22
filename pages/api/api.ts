import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    const response = await axios.get('http://localhost:8000/api/products');
    const data = await response.data;

    res.status(200).json(data);
}