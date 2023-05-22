import { Order } from '@/types';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

export const createOrder = async (orderData: any): Promise<Order> => {
    try {
        const response = await axios.post(`${API_BASE_URL}/orders`, orderData);
        return response.data;
    } catch (error) {
        console.log(`Error creating order:`, error);
        throw error;
    }
}