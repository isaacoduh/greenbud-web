import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const protectedRoute = (WrappedComponent: React.FC) => {
    const Wrapper = () => {
        const [token, setToken] = useState('');
        const router = useRouter();

        useEffect(() => {
            const storedToken = localStorage.getItem('token');
            if(storedToken){
                setToken(storedToken);
            } else {
                router.push('/login');
            }
            // if (!token) {
            //     router.push('/login'); // Redirect to login page if no token is found
            // }
        }, []);

        if (!token) {
            return null; // Render nothing while redirecting
        }

        return <WrappedComponent />;
    };

    return Wrapper;
};

export default protectedRoute;