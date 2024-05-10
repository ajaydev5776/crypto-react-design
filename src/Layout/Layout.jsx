import React from 'react'
import { useLocation } from 'react-router-dom';
import Headers from './../component/Header/Header'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';
  const isFreezePage = location.pathname === '/freeze-account';
  const isFreezePlan = location.pathname === '/active-account';
  return (
    <>
    {!isLoginPage && !isFreezePage && !isFreezePlan && <Headers />}
    <Outlet/>
    </>
  )
}

export default Layout