import React from 'react'
import { NavLink } from 'react-router-dom';
import Logout from './../../auth/Logout';
import style from "./nav.module.css";
import RefreshToken from './../../auth/RefreshToken';
import { useSelector } from 'react-redux';
export default function NavBar() {
  const {AuthData} = useSelector(state=>state.auth_reducer)
  //Since activeClassName In React Router v6 no longer be working  ( I used a custom style ) . 
const styleLink = ({ isActive }) => (isActive ? style.link_active : style.link);
  return (
    <div className={style.NavBar}>
        <div className={style.NavLogo}>Bright Vision</div>
        <NavLink className={styleLink} to="/"> Admin </NavLink>
        <NavLink className={styleLink} to="/content_1"> content 1 </NavLink>
        {AuthData.role ==='admin' && <NavLink className={styleLink} to="/content_2"> content 2 </NavLink>}
        <Logout/>
        <RefreshToken/>
    </div>
  )
}
