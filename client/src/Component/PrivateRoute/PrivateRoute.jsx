import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom';



function PrivateAuth({ children }) {
    // get isAuth from redux auth store
    const isAuth = useSelector((state) => state.auth.isAuth);

    const location = useLocation();

    // isAuth true then go to component otherwise show login page
    if (isAuth) return children;
    return <Navigate to={'/login'} replace state={{ from: location }} />


}

export default PrivateAuth