import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import PageNotfound from '../Pages/PageNotfound';
import Signup from '../Pages/Signup';
export default function MainRoutes() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />


                <Route path="*" element={<PageNotfound />} />
            </Routes>
        </>
    )
}
