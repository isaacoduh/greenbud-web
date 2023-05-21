import React, {useContext, useState} from 'react';
import { CartContext } from '@/context/CartContext';
import { CartItem } from '@/types';
import Link from 'next/link';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';

const CheckoutPage: React.FC = () => {
    const {cart, clearCart} = useContext(CartContext);
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [paymentType, setPaymentType] = useState('');
    const router = useRouter();

    // calculate subtotal
    const tax = 0;
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const total = subtotal + tax;

    console.log(tax);
    console.log(subtotal);
    console.log(total);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({firstName,lastName, address, phone, paymentType, cart, subtotal, total});
        toast.success('Order Completed!',{
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000, // 3 seconds
            hideProgressBar: true,
        });

        //clear cart
        clearCart();

        // route to /products
        router.push('/products');
    };

    return (
        <div className='container mx-auto py-4 bg-white'>
            <h1 className='text-2xl font-bold mb-4 text-gray-800'>Checkout</h1>
            {cart.length === 0 ? (
                <div>
                    <p>Your cart is empty.</p>
                    <Link href="/products">
                        shopping page
                    </Link>{' '}
                    to add items to your cart.
                </div>
            ):(
                <div>
                        <h2 className='text-lg font-bold mb-2 text-gray-800'>Cart Items</h2>
                    <ul>
                        {cart.map((product: CartItem) => (
                            <li className='text-gray-500' key={product.id}>
                                {product.name} - Quantity: {product.quantity}
                            </li>
                        ))}
                    </ul>
                    <div className='mb-4'>
                        <p className='text-gray-700'>Subtotal: ${subtotal.toFixed(2)}</p>
                        <p className='text-gray-700'>Total: ${total.toFixed(2)}</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">
                                    First Name:
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                    className="appearance-none border rounded w-full bg-slate-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">
                                    Last Name:
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                    className="appearance-none border bg-slate-100 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
                                    Address:
                                </label>
                                <input
                                    type="text"
                                    id="address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    required
                                    className="appearance-none bg-slate-100 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
                                    Phone:
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                    className="appearance-none bg-slate-100 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className='mb-9'>
                                <label htmlFor="paymentType" className="block text-gray-700 font-bold mb-2">
                                    Payment Type:
                                </label>
                                <select
                                    id='paymentType'
                                    value={paymentType}
                                    onChange={(e) => setPaymentType(e.target.value)}
                                    required
                                    className='appearance-none bg-slate-100 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                >
                                    <option value="">Select Payment Type</option>
                                    <option value="cash">Cash</option>
                                    <option value="card">Card</option>
                                </select>
                                {paymentType === 'cash' ? (
                                    <button
                                        type='submit'
                                        className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                                    >Complete Order</button>
                                ):(
                                    <button
                                        type='button'
                                            className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                                    >
                                        Proceed to Payment
                                    </button>
                                )}
                            </div>
                    </form>
                </div>
            )}
        </div>
    );
}

export default CheckoutPage;