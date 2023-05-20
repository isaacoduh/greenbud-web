import React, {useEffect, useState} from "react";
import { Product } from "@/types";
import axios from 'axios';
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import Badge from "@/components/Badge";

const ProductsPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/products');
                const products = response.data;
                setProducts(products);
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
                    <ProductCard key={product.id} product={product}/>
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