import React, {useContext} from 'react';
import { useLocation } from 'react-router-dom';
import AdminHeader from '../component/AdminHeader/AdminHeader';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../Auth.context.js'
import AdminLoginPage from '../pages/AdminLoginPage/AdminLoginPage.jsx';

const Layout = () => {
    const location = useLocation();
    const isLoginPage = location.pathname === '/';
    const { state } = useContext(AuthContext);
    var loginStaus = JSON.parse(localStorage.getItem('isLoggedIn'))
    console.log("LoginStatus", loginStaus)
    if (loginStaus && loginStaus.isLoggedIn){
        return (
            <>
            {/* {!state.isLoggedIn && !isLoginPage && <AdminLoginPage /> } */}
                {!isLoginPage && <AdminHeader />} {/* Render AdminHeader on all pages except the login page */}
                <Outlet />
            </>
        )
    }
    return (
        <>
        {!state.isLoggedIn && !isLoginPage && <AdminLoginPage /> }
            {!isLoginPage && <AdminHeader />} {/* Render AdminHeader on all pages except the login page */}
            <Outlet />
        </>
    );
}

export default Layout;
