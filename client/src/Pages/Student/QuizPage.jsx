import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { GetQuestions } from '../../Redux/AppReducer/Action'
import Quiz from './Quiz'
import Result from './Result'
import Start from './Start'


function QuizPage() {
    const [allQuestions, setAllQestions] = useState([]);
    const [start, setStart] = useState(false)
    const [current, setCurrent] = useState(4)
    const [score, setScore] = useState(0)
    const [exit, setExit] = useState(false)
    const [attempt, setAttempt] = useState(false)
    const { id } = useParams()
    const token = useSelector((state) => state.auth.authToken)
    const dispatch = useDispatch()
    // console.log(allQuestions[0])

    const SortedData = allQuestions.sort((a, b) => a.difficulty - b.difficulty)
    console.log(SortedData)
    // console.log(score)

    const GetData = () => {

        const payload = {
            uuid: id,
            token
        }
        // console.log(payload)
        dispatch(GetQuestions(payload))
            .then((res) => {
                // console.log(res)
                setAllQestions(res.payload.data)
            })

    }

    useEffect(() => {
        GetData()
    }, [])




    if (attempt === true) {
        console.log("1")
    }

    return (
        <>
            {exit === false ?
                <>
                    {
                        start ?
                            <Quiz setExit={setExit} setScore={setScore} question={SortedData[current]} setCurrent={setCurrent} />
                            :
                            <Start setStart={setStart} />
                    }
                </>

                : <Result score={score} />}
        </>
    )
}

export default QuizPage
