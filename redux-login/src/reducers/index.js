import { combineReducers } from "redux";
import loginReducer from "./login-reducer";

const mainReducers = combineReducers({
    loginData : loginReducer
});

export default mainReducers;