import React,{useState,useEffect} from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setUserData } from './../redux/actions/HandleUserData';
import { useSelector, useDispatch } from 'react-redux';
import { setAuthData, setAuthRoute } from './../redux/actions/HandleAuthData';
import style from "./style/auth.module.css";

export default function Login() {
const dispatch = useDispatch()
const navigate = useNavigate()
const{UserData} = useSelector(state=>state.LoginReducer)
const {auth} = useSelector(state=>state.auth_reducer)
const[responseMsg,setResponseMsg]=useState('')

const HandleChange =(e)=>{
    var  obj = {...UserData}
    obj[e.target.name] = e.target.value
    setUserData(obj, dispatch)
}
const Submit = async(e)=>{
    e.preventDefault()
    let res = await axios.post(`https://nodejsclusters-150562-0.cloudclusters.net/api/auth`,UserData,{withCredentials: true})
    const responseStatus = await res.data.status
    setResponseMsg(responseStatus)
    if(responseStatus===true) { 
      const data = res.data.userData
      localStorage.setItem("token", JSON.stringify(res.data.accessToken)); 
      localStorage.setItem("refreshToken", JSON.stringify(res.data.refreshToken)); 
      {/* Notice (Ahmed Mokhtar) : Setting Token to localStorage , not a risk cause i secured it by the server side .
      which means that Token is Encrypted using HTTP only attackers won't be able to change it or edit it ,
      if any changes happens it will logout automatically by server side handling*/}
      setAuthData({username:data.username, role:data.role}, dispatch)
      setAuthRoute(true,dispatch)
      navigate('/') 
    }
}
useEffect(() => { if(auth){navigate('/') } }, [])
  return (
    <>
    <form onSubmit={Submit} className={style.Login_Form}>
        <h1 className={style.h1}>Bright Vision</h1>
        <h5 className={style.h5}>Login</h5>
        <div className={style.resMsg}>{responseMsg}</div>
        
        <label className={style.Form_Label}>Username</label>
        <input className={style.Form_Input} type="text" name="UserName" value={UserData.UserName} onChange={(e)=>{HandleChange(e)}}/>
        
        <label className={style.Form_Label}>Password</label>
        <input className={style.Form_Input} type="password" name="Password" value={UserData.Password} onChange={(e)=>{HandleChange(e)}}/>
        
        <button className={style.Form_BTN} type="submit" >Login</button>
    </form>
    </>
  )
}
