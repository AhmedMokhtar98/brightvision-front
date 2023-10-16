import { SETUSERDATA} from './types';

export const setUserData = async(value,dispatch)=>{
    return dispatch({type:SETUSERDATA, value: value})
}



