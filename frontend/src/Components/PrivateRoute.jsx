import React from 'react';
import { useSelector } from 'react-redux';
// import { Navigate } from '../../node_modules/react-router/index';
import { Navigate } from 'react-router';


const PrivateRoute = ({ children }) => {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    return userInfo ? children: <Navigate to="/login"/>
}

export default PrivateRoute
