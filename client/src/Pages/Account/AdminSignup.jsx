import React from 'react'
import NavbarTop from '../../Component/NavbarTop'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import styles from './All.module.css'
import { useDispatch } from 'react-redux';
import Alert from 'react-bootstrap/Alert';
import { AdminSingupAction } from '../../Redux/AuthReducer/action';
import { useNavigate } from 'react-router-dom';

function AdminSignup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false);
    const [alertSuccess, setAlertSuccess] = useState(false);
    const [alertFail, setAlertFail] = useState(false);
    const [alertSms, setAlertSms] = useState("")
    let dispatch = useDispatch()
    let navigate = useNavigate()

    const handleClick = () => setShow(!show);


    const SubmitForm = (e) => {
        e.preventDefault()

        const payload = {
            name,
            email,
            password
        }
        console.log(payload)
        dispatch(AdminSingupAction(payload))
            .then((res) => {
                setName("")
                setEmail("")
                setPassword("")

                if (res.type == "ADMIN_SUCCESS") {
                    setAlertSuccess(true)
                    setTimeout(() => {
                        setAlertSuccess(false)
                    }, 1000)
                    navigate("/login")
                }
                else if (res.type == "SINGUP_FAILURE") {
                    setAlertFail(true)
                    setAlertSms("User already exists")
                    setTimeout(() => {
                        setAlertFail(false)
                    }, 1000)

                }
                else {
                    setAlertFail(true)
                    setTimeout(() => {
                        setAlertFail(false)
                    }, 1000)
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
                    <h1 className='text-center mt-5 text-danger'>Admin SignUp</h1>
                    <Form onSubmit={SubmitForm} className='mt-3 p-5' >

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                value={name} required
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                placeholder="Enter Name" />

                        </Form.Group>

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

                        <Button className='col-md-12 mt-3 ' variant="danger" type="submit">
                            SignUp
                        </Button>
                        <Button onClick={() => navigate("/login")} style={{ marginLeft: '49%' }} variant="link"> Have an account? Login</Button>
                    </Form>
                </div>

            </div>
        </div>
    )
}

export default AdminSignup
