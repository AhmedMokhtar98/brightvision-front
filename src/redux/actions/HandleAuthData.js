import { SETAUTHDATA, RESETAUTHDATA, SETAUTHROUTE } from './types';


export const setAuthData = async(value,dispatch)=>{
    return dispatch({type:SETAUTHDATA, value: value})
}


export const setAuthRoute= async(value,dispatch)=>{
    return dispatch({type:SETAUTHROUTE, value: value})
}


export const resetAuthData = ()=>{ return {type:RESETAUTHDATA} }


