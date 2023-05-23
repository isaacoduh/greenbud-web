import { Order, OrderDetail } from '@/types';
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

export const fetchOrders = async (): Promise<Order[]> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/orders`);
        const responseData =  response.data?.data;

        const orders: Order[] = responseData.map((orderItem: any) => {
            return {
                id: orderItem.id,
                customerName: orderItem.customer_name,
                status: orderItem.order_status,
                total: orderItem.total
            };
        })

        return orders; 
    } catch (error) {
        console.log(`Error creating order:`, error);
        throw error;
    }
}

export const getOrderById = async (orderId: any): Promise <OrderDetail> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/orders/${orderId}`)
        const responseData =  response.data?.data;

        const order: OrderDetail = {
            id: responseData.id,
            customerName: responseData.customer_name,
            customerPhone: responseData.customer_phone,
            address: responseData.address,
            status: responseData.order_status,
            total: responseData.total,
            subtotal: responseData.subtotal,
            paymentType: responseData.payment_type,
            details: responseData.details
        };
        return order;
    } catch (error) {
        console.log(`Error creating order:`, error);
        throw error;
    }
}