import React from 'react'

function Forms({handleChange, username, inputplasholder,inputtype, getOtpBtn, isActive = true}) {
    return (
        <>
        <div class="row row-gap-4">
            <div class="col-12">
                <label for="number" class="form-label fs-16">{username}</label>
                <input type={inputtype} class="form-control shadow-none  p-3 fs-16" id="number" placeholder={inputplasholder}/>
            </div>
            <div class="col-12 text-center">
                <button type="button" class={`btn btn-theme1 w-100 p-3 fs-16 d-flex align-items-center justify-content-center ${isActive ? 'd-flex' : 'd-none'}`} onClick={handleChange}>{getOtpBtn}</button>
            </div>
        </div>
        </>
    )
}

export default Forms