import { useRouter } from 'next/router';
import  { useEffect, useState } from 'react';
import { OrderDetail } from '@/types';
import { getOrderById } from '../api/orderApi';



const OrderDetailsPage = () => {
    const router = useRouter();
    const { orderId } = router.query;
    const [orderDetail, setOrderDetail] = useState<OrderDetail| null>(null);

    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         try {
    //             const productList = await getProducts();
    //             setProducts(productList);
    //         } catch (error) {

    //         }
    //     }

    //     fetchProducts();
    // }, []);
    useEffect(() => {
        if (orderId) {
            // Call the getOrderById function from ordersApi.ts to fetch the order details
            getOrderById(orderId)
                .then((data) => {
                    setOrderDetail(data);
                })
                .catch((error) => {
                    console.error('Error fetching order details:', error);
                });
        }
    }, [orderId]);

    const handleGoBack = () => {
        router.back();
    };
    // console.log(orderId);

    // Fetch order details based on the orderId from the backend API
    if (!orderDetail) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            {/* <h1 className='text-lg font-semibold text-blue-900 mb-2'>Order Details for Order ID: {orderId}</h1> */}
            <h1 className='text-3xl font-extrabold text-gray-900 mb-6'>Order Details: Order ID - {orderDetail?.id}</h1>
            <div className='bg-gray-100 rounded-lg shadow-md p-6 mb-6'>
                <h2 className='text-lg font-semibold mb-4 text-gray-500'>Customer Information</h2>
                <p className="text-gray-600 mb-2">Name: {orderDetail?.customerName}</p>
                <p className="text-gray-600 mb-2">Phone: {orderDetail?.customerPhone}</p>
                <p className="text-gray-600 mb-2">Address: {orderDetail?.address}</p>
            </div>
            <div className='bg-gray-100 rounded-lg shadow-md p-6'>
                <h2 className=" text-gray-500 text-lg font-semibold mb-4">Order Summary</h2>
                <p className="text-gray-600 mb-2">Total: ${orderDetail?.total}</p>
                <p className="text-gray-600 mb-2">Subtotal: ${orderDetail?.subtotal}</p>
                <h3 className="text-gray-500 text-xl font-semibold mt-6 mb-4">Ordered Products</h3>
                <ul className="space-y-2">
                    {orderDetail?.details.map((detail) => (
                        <li key={detail.id}>
                            <p className="text-gray-600">
                                Product: {detail.product_name} (Quantity: {detail.quantity})
                          </p>
                            <p className="text-gray-600">Subtotal: ${detail.subtotal}</p>
                        </li>
                    ))}
                </ul>
                
            </div>
            <button className='bg-blue-900 text-white py-1 px-4 rounded mt-4' onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default OrderDetailsPage;