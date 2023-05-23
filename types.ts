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

export interface CreateOrder{
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

export interface Order {
    id: number,
    customerName: string
    status: string,
    total: number
}

export interface OrderDetail {
    id: number;
    customerName: string;
    customerPhone: string;
    address: string;
    status: string;
    subtotal: number;
    total: number;
    paymentType: string;
    details: {
      id: number  
      unit_price: number,
      subtotal: number,
      product_name: string,
      quantity: number
    }[];
};