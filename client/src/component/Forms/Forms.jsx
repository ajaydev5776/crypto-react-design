import React from 'react'
import { Link } from 'react-router-dom'

function Forms({handleChange, username, inputplasholder,inputtype, getOtpBtn, isActive = true}) {
    return (
        <>
        <div class="row row-gap-4">
            <div class="col-12">
                <label for="number" class="form-label fs-16">Enter your mobile number</label>
                <input type="text" class="form-control shadow-none  p-3 fs-16" id="number" placeholder="Enter ragister mobile number"/>
            </div>
            <div class="col-12">
                <label for="password" class="form-label fs-16">Enter your password</label>
                <input type="password" class="form-control shadow-none  p-3 fs-16" id="password" placeholder="Enter your password"/>
            </div>
            <div class="col-12 text-center">
                <Link type="button" to="/index" class="btn btn-theme1 w-100 p-3 fs-16 d-flex align-items-center justify-content-center">Login</Link>
            </div>
        </div>
        </>
    )
}

export default Forms