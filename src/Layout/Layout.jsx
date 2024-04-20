import React from 'react'
import { useLocation } from 'react-router-dom';
import Headers from './../component/Header/Header'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';
  return (
    <>
    {!isLoginPage && <Headers />}
    <Outlet/>
    </>
  )
}

export default Layout