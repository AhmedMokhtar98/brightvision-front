import React,{useEffect} from 'react'
import axios  from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode' 
import { setAuthData, setAuthRoute } from './../redux/actions/HandleAuthData';
import NavBar from './navbar/NavBar';


export default function Layout({children}) {
const navigate = useNavigate()
const dispatch = useDispatch()
const {auth} = useSelector(state=>state.auth_reducer)

const AuthProvider = async()=>{
    if(localStorage.getItem('token')){
        let res = await axios.get(`https://nodejsclusters-150562-0.cloudclusters.net/api/isUserAuth`, {headers:{ "authorization":`Bearer ${localStorage.getItem('token').slice(1, -1)}`} });
        const authStatus = res.data.auth
        if(authStatus){
            const token = jwt(localStorage.getItem('token'));
            const userData = {username:token.username, role:token.role}
            setAuthData(userData,dispatch)
            setAuthRoute(true,dispatch)
        }
        else{ localStorage.removeItem('token'); navigate('/login'); setAuthRoute(false,dispatch) }
    }
    else{ navigate('/login') }
}
useEffect(() => { AuthProvider() }, [])

  return (
    <div>
        {auth && <NavBar/>}
        <div>{children}</div>
    </div>
  )
}
