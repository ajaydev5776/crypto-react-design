import React from 'react'
import Logo from '../../assets/img/logo.svg'
import { Link } from 'react-router-dom'

const AdminLoginPage = () => {
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
                      <img src={Logo} alt="logo"/> 
                    </a>
                  </div>
                  <div className="card mb-3">
                    <div className="card-body p-md-5 p-4">
                      <div className="pb-2">
                        <div className="card-title text-center pb-0">Login to Your Account</div>
                        <div className="text-center small pb-3 content">Enter your email & password to login</div>
                      </div>
                      <form className="row g-3 needs-validation" novalidate>
                        <div className="col-12">
                            <label className="form-label" for="signinSrEmail">Your email</label>
                            <div className="input-group">
                                <input type="email" className="form-control" name="email" id="signinSrEmail" tabindex="1" placeholder="email@address.com" aria-label="email@address.com" required=""/>
                            </div>
                        </div>
                        <div className="col-12 password-container">
                            <label for="yourPassword" className="form-label d-flex justify-content-between">
                                <span>Password</span>
                            </label>
                            <div className="input-group">
                                <input type="password" name="password" className="form-control" placeholder="8+ characters required" id="yourPassword" required/>
                            </div>
                        </div>
                        <div className="col-12">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe" />
                            <label className="form-check-label" for="rememberMe">Remember me</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <Link to="/index" className="btn btn-theme2 w-100" type="submit">Login</Link>
                        </div>
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
  )
}

export default AdminLoginPage