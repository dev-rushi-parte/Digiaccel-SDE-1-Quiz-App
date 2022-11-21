import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import { useNavigate } from 'react-router-dom'
import NavbarTop from '../../Component/NavbarTop'

function StudentHome() {
    const navigate = useNavigate()

    return (
        <div>
            <NavbarTop />
            <div style={{ marginTop: "8rem" }} >
                <div className='container center_div text-center mt-5'>
                  
                    <Button onClick={() => navigate("/graph")} className='mb-5 col-lg-5 col-sm-6 col-6 fs-5 bold'>Graph</Button>
                </div>
            </div>
        </div>
    )
}

export default StudentHome