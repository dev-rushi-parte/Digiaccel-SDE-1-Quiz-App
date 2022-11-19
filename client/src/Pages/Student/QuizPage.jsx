import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Button from 'react-bootstrap/esm/Button'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { GetQuestions } from '../../Redux/AppReducer/Action'
import style from "./Quiz.module.css";


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
        <>
            <div style={{ marginTop: "8rem" }} className=' bg-dark col-md-5  container center_div text-center border border-dark rounded-3' >

                <img
                    className=' mt-5 col-md-10 col-sm-5 col-10'
                    src='https://digiaccel.in/desktopbrandlogos/learn_gethired.svg'
                    alt='Img' />


                <h1 className='text-white mt-5 mb-5' >Wel-Come To Quiz</h1>

                <Button className='col-lg-6 col-sm-5 col-5 mb-5' >Start</Button>
            </div>
        </>
    )
}

export default QuizPage
