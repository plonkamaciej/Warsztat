import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider.jsx';

const PrivateRoute = ({ children }) => {
    const { isLoggedIn, isLoggedInAdmin } = useContext(AuthContext);

    if(isLoggedInAdmin) return isLoggedInAdmin ? children : <Navigate to="/LoginPage" replace />;
    else return isLoggedIn ? children : <Navigate to="/LoginPage" replace />;
};

export default PrivateRoute;