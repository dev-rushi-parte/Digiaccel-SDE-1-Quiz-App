import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import style from "./Quiz.module.css"
function Quiz(props) {

    // console.log(props)
    const [ans, setAns] = useState([])
    const [questionCount, setQuestionCount] = useState(1)
    console.log(ans)
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

    const AnswerFun = (answer) => {
        setAns([...ans, answer]);

    }
    return (
        <>

            <div style={{ marginTop: "8rem" }} className=' bg-dark col-md-6  container center_div text-center border border-dark rounded-3' >
                {/* Difculty */}
                <div
                    className='text-light container center_div  position-absolute fs-5 mt-2' >
                    Diffculty:<span className='ps-2'  >{props.question.difficulty}</span></div>

                {/* Question */}
                <div className='text-light mt-5 fs-6 fw-bold' >{` ${questionCount}) ${props.question.question}`} </div>

                <div id={style.options} className='mt-5'>
                    {/* Option1 */}
                    <Button onClick={() => AnswerFun(props.question.option1)}
                        id={props.question.multiAnswer.length > 0 ? props.question.multiAnswer.includes(props.question.option1) ? style.correct : "" :
                            ans.length > 0 ?
                                ans === props.question.option1 ?
                                    ans === props.question.answer ? style.correct : style.wrong
                                    : props.question.answer === props.question.option1 ? style.correct : ""
                                : ""}

                        className='col-lg-4 col-sm-5 col-5 mb-5 bg-light text-dark fs-6 fw-bold' >
                        {props.question.option1} </Button>

                    {/* Option2 */}

                    <Button
                        onClick={() => AnswerFun(props.question.option2)}
                        id={props.question.multiAnswer.length > 0 ? props.question.multiAnswer.includes(props.question.option2) ? style.correct : "" :
                            ans.length > 0 ? ans === props.question.option2 ? ans === props.question.answer ? style.correct : style.wrong : props.question.answer === props.question.option2 ? style.correct : "" : ""}

                        className='col-lg-4 col-sm-5 col-5 mb-5 bg-light text-dark fs-6 fw-bold' >
                        {props.question.option2}</Button>

                    {/* Option3 */}

                    <Button
                        onClick={() => AnswerFun(props.question.option3)}
                        id={props.question.multiAnswer.length > 0 ? props.question.multiAnswer.includes(props.question.option3) ? style.correct : "" :
                            ans.length > 0 ? ans === props.question.option3 ? ans === props.question.answer ? style.correct : style.wrong : props.question.answer === props.question.option3 ? style.correct : "" : ""}


                        className='col-lg-4 col-sm-5 col-5 mb-5 bg-light text-dark fs-6 fw-bold' >
                        {props.question.option3}</Button>

                    {/* Option4 */}

                    <Button
                        onClick={() => AnswerFun(props.question.option4)}
                        id={props.question.multiAnswer.length > 0 ? props.question.multiAnswer.includes(props.question.option4) ? style.correct : "" :
                            ans.length > 0 ? ans === props.question.option4 ? ans === props.question.answer ? style.correct : style.wrong : props.question.answer === props.question.option4 ? style.correct : "" : ""}
                        className='col-lg-4 col-sm-5 col-5 mb-5 bg-light text-dark fs-6 fw-bold' >
                        {props.question.option4}</Button>
                </div>

                {/* Next button */}

                {questionCount < 10 ? <Button disabled={ans == '' ? true : false} className='col-lg-6 col-md-5 col-sm-4 col-5 mb-5 mt-5'
                    onClick={nextQuestion} >Next</Button> :
                    <Button onClick={() => props.setExit(true)} className='col-lg-6 col-md-5 col-sm-4 col-5 mb-5 mt-5'>
                        Save</Button>}
            </div>
        </>
    )
}

export default Quiz
