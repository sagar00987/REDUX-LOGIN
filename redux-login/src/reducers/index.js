import { combineReducers } from "redux";
import loginReducer from "./login-reducer";
import userDetailsReducer from "./user-details-reducer"

const mainReducers = combineReducers({
    loginData : loginReducer,
    userData : userDetailsReducer
});

export default mainReducers;