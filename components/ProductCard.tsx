import React from "react";
import { Product } from "@/types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

type ProductCardProps = {
    product: Product
}

const ProductCard: React.FC <ProductCardProps> = ({product}) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="text-lg font-bold mb-2">
                {product.name}
            </h3>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-gray-800 font-bold mt-2">{product.price}</p>
            <div className="flex flex-col md:flex-row md:justify-between sm:flex-row sm:justify-between items-center mt-4">
                <span className="bg-blue-900 text-white py-1 px-2 rounded text-sm md:mr-4 mb-2 md:mb-0 sm:mb-0">{product.category.name}</span>
                <button className="bg-blue-900 text-white py-1 px-4 rounded"><FontAwesomeIcon icon={faShoppingCart} className="mr-2" /></button>
            </div>
        </div>
    );
};

export default ProductCard;