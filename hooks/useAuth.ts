import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api";

interface User {
    id: string,
    name: string
}

interface AuthData {
    token: string;
    user: User
}

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();



    // check if user is already authenticated
    useEffect(() =>{
        console.log('check-aut');
        checkAuthentication()
    }, [router]);

    const checkAuthentication = () => {
        const token = localStorage.getItem('token');
        const storedUser = localStorage.getItem('user');

        if(token && storedUser){
            setIsAuthenticated(true);
            setUser(JSON.parse(storedUser));
        } else {
            setIsAuthenticated(false);
            setUser(null);
        }
    };

    const login = async (email: string, password: string) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/login`, {email, password});
            console.log(response);
            
            if(response.status === 200){
                setIsAuthenticated(true);
                setUser(response.data.data.user);

                // Store the token and user data in local storage
                localStorage.setItem('token', response.data.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.data.user));

                // Redirect to the desired page (e.g., dashboard)
                router.push('/dashboard');
            } else {
                // Handle login error
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Login failed:', error);
        }
    }

    const logout = () => {
        // Clear the authentication data from local storage
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        // Reset the authenticated state and user data
        setIsAuthenticated(false);
        setUser(null);

        // Redirect to the login page
        router.push('/login');
    }

    return {
        isAuthenticated,
        user,
        login,
        logout
    }
}

export default useAuth;