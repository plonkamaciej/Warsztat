import React, { createContext, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const logIn = async (username, password) => {
        try {
            const response = await axios.post('/api/login', { username, password });
            localStorage.setItem('token', response.data.token);
            setIsLoggedIn(true);
        } catch (error) {
            console.error("Error during login", error);
            // Handle login error
        }
    };

    const logOut = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, logIn, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};