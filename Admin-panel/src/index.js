import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './assets/css/bootstrap.min.css';
import './assets/css/custom.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout/Layout';
import AdminHomePage from './pages/AdminHomePage/AdminHomePage'
import AdminLoginPage from './pages/AdminLoginPage/AdminLoginPage'
import AdminNewUserPage from './pages/AdminNewUserPage/AdminNewUserPage'
import AdminUserHistoryPage from './pages/AdminUserHistoryPage/AdminUserHistoryPage'
import AdminUserWalletPage from './pages/AdminUserWalletPage/AdminUserWalletPage'
import MainLayout from './component/MainLayout/MainLayout';
import { ContextProvider } from './Auth.context.js';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<AdminLoginPage/>}/>
      <Route path='/index' element={<AdminHomePage/>}/>
      <Route path='/new-user' element={<AdminNewUserPage/>}/>
      <Route path='/user-wallet' element={<AdminUserWalletPage/>}/>
      <Route path='/user-history' element={<AdminUserHistoryPage/>}/>
      <Route path='/main' element={<MainLayout/>}/>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider value={500}>
    <RouterProvider router={router}/>
    </ContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
