import { Product } from '@/types';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

export const fetchProducts = async (): Promise<Product[]> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/products`);
        return response.data?.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}