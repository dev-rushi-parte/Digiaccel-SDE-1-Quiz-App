import * as types from './ActionTypes'

const inState = {

    isLoading: false,
    isError: false,


}

export const AppReducer = (state = inState, action) => {

    const { type, payload } = action;

    switch (type) {

        case types.ADD_QUESTION: {
            return {
                ...state,
                isLoading: false,
                isError: false,
                payload
            }
        }
        case types.GET_QUIZ_LINK: {
           
            return {
                ...state,
                isLoading: false,
                isError: false,
                payload
            }
        }
        case types.GET_QUESTIONS: {
           
            return {
                ...state,
                isLoading: false,
                isError: false,
                payload
            }
        }
        case types.POST_SCORE: {
            console.log(payload)
            return {
                ...state,
                isLoading: false,
                isError: false,
                payload
            }
        }

        case types.GET_SCORE_ATTEMPTS: {
            return {
                ...state,
                isLoading: false,
                isError: false,
                payload
            }
        }
        default:
            return state


    }
}