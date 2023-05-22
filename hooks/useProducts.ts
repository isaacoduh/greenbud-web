import axios from "axios";
import { useQuery } from "react-query";

export const useProducts = () => {
    return useQuery('products',async () => {
        const response = await axios.get('/api/products');
        const data = response.data;
        return data;
    })
}