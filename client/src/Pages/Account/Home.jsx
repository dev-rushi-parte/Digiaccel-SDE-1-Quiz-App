import React from 'react'
import NavbarTop from '../../Component/NavbarTop'
import { useSelector } from "react-redux"
import Button from 'react-bootstrap/esm/Button';
import RoleAuthrization from '../../Component/RoleAuthrization/RoleAuthrization';

export default function Home() {
    const isAuth = useSelector((state) => state.auth.isAuth);
    console.log(isAuth)
    return (
        <div>
            <NavbarTop />
            <div style={{ marginTop: "8rem" }}>
                <h1
                    className='container center_div text-center mt-5'>
                    Wel-Come To Home Page</h1>

                {isAuth ? <div className='container center_div text-center mt-5'>
                    <RoleAuthrization> <Button className='mt-5 p-3 fs-3 bg-danger' style={{ width: "200px" }} >Admin</Button><br /></RoleAuthrization>
                    <Button className='mt-5 p-3 fs-3 bg-primary' style={{ width: "200px" }} >Student</Button>
                </div> : ""}
            </div>

        </div>
    )
}
