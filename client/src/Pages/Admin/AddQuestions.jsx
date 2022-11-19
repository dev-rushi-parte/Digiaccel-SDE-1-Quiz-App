import React from 'react'
import NavbarTop from '../../Component/NavbarTop'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { UserLogin } from '../../Redux/AuthReducer/action';
import Alert from 'react-bootstrap/Alert';

function AddQuestions() {

    const [question, setQuestion] = useState("")
    const [answer, setAnswer] = useState("")

    const navigate = useNavigate();

    const AddQuestion = (e) => {
        e.preventDefault()
    }


    let difficultyArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <div>
            <NavbarTop />
            <div style={{ marginTop: "8rem" }}>
                <div className='pb-4 container center_div col-md-4 border border-5 border-dark rounded-3 mt-5'>
                    <h1 className='text-center mt-5 '>Create Questions</h1>
                    <Form onSubmit={AddQuestion} className='mt-3 p-5' >

                        <Form.Group className="mb-3 ">
                            <Form.Label>Select Difficulty level</Form.Label>
                            <Form.Select className='text-center' >
                                <option>Select Difficulty</option>
                                {difficultyArr.map((item, i) => (
                                    <option key={i} value={item} >{item}</option>

                                ))}

                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Question</Form.Label>
                            <Form.Control value={question}
                                maxLength="30" required
                                onChange={(e) => setQuestion(e.target.value)}
                                type="text"
                                placeholder="Enter Question" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>

                            <Form.Control
                                value={answer}
                                minLength="6" required
                                onChange={(e) => setAnswer(e.target.value)}
                                type='text'
                                placeholder="Password" />


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

export default AddQuestions