import React, {ReactNode} from "react";
import Link from "next/link";

type LayoutProps = {
    children: ReactNode
};


const Layout: React.FC<LayoutProps> = ({ children }) => {
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
                    </ul>
                </nav>
            </header>
            <main className="container mx-auto p-4">{children}</main>
            {/* <footer className="sticky bottom-0 bg-gray-200 p-4"> */}
                {/* Add your footer content here */}
            {/* </footer> */}
        </div>
    );
};

export default Layout;