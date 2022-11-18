import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";
import PrivateAuth from '../Component/PrivateRoute/PrivateRoute';
import Home from '../Pages/Account/Home';
import Login from '../Pages/Account/Login';
import Signup from '../Pages/Account/Signup';
import AdminHome from '../Pages/Admin/AdminHome';
import PageNotfound from '../Pages/PageNotfound';
import StudentHome from '../Pages/Student/StudentHome';
import { AdminSingup } from '../Redux/AuthReducer/action';
export default function MainRoutes() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />

                {/* Admin Routes */}
                <Route path='/admin_singup' element={<PrivateAuth><AdminSingup /></PrivateAuth>} />
                <Route path='/admin_home' element={<PrivateAuth><AdminHome /></PrivateAuth>} />

                {/* Student Routes */}
                <Route path='/student' element={<PrivateAuth><StudentHome /></PrivateAuth>} />

                <Route path="*" element={<PageNotfound />} />
            </Routes>
        </>
    )
}
