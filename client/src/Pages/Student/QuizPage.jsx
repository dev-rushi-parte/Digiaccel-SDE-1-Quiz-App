import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { GetQuestions } from '../../Redux/AppReducer/Action'

function QuizPage() {
    const [allQuestions, setAllQestions] = useState([]);
    const { id } = useParams()
    const token = useSelector((state) => state.auth.authToken)
    const dispatch = useDispatch()
    console.log(allQuestions)

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
        <div>
            <h1>quiz</h1>
        </div>
    )
}

export default QuizPage
