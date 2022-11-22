import React, { useEffect } from 'react'
import NavbarTop from '../../Component/NavbarTop'
import { useDispatch, useSelector } from "react-redux"
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';
import { LoginUserData } from '../../Redux/AuthReducer/action';
import { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import RoleAuthorization from '../../Component/RoleAuthrization/RoleAuthorization';

export default function Home() {
    const isAuth = useSelector((state) => state.auth.isAuth);
    const token = useSelector((state) => state.auth.authToken)
    const user = useSelector((state) => state.auth.LoginUser)
    console.log(user)

    const [userName, setUserName] = useState()
    const navigate = useNavigate()

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(LoginUserData(token))
            .then((res) => {
                setUserName(res?.payload)
            })
    }, [])

    console.log(userName?.role)

    return (
        <div>
            <NavbarTop />
            <div style={{ marginTop: "8rem" }}>
                <h1
                    className='container center_div text-center mt-5'>
                    WelCome To Home Page</h1>

                {isAuth ? <>
                    {userName ? <div className='container center_div text-center mt-5'>

                        {/* {user ?  */}
                        <RoleAuthorization>
                            <Button
                                onClick={() => navigate("/admin_home")}
                                className='mt-5 p-3 fs-3 bg-danger'
                                style={{ width: "200px" }} >
                                Admin</Button>
                            <br />
                        </RoleAuthorization>



                        <Button
                            className='mt-5 p-3 fs-3 bg-primary'
                            style={{ width: "200px" }}
                            onClick={() => navigate("/student")}>
                            Student</Button>

                    </div> : <Spinner animation="border" />}
                </> : ""}
            </div>

        </div>
    )
}
