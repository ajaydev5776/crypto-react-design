import React,{useContext} from 'react'

import Headers from './../component/Header/Header'
import { useNavigate , Outlet,useLocation  } from 'react-router-dom'
import { AuthContext } from '../context/Auth.context.js';
import LoginForm from '../pages/Login/index.jsx';
const Layout = () => {
  const { state } = useContext(AuthContext);
  const location = useLocation();
  var loginStaus = JSON.parse(localStorage.getItem('isLoggedIn'))
  console.log("LoginStatus", loginStaus)
  console.log("Logcation",location.pathname)
  if ((!state.isLoggedIn && location.pathname !== "/login" )){
    console.log("innn")
    if (loginStaus && loginStaus.isLoggedIn){
      return(
        <>
        <Headers/>
        <Outlet/>
        </>
      )
    }
    console.log("jiiijiji")
    // return (<Login></Login>)
    return (<>
      <LoginForm />
      </>)
  } else if(!state.isLoggedIn && location.pathname == "/login"){
      return(
        <>
        </>
      )
  }
  else{
    return (
      <>
      <Headers/>
      <Outlet/>
      </>
    )
  }
 
}

export default Layout