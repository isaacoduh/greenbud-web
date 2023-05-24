import React, { ReactNode, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "@/hooks/useAuth";
import { useRouter } from 'next/router';

type LayoutProps = {
    children: ReactNode
};


const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { isAuthenticated, logout } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated) {
            // Redirect to the login page if the user is not authenticated
            router.push('/login');
        }
    }, [isAuthenticated, router]);

    // if (!isAuthenticated) {
    //     // Render a loading state or a message while checking authentication
    //     return <div>Loading...</div>;
    // }
    return (
        <div className="bg-white min-h-screen flex flex-col">
            <header className="sticky top-0 bg-gray-700 p-4">
                {/* Add your header content here */}
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/products">
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link href="/orders">
                                Orders
                            </Link>
                        </li>
                        <li>
                            <Link href="/cart">
                                <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                                
                            </Link>
                        </li>

                        {isAuthenticated ? (
                            <div className="flex space-x-4">
                                <li>
                                    <button onClick={logout}>Logout</button>
                                </li>
                                <li className="justify-end items-end">
                                    <Link href="/dashboard">
                                        Dashboard
                                    </Link>
                                </li>
                            </div>
                            
                        ) : (
                            <li className="justify-end items-end">
                                <Link href="/login">
                                    Login
                                </Link>
                            </li>
                        )}

                        {/* <li className="justify-end items-end">
                            <Link href="/login">
                                Login
                            </Link>
                        </li> */}
                    </ul>
                </nav>
            </header>
            <main className="container mx-auto p-4">{children}</main>
            {/* <footer className="sticky bottom-0 bg-gray-200 p-4"> */}
                {/* Add your footer content here */}
            {/* </footer> */}
            <ToastContainer />
        </div>
    );
};

export default Layout;