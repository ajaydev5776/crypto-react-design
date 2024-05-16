import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chart from "react-apexcharts";
import './index.css';
// import 'bootstrap/dist/css/bootstrap.css';
import './custom.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './pages/Home/Index';
import Main from './pages/Main/index'
import Portfolio from './pages/Portfolio/Portfolio';
import Layout from './Layout/Layout'
import Refer from './pages/Refer/Refer';
import Wallet from './pages/Wallet/Wallet';
import OrderList from './pages/OrderList/OrderList';
import Plans from './pages/Plans/Plans';
import { ContextProvider } from './context/Auth.context.js';
import LoginForm from './pages/Login/index.jsx';
import FreezeAccount from './pages/FreezeAccount/FreezeAccount';
import FreezePlan from './pages/FreezePlan/FreezePlan';
const router = createBrowserRouter(
  createRoutesFromElements(
  
    <Route  path='/' element={<Layout/>} >
      {/* <Route path='/index' element={<Home/>}/> */}
      <Route path='' element={<Home/>}/>
      <Route path='/orderlist' element={<OrderList/>}/>
      <Route path='/wallet' element={<Wallet/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/refer' element={<Refer/>}/>
      <Route path='/plans' element={<Plans/>} />
      <Route path='/login' element={<LoginForm/>}/>
      <Route path='/freeze-account' element={<FreezeAccount/>}/>
      <Route path='/active-account' element={<FreezePlan/>}/>

    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <ContextProvider value={500}>
    {/* <App /> */}
    <RouterProvider router={router}/>
    </ContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
