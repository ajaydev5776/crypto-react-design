import React, { useState,useContext, useEffect } from 'react'
import Logo from '../../assets/img/logo.svg'
// import { Link, Navigate } from 'react-router-dom'
import { AuthContext } from '../../context/Auth.context.js';
import { useSetState } from 'react-use';
import { useNavigate } from "react-router-dom";


const initialState = {
  userName: '',
  password: '',
  remember:false
}
const AdminLoginPage = () => {
  const { state: ContextState, login } = useContext(AuthContext);
console.log('hii in admin login')
  const {
    isLoginPending,
    isLoggedIn,
    loginError
  } = ContextState;
  const [state, setState] = useSetState(initialState);

  const onSubmit = (e) => {
    e.preventDefault();
    const { userName, password,remember } = state;
    if(userName.length < 5){
      alert("userName Should be greater then 5")
      return
    }
    login(userName, password,remember);
    setState({
      userName: '',
      password: ''
    });
  }
  const navigate = useNavigate()
  useEffect(()=>{
    if (isLoggedIn){
      // Navigate({"to":"/index"})
      navigate("/index");
      console.log("navigate to othe r location")
    }

  },[isLoggedIn])


  return (
    <>
      <main>
        <div className="container">
          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-5 col-lg-7 col-md-10 d-flex flex-column align-items-center justify-content-center">
                  <div className="d-flex justify-content-center py-4">
                    <a href="javascript:;" className="logo w-auto">
                      <img src={Logo} alt="logo" />
                    </a>
                  </div>
                  <div className="card mb-3">
                    <div className="card-body p-md-5 p-4">
                      <div className="pb-2">
                        <div className="card-title text-center pb-0">
                          Login to Your Account
                        </div>
                        <div className="text-center small pb-3 content">
                          Enter your Username & password to login
                        </div>
                      </div>
                      <form className="row g-3 needs-validation" novalidate onSubmit={onSubmit}>
                        <div className="col-12">
                          <label className="form-label" for="signinSrEmail">
                            Your UserName
                          </label>
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              name="userName"
                              id="signinSrEmail"
                              onChange={e => setState({userName: e.target.value})} 
                              tabindex="1"
                              value={state.email}
                              placeholder="ajay"
                              aria-label="email@address.com"
                              minLength="2"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-12 password-container">
                          <label
                            for="yourPassword"
                            className="form-label d-flex justify-content-between"
                          >
                            <span>Password</span>
                          </label>
                          <div className="input-group">
                            <input
                              type="password"
                              name="password"
                              className="form-control"
                              value={state.password}
                              onChange={e => setState({password: e.target.value})}
                              placeholder="8+ characters required"
                              id="yourPassword"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="remember"
                              value={state.remember}
                              id="rememberMe"
                              onChange={e =>setState({remember: !state.remember}) } 
                            />
                            <label
                              className="form-check-label"
                              for="rememberMe"
                            >
                              Remember me
                            </label>
                          </div>
                        </div>
                        <div className="col-12">
                          <input
                            className="btn btn-theme2 w-100"
                            type="submit"
                            value="Login"
                          />
                        </div>

                        {isLoginPending && <div>Please wait...</div>}
                        {isLoggedIn && <div style={{"color":"green"}}>Success.</div>}
                        {loginError && <div style={{"color":"red"}}>{loginError.message}</div>}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default AdminLoginPage