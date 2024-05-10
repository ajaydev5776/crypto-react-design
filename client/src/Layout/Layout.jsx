import React,{useContext} from 'react'

import Headers from './../component/Header/Header'
import { useNavigate , Outlet,useLocation  } from 'react-router-dom'
import { AuthContext } from '../context/Auth.context.js';
import LoginForm from '../pages/Login/index.jsx';
import Block from '../pages/Block/index.jsx';

// const isFreezePage = location.pathname === '/freeze-account';
// const isFreezePlan = location.pathname === '/active-account';

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
        {/* <Block /> */}
        </>
      )
    }
    console.log("jiiijiji")
    // return (<Login></Login>)
    return (<>
      <LoginForm />
      {/* <Block /> */}
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
      {/* <Block /> */}
      </>
    )
  }
 
}

export default Layout