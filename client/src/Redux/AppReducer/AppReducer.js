import * as types from './ActionTypes'

const inState = {

    isLoading: false,
    isError: false,


}

export const AppReducer = (state = inState, action) => {

    const { type, payload } = action;

    switch (type) {


        default:
            return state


    }
}