import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";
import PrivateAuth from '../Component/PrivateRoute/PrivateRoute';
import AdminSingup from '../Pages/Account/AdminSingup';
import Home from '../Pages/Account/Home';
import Login from '../Pages/Account/Login';
import Signup from '../Pages/Account/Signup';
import AddQuestions from '../Pages/Admin/AddQuestions';
import AdminHome from '../Pages/Admin/AdminHome';
import PageNotfound from '../Pages/PageNotfound';
import StudentHome from '../Pages/Student/StudentHome';

export default function MainRoutes() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route exact path='/admin_singup' element={<AdminSingup />} />

                {/* Admin Routes */}
                <Route path='/admin_home' element={<PrivateAuth><AdminHome /></PrivateAuth>} />
                <Route path='/add_question' element={<PrivateAuth><AddQuestions /></PrivateAuth>} />

                {/* Student Routes */}
                <Route path='/student' element={<PrivateAuth><StudentHome /></PrivateAuth>} />

                <Route path="*" element={<PageNotfound />} />
            </Routes>
        </>
    )
}
