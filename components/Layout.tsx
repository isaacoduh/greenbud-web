import React, {ReactNode} from "react";

type LayoutProps = {
    children: ReactNode
};


const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="container mx-auto">
            <header className="py-4">
                {/* Add your header content here */}
            </header>
            <main>{children}</main>
            <footer className="py-4">
                {/* Add your footer content here */}
            </footer>
        </div>
    );
};

export default Layout;