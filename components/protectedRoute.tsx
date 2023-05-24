import React from "react";
import { useRouter } from "next/router";
import useAuth from "@/hooks/useAuth";

const protectedRoute = (WrappedComponent: React.ComponentType<any>) => {
    const ProtectedRoute: React.FC = (props) => {
        const { isAuthenticated } = useAuth();
        const router = useRouter();
        React.useEffect(() => {
            if (!isAuthenticated) {
                // Redirect to the login page if the user is not authenticated
                router.push("/login");
            }
        }, [isAuthenticated, router]);

        if (!isAuthenticated) {
            // You can show a loading spinner or any other UI while checking authentication
            return <div>Loading...</div>;
        }

        // Pass the props to the wrapped component
        return <WrappedComponent {...props} />;
    };

    return ProtectedRoute;
};

export default protectedRoute;