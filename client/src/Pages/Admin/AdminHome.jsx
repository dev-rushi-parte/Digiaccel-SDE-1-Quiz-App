import React from 'react'
import Form from 'react-bootstrap/Form';
import NavbarTop from '../../Component/NavbarTop'
import style from './Admin.module.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { useNavigate } from 'react-router-dom';
import uuid from "react-uuid"
import { useDispatch, useSelector } from 'react-redux';
import { GetQuizLink } from '../../Redux/AppReducer/Action';

function AdminHome() {
    const [link, setLink] = useState()
    const [copyStatus, setCopyStatus] = useState(false)
    const [limit, setLimit] = useState('10')
    const [show, setShow] = useState(false);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const token = useSelector((state) => state.auth.authToken)


    const handelCopy = () => {
        navigator.clipboard.writeText(link)
        setShow(true)
    }

    const HandelSelect = (e) => {

        setLimit(e.target.value)
    }

    const GenerateLink = () => {

        const id = uuid()
        // console.log(id)
        const payload = {
            id,
            token,
            limit
        }
        dispatch(GetQuizLink(payload))
            .then((res) => {
                console.log(res)
                if (res.type == "GET_QUIZ_LINK") {
                    setLink(res.payload.data.URL)
                    setCopyStatus(true)

                }
            })
        console.log(payload)

    }




    return (
        <div>
            <div style={{ marginBottom: '10rem' }}>
                <NavbarTop />
            </div>
            <div style={{ width: "80%", margin: "auto" }}>


                <Card
                    className='container center_div text-center mt-5'
                    style={{ width: '50rem' }}>

                    <Card.Body>
                        <Card.Title>Genetate the Link</Card.Title>

                        <Form.Select
                            onChange={HandelSelect}
                            className='container center_div text-center mt-3'
                            style={{ width: '20rem' }} aria-label="Default select example">
                            <option>Select how Many Question</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                        </Form.Select>


                        <div id={style.copyBox} className='mt-4 mb-4'>
                            {copyStatus ? <div>
                                <p id={style.Copy}
                                    className='bg-success p-4 text-white rounded-3'
                                    onClick={handelCopy}>
                                    <span className='text-warning fs-6 bold'>Click To Copy Link:</span> {link}
                                </p>
                            </div> : ""}
                        </div>

                        <Button onClick={GenerateLink} variant="dark">Generate Link</Button>


                    </Card.Body>
                </Card>
                <div id={style.AddBtn} >
                    <Button
                        onClick={() => navigate("/add_question")}
                        variant="info"
                        className='mt-5 col-md-7 container center_div  text-dark'
                    >Add Question</Button>
                </div>
            </div>

            <Row>
                <Col xs={6}>
                    <ToastContainer style={{ marginTop: "150px" }} position="top-center">
                        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                            <Toast.Body className='text-center bg-warning text-dark '>Copied</Toast.Body>
                        </Toast>
                    </ToastContainer>
                </Col>

            </Row>
        </div >
    )
}

export default AdminHome