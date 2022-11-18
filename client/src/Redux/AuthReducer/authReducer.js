import { getLocalData, SaveTheToken } from "../../Utils/localStorage";
import * as types from './actionTypes'

const inState = {

    isAuth: getLocalData("authToken") ? true : false,
    authToken: getLocalData("authToken") || false,
    isLoading: false,
    isError: false,

}

export const authReducer = (state = inState, action) => {

    const { type, payload } = action;

    switch (type) {

        case types.SINGUP_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case types.SINGUP_SUCCESS: {
            // console.log(payload, "Response in reducer")
            return {
                ...state,
                isLoading: false,

            }
        }

        case types.SINGUP_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        case types.ADMIN_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case types.ADMIN_SUCCESS: {
            console.log(payload, "Response in reducer")
            return {
                ...state,
                isLoading: false,

            }
        }

        case types.ADMIN_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        case types.LOGIN_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case types.LOGIN_SUCCESS: {
            // console.log(payload, "Response in reducer")
            SaveTheToken("authToken", payload.data.token)

            return {
                ...state,
                isLoading: false,
                payload,
                isAuth: true,
                authToken: payload.data.token,

            }
        }

        case types.LOGIN_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        default:
            return state


    }
}