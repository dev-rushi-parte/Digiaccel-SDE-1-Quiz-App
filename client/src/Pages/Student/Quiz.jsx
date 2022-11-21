import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import { useDispatch, useSelector } from 'react-redux'
import { PostScore } from '../../Redux/AppReducer/Action'
import { LoginUserData } from '../../Redux/AuthReducer/action'
import style from "./Quiz.module.css"
function Quiz(props) {

   
    const [ans, setAns] = useState([])
    const [LoginUser, setLoginUser] = useState()
    const [questionCount, setQuestionCount] = useState(1)
    const token = useSelector((state) => state.auth.authToken)
    const dispatch = useDispatch()
 

    // Function For next question (Pagination)
    const nextQuestion = () => {

        if (props.question.multiAnswer.length > 0 && props.question.multiAnswer.length <= 2 && ans.includes(props.question.multiAnswer[0]) && ans.includes(props.question.multiAnswer[1])) {
            props.setCurrent(prv => prv + 1)
            props.setScore(prv => prv + 5)
            setAns("")
            console.log("1")
            if (props.question.difficulty == 10) {
                props.setExit(true)
            }
            setQuestionCount(questionCount + 1)
        }

        else if (ans[0] == props.question.answer) {

            props.setCurrent(prv => prv + 1)
            props.setScore(prv => prv + 5)
            setAns("")
            if (props.question.difficulty == 10) {
                props.setExit(true)
            }
            setQuestionCount(questionCount + 1)
            console.log("2")
        }
        else {
            console.log("3")
            props.setCurrent(prv => prv - 1)
            props.setScore(prv => prv - 2)

            setAns("")
            if (props.question.difficulty == 1) {
                props.setExit(true)
            }
            setQuestionCount(questionCount + 1)
        }

    }

    // PostScore || savescore in data base Function

    const SaveScore = () => {
        console.log(props.score)

        const payload = {
            id: LoginUser._id,
            token,
            scrore: props.score
        }
        dispatch(PostScore(payload))
            .then((res) => {
                console.log(res)
            })
        props.setExit(true)




    }

    // Answer Saving

    const AnswerFun = (answer) => {
        setAns([...ans, answer]);

    }

    useEffect(() => {
        dispatch(LoginUserData(token))
            .then((res) => {
                
                setLoginUser(res?.payload)
            })
    }, [])


    return (
        <>

            <div style={{ marginTop: "8rem" }} className=' bg-dark col-md-6  container center_div text-center border border-dark rounded-3' >
                {/* Difculty */}
                <div
                    className='text-light container center_div  position-absolute fs-5 mt-2' >
                    Diffculty:<span className='ps-2'  >{props.question.difficulty}</span></div>


                {/* Multi answer question */}

                {props.question.multiAnswer.length > 0 ? <div className='text-danger mt-3 '>
                    Multi Answer Question
                </div> : ""}

                {/* Question */}
                <div className='text-light mt-5 fs-6 fw-bold' >{` ${questionCount}) ${props.question.question}`} </div>

                <div id={style.options} className='mt-5'>
                    {/* Option1 */}
                    <Button onClick={() => AnswerFun(props.question.option1)}
                        // Conditional Rendring for correct and incorrect Answer
                        // Multi answer
                        id={props.question.multiAnswer.length > 0 ?
                            ans.length > 0 ?
                                ans.includes(props.question.option1) ?
                                    props.question.multiAnswer.includes(props.question.option1) ?
                                        style.correct : style.wrong : ans.length == 2 ?
                                        props.question.multiAnswer.includes(props.question.option1) ?
                                            style.correct : ""
                                        : "" : "" :
                            // single answer
                            !props.question.answer == "" ? ans.length > 0 ?
                                ans[0] === props.question.option1 ?
                                    ans[0] === props.question.answer ? style.correct : style.wrong
                                    : props.question.answer === props.question.option1 ? style.correct : "" : "" : ""}



                        className='col-lg-4 col-sm-5 col-5 mb-5 bg-light text-dark fs-6 fw-bold' >
                        {props.question.option1} </Button>

                    {/* Option2 */}

                    <Button
                        onClick={() => AnswerFun(props.question.option2)}
                        // Conditional Rendring for correct and incorrect Answer
                        // Multi answer
                        id={props.question.multiAnswer.length > 0 ?
                            ans.length > 0 ?
                                ans.includes(props.question.option2) ?
                                    props.question.multiAnswer.includes(props.question.option2) ?
                                        style.correct : style.wrong : ans.length == 2 ?
                                        props.question.multiAnswer.includes(props.question.option2) ?
                                            style.correct : ""
                                        : "" : "" :
                            // Single answer
                            !props.question.answer == "" ? ans.length > 0 ?
                                ans[0] === props.question.option2 ?
                                    ans[0] === props.question.answer ? style.correct : style.wrong
                                    : props.question.answer === props.question.option2 ? style.correct : "" : "" : ""}


                        className='col-lg-4 col-sm-5 col-5 mb-5 bg-light text-dark fs-6 fw-bold' >
                        {props.question.option2}</Button>

                    {/* Option3 */}

                    <Button
                        onClick={() => AnswerFun(props.question.option3)}
                        // Conditional Rendring for correct and incorrect Answer
                        // Multi answer
                        id={props.question.multiAnswer.length > 0 ?
                            ans.length > 0 ?
                                ans.includes(props.question.option3) ?
                                    props.question.multiAnswer.includes(props.question.option3) ?
                                        style.correct : style.wrong : ans.length == 2 ?
                                        props.question.multiAnswer.includes(props.question.option3) ?
                                            style.correct : ""
                                        : "" : "" :
                            // single Answer
                            !props.question.answer == "" ? ans.length > 0 ?
                                ans[0] === props.question.option3 ?
                                    ans[0] === props.question.answer ? style.correct : style.wrong
                                    : props.question.answer === props.question.option3 ? style.correct : "" : "" : ""}



                        className='col-lg-4 col-sm-5 col-5 mb-5 bg-light text-dark fs-6 fw-bold' >
                        {props.question.option3}</Button>

                    {/* Option4 */}

                    <Button
                        onClick={() => AnswerFun(props.question.option4)}
                        // Conditional Rendring for correct and incorrect Answer
                        // Multi answer
                        id={props.question.multiAnswer.length > 0 ?
                            ans.length > 0 ?
                                ans.includes(props.question.option4) ?
                                    props.question.multiAnswer.includes(props.question.option4) ?
                                        style.correct : style.wrong : ans.length == 2 ?
                                        props.question.multiAnswer.includes(props.question.option4) ?
                                            style.correct : ""
                                        : "" : "" :
                            // single Answer
                            !props.question.answer == "" ? ans.length > 0 ?
                                ans[0] === props.question.option4 ?
                                    ans[0] === props.question.answer ? style.correct : style.wrong
                                    : props.question.answer === props.question.option4 ? style.correct : "" : "" : ""}


                        className='col-lg-4 col-sm-5 col-5 mb-5 bg-light text-dark fs-6 fw-bold' >
                        {props.question.option4}</Button>
                </div>

                {/* Next button */}
                {/* Checking all coditions for save button */}
                {questionCount < 10 && props.question.difficulty < 10 && props.question.difficulty > 1 ?
                    // Multi answer

                    props.question.multiAnswer.length > 0 ?
                        <Button disabled={ans.length == 2 ? false : true} className='col-lg-6 col-md-5 col-sm-4 col-5 mb-5 mt-5'
                            onClick={nextQuestion} >Next</Button> :

                        // Single answer

                        <Button disabled={ans == '' ? true : false} className='col-lg-6 col-md-5 col-sm-4 col-5 mb-5 mt-5'
                            onClick={nextQuestion} >Next</Button> :
                    // last button will be save
                    <Button onClick={SaveScore} className='col-lg-6 col-md-5 col-sm-4 col-5 mb-5 mt-5'>
                        Save</Button>}
            </div>
        </>
    )
}

export default Quiz



// multianswer.length > 0 ?

// :
//     answer !== ""