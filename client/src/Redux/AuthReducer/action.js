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


export const adminRequest = () => ({
    type: types.ADMIN_REQUEST
});

export const adminSuccess = (payload) => ({
    type: types.ADMIN_SUCCESS,
    payload
});

export const adminFailure = (payload) => ({
    type: types.ADMIN_FAILURE,
    payload
})



export const AdminSingupAction = (payload) => (dispatch) => {
    dispatch(adminRequest());


    return axios.post("/user/admin", payload)
        .then((res) => {

            return dispatch(adminSuccess(res))

        })
        .catch((err) => {

            return adminFailure(err)

        })
}

// for login user

export const loginUser = (payload) => {
    return {
        type: types.GET_LOGIN_USER,
        payload
    }
}

export const LoginUserData = (token) => async (dispatch) => {

    return await axios.get("/que/loginuser", {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
        .then((res) => {
            return (dispatch(loginUser(res.data)))
            // console.log(res.data)

        })
        .catch((err) => {
            console.log(err)
        })
}