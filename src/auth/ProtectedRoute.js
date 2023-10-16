import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';

const Auth = ({ allowedRoles }) => {
const {auth} = useSelector(state=>state.auth_reducer)
const {AuthData} = useSelector(state=>state.auth_reducer)
const location = useLocation();

  return allowedRoles.find((role) => AuthData.role.includes(role)) ? (<Outlet />) :
    auth ? 
    ( <Navigate to="/" state={{ from: location }} replace /> ) : ( <Navigate to="/login" state={{ from: location }} replace /> )
};

export default Auth;