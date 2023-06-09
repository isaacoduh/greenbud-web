import React, {useEffect, useState, useContext} from "react";
import { CartItem, Product } from "@/types";
import { CartContext } from "@/context/CartContext";
import axios from 'axios';
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import Badge from "@/components/Badge";
import { useProducts } from "@/hooks/useProducts";
import { fetchProducts } from "./api/productApi";

const ProductsPage = () => {
    // const { data, isLoading, error } = useProducts();
    const [products, setProducts] = useState<Product[]>([]);
    const [cart, setCart] = useState<CartItem[]>([]);
    const { addToCart } = useContext(CartContext);

    // const addToCart = (product: Product) => {
    //     const existingProduct = cart.find((item) => item.id === product.id);
    //     if(existingProduct){
    //         const updatedCart = cart.map((item) => item.id === product.id ? {...item, quantity: item.quantity + 1} : item);
    //         setCart(updatedCart)
    //     } else {
    //         const updatedProduct = {...product, quantity: 1};
    //         setCart([...cart, updatedProduct]);
    //     }
    // };

    const getProducts = async () => {
        try {
            const productList = await fetchProducts();
            setProducts(productList);
            return productList; // Return the fetched products
        } catch (error) {
            // Handle error
            throw error;
        }
    };


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productList = await getProducts();
                setProducts(productList);
            } catch (error) {
                
            }
        }

        fetchProducts();
    },[]);

    return (
        <div>
            <h1 className="text-gray-500">Products Page | <Badge text={products.length.toString()} color="gray"/></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} addToCart={addToCart}/>
                ))}
            </div>
            <nav>
                <Link href="/">
                    Home
                </Link>
            </nav>
        </div>
    );
};

export default ProductsPage;