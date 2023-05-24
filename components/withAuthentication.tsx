import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import useAuth from '@/hooks/useAuth';

const withAuthentication = (WrappedComponent: React.ComponentType<any>) => {
    const RequiresAuthentication: React.FC = (props) => {
        const { isAuthenticated } = useAuth();
        const router = useRouter();

        useEffect(() => {
            if (!isAuthenticated) {
                // Redirect to the login page if the user is not authenticated
                router.push('/login');
            }
        }, [isAuthenticated]); // Add isAuthenticated as a dependency

        if (!isAuthenticated) {
            // You can show a loading spinner or any other UI while checking authentication
            return <div>Loading...</div>;
        }

        // Pass the isAuthenticated prop to the wrapped component
        return <WrappedComponent isAuthenticated={isAuthenticated} {...props} />;
    };

    return RequiresAuthentication;
};

export default withAuthentication;