import { SETAUTHDATA, RESETAUTHDATA, SETAUTHROUTE } from './../actions/types';
import jwt from 'jwt-decode' 
const token_auth = localStorage.getItem('token') ? jwt(localStorage.getItem('token')).auth : false;

const AuthReducer = (state={AuthData:{username:'', role:''}, auth:token_auth }, action)=>{
   switch (action.type) {
    case SETAUTHROUTE:
        return {...state ,auth:action.value}

    case SETAUTHDATA:
        return {...state ,AuthData:action.value}

    case RESETAUTHDATA:
        return {...state ,AuthData:{username:'', role:''},auth:false}
   
    default:
        break;
   }
   return state
}
export default AuthReducer ;