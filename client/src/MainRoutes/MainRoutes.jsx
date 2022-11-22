import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";
import PrivateAuth from '../Component/PrivateRoute/PrivateRoute';
import AdminSignup from '../Pages/Account/AdminSignup';
import Home from '../Pages/Account/Home';
import Login from '../Pages/Account/Login';
import Signup from '../Pages/Account/Signup';
import AddQuestions from '../Pages/Admin/AddQuestions';
import AdminHome from '../Pages/Admin/AdminHome';
import LineGraph from '../Pages/Graph/LineGraph';
import PageNotfound from '../Pages/PageNotfound';
import QuizPage from '../Pages/Student/QuizPage';
import StudentHome from '../Pages/Student/StudentHome';

export default function MainRoutes() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route exact path='/admin_singup' element={<AdminSignup />} />

                {/* Admin Routes */}
                <Route path='/admin_home' element={<PrivateAuth><AdminHome /></PrivateAuth>} />
                <Route path='/add_question' element={<PrivateAuth><AddQuestions /></PrivateAuth>} />

                {/* Student Routes */}
                <Route path='/student' element={<PrivateAuth><StudentHome /></PrivateAuth>} />
                <Route path='/quiz/:id' element={<PrivateAuth><QuizPage /></PrivateAuth>} />

                {/* Graph Route */}

                <Route path='/graph' element={<PrivateAuth><LineGraph /></PrivateAuth>} />

                {/* For wrong URL */}
                <Route path="*" element={<PageNotfound />} />
            </Routes>
        </>
    )
}
