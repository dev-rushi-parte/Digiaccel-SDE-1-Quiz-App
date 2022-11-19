import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { AppReducer } from "./AppReducer/AppReducer";
import { authReducer } from "./AuthReducer/authReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    appReducer: AppReducer

})



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const Store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)));