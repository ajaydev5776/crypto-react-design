import React from 'react';
import { useLocation } from 'react-router-dom';
import AdminHeader from '../component/AdminHeader/AdminHeader';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    const location = useLocation();
    const isLoginPage = location.pathname === '/';

    return (
        <>
            {!isLoginPage && <AdminHeader />} {/* Render AdminHeader on all pages except the login page */}
            <Outlet />
        </>
    );
}

export default Layout;
