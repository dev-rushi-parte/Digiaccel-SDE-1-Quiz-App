import React from 'react'
import NavbarTop from '../Component/NavbarTop'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import styles from './All.module.css'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show);

    const SubmitForm = (e) => {
        e.preventDefault()

        const payload = {
            email,
            password
        }
        console.log(payload)
    }

    return (
        <div>
            <NavbarTop />
            <div className='pb-4 container center_div col-md-4 border border-dark rounded-3 mt-5'>
                <h1 className='text-center mt-5 '>LogIn</h1>
                <Form onSubmit={SubmitForm} className='mt-3 p-5' >


                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control value={email}
                            maxLength="30" required
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>

                        <Form.Control
                            value={password}
                            minLength="6" required
                            onChange={(e) => setPassword(e.target.value)}
                            type={show ? 'text' : 'password'}
                            placeholder="Password" />

                        <div id={styles.showBtn} onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}
                        </div>
                    </Form.Group>

                    <Button className='col-md-12 mt-5 ' variant="primary" type="submit">
                        LogIn
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Login
