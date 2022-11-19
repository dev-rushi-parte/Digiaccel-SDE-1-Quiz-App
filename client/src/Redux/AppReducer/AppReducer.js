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
                isError: true,
                payload
            }
        }
        case types.GET_QUIZ_LINK: {
            console.log(payload)
            return {
                ...state,
                isLoading: false,
                isError: true,
                payload
            }
        }
        default:
            return state


    }
}