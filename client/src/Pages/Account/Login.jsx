import React from 'react'
import NavbarTop from '../../Component/NavbarTop'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import styles from './All.module.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { UserLogin } from '../../Redux/AuthReducer/action';
import Alert from 'react-bootstrap/Alert';

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)
    const [alertSuccess, setAlertSuccess] = useState(false);
    const [alertFail, setAlertFail] = useState(false);
    const [alertSms, setAlertSms] = useState("")
    let dispatch = useDispatch()
    let navigate = useNavigate()
    let location = useLocation()

    const handleClick = () => setShow(!show);

    const SubmitForm = (e) => {
        e.preventDefault()

        const payload = {
            email,
            password
        }
        console.log(payload)
        dispatch(UserLogin(payload))
            .then((res) => {
                
                setEmail("")
                setPassword("")

                if (res.type == "LOGIN_SUCCESS") {
                    alert("Login Success")
                    setAlertSuccess(true)

                    setTimeout(() => {
                        setAlertSuccess(false)
                    }, 2000)

                    if (location.state?.from) {
                        navigate(location.state.from)
                    }
                    else {
                        navigate("/")
                    }


                }
                else if (res.type == "LOGIN_FAILURE") {
                    setAlertFail(true)
                    setAlertSms(res.payload.response.data.message)
                    setTimeout(() => {
                        setAlertFail(false)
                    }, 2000)

                }
                else {
                    setAlertFail(true)
                    setTimeout(() => {
                        setAlertFail(false)
                    }, 2000)

                }

            })
    }

    return (
        <div>
            <NavbarTop />
            <div style={{ marginTop: "8rem" }}>

                {alertSuccess ? <Alert id={styles.alert} className='col-md-5  text-center container center_div' key='success' variant='success'>
                    SuccessFully Singup
                </Alert> : ""}


                {alertFail ? <Alert id={styles.alert} className='col-md-5 text-center container center_div' key='danger' variant='danger'>
                    {!alertSms == "" ? alertSms : "Somthing went wrong"}
                </Alert> : ""}

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
                        <Button onClick={() => navigate("/signup")} style={{ marginLeft: '45%' }} variant="link"> Have an account? Sign up</Button>

                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Login
