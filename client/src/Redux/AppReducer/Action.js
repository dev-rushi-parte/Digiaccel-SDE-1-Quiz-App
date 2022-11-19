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