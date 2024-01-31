import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [isLoggedInAdmin, setIsLoggedInAdmin] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); 


    const logIn = async (name, password) => {
        try {
            const response = await axios.post(`http://localhost:8080/login`, { name, password });
            if (response.data === 'redirect:/login?success') {
                localStorage.setItem('token', response.data.token);
                setIsLoggedIn(true);
                setErrorMessage('');
                navigate('/')
            }  else if (response.data === 'redirect:/login?success_admin'){
                setIsLoggedInAdmin(true);
                setErrorMessage('');
                navigate('/admin')
            }
            else {
                setErrorMessage('Złe dane logowania');
                console.error("Error during login: unexpected response", response.data);
            }
        } catch (error) {
            console.error("Error during login", error);
            setErrorMessage('Złe dane logowania');
        }
    };

    const logOut = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        setIsLoggedInAdmin(false);
        
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, logIn, logOut, errorMessage, isLoggedInAdmin }}>
            {children}
        </AuthContext.Provider>
    );
};