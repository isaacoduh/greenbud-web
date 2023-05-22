export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    category: {
        name: string
    }
}

export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

export interface Order{
    firstName: string;
    lastName: string,
    address: string,
    phone: string,
    paymentType: string,
    cart: object,
    tax: number,
    subtotal: number,
    total: number
}