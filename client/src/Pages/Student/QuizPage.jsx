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
    const { id } = useParams()
    const token = useSelector((state) => state.auth.authToken)
    const dispatch = useDispatch()


    const SortedData = allQuestions?.sort((a, b) => a.difficulty - b.difficulty)
    console.log(SortedData)


    const GetData = () => {

        const payload = {
            uuid: id,
            token
        }

        dispatch(GetQuestions(payload))
            .then((res) => {

                setAllQestions(res.payload.data)
            })

    }

    useEffect(() => {
        GetData()
    }, [allQuestions<10])








    return (
        <>
            {exit === false ?
                <>
                    {
                        start ?
                            SortedData.length == 10 ? <Quiz score={score} setExit={setExit} setScore={setScore} question={SortedData[current]} setCurrent={setCurrent} /> : "Loading..."
                            :
                            <Start SortedData={SortedData}  setStart={setStart} />
                    }
                </>

                : <Result score={score} />}
        </>
    )
}

export default QuizPage
