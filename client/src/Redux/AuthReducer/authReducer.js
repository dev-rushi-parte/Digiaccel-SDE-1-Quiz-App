import { getLocalData, SaveTheToken } from "../../Utils/localStorage";
import * as types from './actionTypes'

const inState = {

    isAuth: getLocalData("authToken") ? true : false,
    authToken: getLocalData("authToken") || false,
    isLoading: false,
    isError: false,
    LoginUser: getLocalData("userId") || []
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
        case types.GET_LOGIN_USER: {
            console.log(payload)
            SaveTheToken("userId", payload)
            return {
                ...state,
                LoginUser: payload
            }
        }
        default:
            return state


    }
}