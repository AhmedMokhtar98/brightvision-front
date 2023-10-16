import React from 'react'
import  axios from 'axios';

export default function RefreshToken() {
const Refresh = async()=>{
  const body={headers:localStorage.getItem('refreshToken').slice(1, -1) }
  let res = await axios.post(`https://nodejsclusters-150562-0.cloudclusters.net/api/token`, body);
  const newToken = await res.data.accessToken
  //console.log('newToken',newToken);
  alert('New Token Guccessfully Generated')
  localStorage.setItem("token", JSON.stringify(res.data.accessToken)); 
}
  return (
    <button onClick={Refresh}>RefreshToken</button>
  )
}
