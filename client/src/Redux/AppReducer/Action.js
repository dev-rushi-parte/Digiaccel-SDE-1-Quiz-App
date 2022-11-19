import axios from "axios";
import * as types from './ActionTypes';


export const addquestion = (payload) => {
    return {
        type: types.ADD_QUESTION,
        payload
    }
}

export const CreateQuestions = (payload) => async (dispatch) => {

    return await axios.post("/que/create_question", payload, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${payload.token}`
        }
    })
        .then((res) => {
            return (dispatch(addquestion(res.data)))
            // console.log(res)

        })
        .catch((err) => {
            console.log(err)
        })
}


export const getquizlink = (payload) => ({
    type: types.GET_QUIZ_LINK,
    payload
})

export const GetQuizLink = (payload) => async (dispatch) => {

    return await axios.post(`/que/${payload.id}`, payload, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${payload.token}`
        }
    })
        .then((res) => {
            return (dispatch(getquizlink(res)))
            // console.log(res)

        })
        .catch((err) => {
            console.log(err)
        })
}

export const getquestion = (payload) => ({
    type: types.GET_QUESTIONS,
    payload
})

export const GetQuestions = (payload) => async (dispatch) => {

    return axios.get(`/que/${payload.uuid}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${payload.token}`
        }
    })
        .then((res) => {
            return (dispatch(getquestion(res.data)))
            // console.log(res)

        })
        .catch((err) => {
            console.log(err)
        })
}