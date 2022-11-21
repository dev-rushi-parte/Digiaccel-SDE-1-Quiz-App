import React from 'react'
import NavbarTop from '../../Component/NavbarTop'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { CreateQuestions } from '../../Redux/AppReducer/Action';
import { useNavigate } from 'react-router-dom';
function AddQuestions() {

    const [question, setQuestion] = useState("")
    const [multi, setMulti] = useState(false)
    const [answer, setAnswer] = useState("")
    const [answer2, setAnswer2] = useState("")
    const [option1, setOption1] = useState("")
    const [option2, setOption2] = useState("")
    const [option3, setOption3] = useState("")
    const [option4, setOption4] = useState("")
    const [difficulty, setDifficulty] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const token = useSelector((state) => state.auth.authToken)

    // Add question Function
    const AddQuestion = (e) => {
        e.preventDefault()
        if (multi) {
            const payload = {
                token,
                difficulty,
                question,
                multiAnswer: [answer, answer2],
                option1,
                option2,
                option3,
                option4
            }
            console.log(payload)
            dispatch(CreateQuestions(payload))
                .then((res) => {
                    console.log(res)
                    if (res.type == 'ADD_QUESTION') {

                        setQuestion("")
                        setAnswer("")
                        setAnswer2("")
                        setOption1("")
                        setOption2("")
                        setOption3("")
                        setOption4("")
                        setMulti(false)
                        alert("Question Created")
                        navigate("/")
                    }
                    else {
                        alert("Something went wrong")
                    }
                })
        }
        else {
            const payload = {
                token,
                difficulty,
                question,
                answer,
                option1,
                option2,
                option3,
                option4
            }
            dispatch(CreateQuestions(payload))
                .then((res) => {
                    console.log(res)
                    if (res.type == 'ADD_QUESTION') {
                        alert("Question Created")
                    }
                    else {
                        alert("Something went wrong")
                    }
                })

           
        }
    }


    // ?for question Type multi or single
    const QuestionType = (e) => {
        console.log(e.target.value)

        if (e.target.value == 'multi') {
            setMulti(true)
        }
        else {
            setMulti(false)
        }
    }
    // for question level
    let difficultyArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <div>
            <NavbarTop />
            <div style={{ marginTop: "8rem" }}>
                <div className='pb-4 container center_div col-md-6 border border-5 border-dark rounded-3 mt-5'>
                    <h1 className='text-center mt-5 '>Create Questions</h1>




                    <Form onSubmit={AddQuestion} className='mt-3 p-5' >


                        <Form.Group className="mb-3 ">
                            <Form.Label className=''>Select Question Type</Form.Label>
                            <Form.Select onChange={QuestionType} className='text-center' >
                                <option value="single">Single Correct Answer</option>
                                <option value="multi">Multiple Correct Answers</option>


                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3 ">
                            <Form.Label>Select Difficulty level</Form.Label>
                            <Form.Select className='text-center' onChange={(e) => setDifficulty(e.target.value)}>
                                <option>Select Difficulty</option>
                                {difficultyArr.map((item, i) => (
                                    <option key={i} value={item} >{item}</option>

                                ))}

                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">

                            <Form.Label>Question</Form.Label>
                            <FloatingLabel controlId="floatingTextarea2" label="Enter Question">

                                <Form.Control
                                    value={question}
                                    required
                                    onChange={(e) => setQuestion(e.target.value)}
                                    as="textarea"
                                    style={{ height: '100px' }}
                                />
                            </FloatingLabel>
                        </Form.Group>



                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Answer</Form.Label>

                            <FloatingLabel
                                controlId="floatingTextarea"
                                label="Answer"
                                className="mb-3"
                            >
                                <Form.Control
                                    as="textarea"
                                    value={answer}
                                    required
                                    onChange={(e) => setAnswer(e.target.value)} />

                            </FloatingLabel>

                        </Form.Group>

                        {multi ?
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Answer 2</Form.Label>

                                <Form.Control
                                    value={answer2}
                                    required
                                    onChange={(e) => setAnswer2(e.target.value)}
                                    type='text'
                                    placeholder="Answer 2" />


                            </Form.Group> : ""}

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Option 1</Form.Label>

                            <Form.Control
                                value={option1}
                                required
                                onChange={(e) => setOption1(e.target.value)}
                                type='text'
                                placeholder="Option 1" />


                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Option 2</Form.Label>

                            <Form.Control
                                value={option2}
                                required
                                onChange={(e) => setOption2(e.target.value)}
                                type='text'
                                placeholder="Option 2" />


                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Option 3</Form.Label>

                            <Form.Control
                                value={option3}
                                required
                                onChange={(e) => setOption3(e.target.value)}
                                type='text'
                                placeholder="Option 3" />


                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Option 4</Form.Label>

                            <Form.Control
                                value={option4}
                                required
                                onChange={(e) => setOption4(e.target.value)}
                                type='text'
                                placeholder="Option 4" />


                        </Form.Group>

                        <Button className='col-md-12 mt-5 ' variant="primary" type="submit">
                            Add Question
                        </Button>

                    </Form>
                </div>

            </div>
        </div>
    )
}

export default AddQuestions