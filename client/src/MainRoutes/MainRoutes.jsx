import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";
import Admin from '../Pages/Account/Admin';
import Home from '../Pages/Account/Home';
import Login from '../Pages/Account/Login';
import Signup from '../Pages/Account/Signup';
import PageNotfound from '../Pages/PageNotfound';
export default function MainRoutes() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path='/admin' element={<Admin />} />


                <Route path="*" element={<PageNotfound />} />
            </Routes>
        </>
    )
}
