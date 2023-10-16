import { combineReducers } from "redux";
import LoginReducer from './LoginReducer';
import AuthReducer from './AuthReducer';


export default  combineReducers({
    LoginReducer: LoginReducer,
    auth_reducer: AuthReducer,
})