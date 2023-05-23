import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchOrders } from "../api/orderApi";
import { Order } from "@/types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const OrdersPage = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    
    useEffect(() => {
        const getOrders = async () => {
            try {
                const orderList = await fetchOrders();
                
                setOrders(orderList);
            } catch (error) {
                // Handle error
                console.error('Error fetching orders:', error);
            }
        };

        getOrders();
    }, []);

    return (
        <div className="bg-white py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Orders</h2>
                <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {orders.map((order) => (
                        <li key={order.id} className="bg-gray-100 rounded-lg shadow-md">
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-blue-900 mb-2">{order.customerName}</h3>
                                <p className="text-gray-600 mb-4">Status: {order.status}</p>
                                <p className="text-gray-600 mb-4">Total Price: ${order.total}</p>
                                <div className="flex justify-end">
                                    {/* <button className="bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none">
                                        View Order
                                    </button> */}
                                    <Link href={`/orders/${order.id}`}>
                                        <span className="bg-blue-900 text-white py-1 px-4 rounded"><FontAwesomeIcon icon={faEye} className="mr-2 mt-4" /></span>
                                    </Link>
                                </div>
                                
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}


export default OrdersPage;