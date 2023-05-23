import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { CartItem } from '@/types';
import { CartContext } from '@/context/CartContext';

const CartPage: React.FC = () => {
    const router = useRouter();
    const {cart} = useContext(CartContext);

    return (
        <div className='container mx-auto py-4'>
            <h1 className='text-2xl font-bold mb-4'>Cart</h1>
            {cart.length === 0 ? (
                <p className='text-gray-700'>Your Cart is Empty</p>
            ):(
                    <div className='text-gray-800'>
                    {cart.map((item) => (
                        <div key={item.id} className="flex items-center mb-4">
                            <div className="w-1/2">
                                <p>{item.name}</p>
                                <p>${item.price}</p>
                                <p>Subtotal: ${item.quantity * item.price}</p>
                            </div>
                            <div className='w-1/2 text-right'>
                                <button className="bg-red-500 text-white py-1 px-4 rounded">
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                    <button
                        className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
                        onClick={() => router.push('/checkout')}
                    >
                        Proceed to Checkout
                    </button>
                </div>
            )}
        </div>
    );
}

export default CartPage;