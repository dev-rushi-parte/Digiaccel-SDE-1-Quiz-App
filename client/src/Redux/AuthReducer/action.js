import axios from "axios";
import * as types from './actionTypes'


export const singupRequest = () => {
    return {

        type: types.SINGUP_REQUEST
    }
}

export const singupSuccess = (payload) => {

    return {
        type: types.SINGUP_SUCCESS,
        payload
    }
}

export const singupFailure = (payload) => {
    return {

        type: types.SINGUP_FAILURE,
        payload
    }
}


export const SingupUser = (payload) => (dispatch) => {
    dispatch(singupRequest());


    return axios.post("/user/singup", payload)
        .then((res) => {

            return dispatch(singupSuccess(res))

        })
        .catch((err) => {

            return singupFailure(err)

        })
}


export const loginRequest = () => ({
    type: types.LOGIN_REQUEST
});

export const loginSuccess = (payload) => ({
    type: types.LOGIN_SUCCESS,
    payload
});

export const loginFailure = (payload) => ({
    type: types.LOGIN_FAILURE,
    payload
})


export const UserLogin = (payload) => (dispatch) => {

    dispatch(loginRequest());

    return axios.post("/user/login", payload)
        .then((res) => {
            // console.log(res.data, "login")
            return dispatch(loginSuccess(res));

        })
        .catch((err) => {
            return dispatch(loginFailure(err));

        })
}


