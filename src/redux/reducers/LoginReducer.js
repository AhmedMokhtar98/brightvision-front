import { SETUSERDATA } from './../actions/types';

const LoginReducer = (state={UserData:{UserName:'',Password:''}}, action)=>{
   switch (action.type) {
    case SETUSERDATA:
        return {...state ,UserData:action.value}
    default:
        break;
   }
   return state
}
export default LoginReducer ;