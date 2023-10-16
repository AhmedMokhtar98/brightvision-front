import React from 'react'
import style from "./style/auth.module.css";
import  axios  from 'axios';
import { useNavigate } from 'react-router-dom';
import { setAuthData } from './../redux/actions/HandleAuthData';
import { resetAuthData } from './../redux/actions/HandleAuthData';
import { useDispatch } from 'react-redux';

export default function Logout() {
const dispatch = useDispatch()
const navigate = useNavigate()
const LogOut = async()=>{
   let res = await axios.delete(`https://nodejsclusters-150562-0.cloudclusters.net/api/logout`)
   localStorage.removeItem('token') 
   dispatch(resetAuthData())
}
  return (
    <button onClick={LogOut} className={style.LogOut_btn}>Logout</button>
  )
}
