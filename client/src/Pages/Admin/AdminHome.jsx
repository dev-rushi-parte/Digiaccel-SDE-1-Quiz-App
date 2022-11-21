import React from 'react'
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
import Spinner from 'react-bootstrap/Spinner';

function AdminHome() {
    const [link, setLink] = useState()
    const [copyStatus, setCopyStatus] = useState(false)
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const token = useSelector((state) => state.auth.authToken)


    const handelCopy = () => {
        navigator.clipboard.writeText(link)
        setShow(true)
    }



    const GenerateLink = () => {
        setLoading(false)
        const id = uuid()
       
        const payload = {
            id,
            token

        }
        dispatch(GetQuizLink(payload))
            .then((res) => {
               
                if (res.type == "GET_QUIZ_LINK") {
                    setLoading(true)
                    setLink(res.payload.data.URL)
                    setCopyStatus(true)

                }
            })
        

    }




    return (
        <div>
            <div style={{ marginBottom: '10rem' }}>
                <NavbarTop />
            </div>
            <div style={{ width: "80%", margin: "auto" }}>
                <>

                    <Card
                        className='container center_div text-center mt-5'
                        style={{ width: '50rem' }}>

                        {loading ? <Card.Body>
                            <Card.Title>Genetate the Link</Card.Title>


                            <div id={style.copyBox} className='mt-4 mb-4 '>
                                {copyStatus ? <div>
                                    <p id={style.Copy}
                                        className='bg-success p-4 text-white rounded-3'
                                        onClick={handelCopy}>
                                        <span className='text-warning fs-6 bold'>Click To Copy Link:</span> {link}
                                    </p>
                                </div> : ""}
                            </div>

                            <Button onClick={GenerateLink} variant="dark">Generate Link</Button>


                        </Card.Body> : <Spinner animation="border" role="status">
                        </Spinner>}
                    </Card>
                    <div id={style.AddBtn} >
                        <Button
                            onClick={() => navigate("/add_question")}
                            variant="info"
                            className='mt-5 col-md-7 container center_div  text-dark'
                        >Add Question</Button>
                    </div>

                </>
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