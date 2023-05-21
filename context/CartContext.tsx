import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { CartItem, Product } from '../types';

type CartContextType = {
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    clearCart: () => void;
};

type CartProps = {
    children: ReactNode
};

export const CartContext = createContext<CartContextType>({
    cart: [],
    addToCart: () => { },
    removeFromCart: () => {},
    clearCart: () => {},
});

export const CartProvider: React.FC<CartProps> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (product: Product) => {
        const existingProduct = cart.find((item) => item.id === product.id);
        if (existingProduct) {
            const updatedCart = cart.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCart(updatedCart);
        } else {
            const updatedProduct = { ...product, quantity: 1 };
            setCart([...cart, updatedProduct]);
        }
    };

    const removeFromCart = (productId: string) => {}

    const clearCart = () => {
        setCart([]);
    };

    // Save the cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    // Restore the cart from localStorage on app initialization
    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};