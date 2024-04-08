import React from 'react'

import Headers from './../component/Header/Header'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
    <Headers/>
    <Outlet/>
    </>
  )
}

export default Layout