import React,{useContext} from 'react'

import Headers from './../component/Header/Header'
import { useNavigate , Outlet,useLocation  } from 'react-router-dom'
import { AuthContext } from '../context/Auth.context.js';
import LoginForm from '../pages/Login/index.jsx';
import Block from '../pages/Block/index.jsx';
import FreezeAccount from '../pages/FreezeAccount/FreezeAccount';
import FreezePlan from '../pages/FreezePlan/FreezePlan';
const Layout = () => {
  const { state } = useContext(AuthContext);
  const location = useLocation();
  var loginStaus = JSON.parse(localStorage.getItem('isLoggedIn'))
  // console.log("LoginStatus", loginStaus)
  // // console.log("state", state)
  // console.log("Logcation",location.pathname)
  if ((!state.isLoggedIn && location.pathname !== "/login")){
    // console.log("innn")
    if (loginStaus && loginStaus.isLoggedIn && loginStaus.accountStatus === "freeze"){
      if (location.pathname === "/active-account"){
        return(
          <>
      <Headers/>
      <FreezePlan />
      {/* <Block /> */}
      </>
        )
      }
      return(
        <>
        <Headers/>
        <FreezeAccount />
        {/* <Outlet/> */}
        {/* <Block /> */}
        </>
      )
    }else if(loginStaus && loginStaus.isLoggedIn && loginStaus.accountStatus !== "freeze"){
      return(
        <>
        <Headers/>
        <Outlet/>
        {/* <Block /> */}
        </>
      )
    }else{
      // console.log("jiiijiji")
      // return (<Login></Login>)
      return (<>
        <LoginForm />
        {/* <Block /> */}
        </>)
    }
  
  } else if(!state.isLoggedIn && location.pathname == "/login"){
      return(
        <>
        </>
      )
  }
  else{
    if (loginStaus && loginStaus.accountStatus === "freeze"){
      if (location.pathname === "/active-account"){
        return(
          <>
      <Headers/>
      <FreezePlan />
      {/* <Block /> */}
      </>
        )
      }else{

        return (
          <>
          <Headers/>
          <FreezeAccount />
          {/* <Block /> */}
          </>
        )
      }
    }
    // console.log('called innnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn')
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