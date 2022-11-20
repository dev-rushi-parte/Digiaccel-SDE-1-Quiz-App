import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Button from 'react-bootstrap/esm/Button'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { GetQuestions } from '../../Redux/AppReducer/Action'
import Quiz from './Quiz'
import style from "./Quiz.module.css";
import Start from './Start'


function QuizPage() {
    const [allQuestions, setAllQestions] = useState([]);
    const [start, setStart] = useState(false)
    const [current, setCurrent] = useState(5)
    const { id } = useParams()
    const token = useSelector((state) => state.auth.authToken)
    const dispatch = useDispatch()
    console.log(allQuestions[0])

    const SortedData = allQuestions.sort((a, b) => a.difficulty - b.difficulty)
    console.log(SortedData)

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



    return (
        <>
            {start ?
                <Quiz question={SortedData[current]} setCurrent={setCurrent} />
                :
                <Start setStart={setStart} />
            }
        </>
    )
}

export default QuizPage
