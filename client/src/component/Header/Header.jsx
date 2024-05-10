import React ,{ useEffect, useState } from 'react'
import Logo from '../../assets/img/logo.svg'
import Contact from '../../assets/img/icon/contact.svg'
import { Link, NavLink,useNavigate,createSearchParams } from 'react-router-dom'
import Login from '../Modals/Login';
import Ragister from '../Modals/Ragister';
import Otp from '../Modals/Otp';
import { GetTelegramLink } from '../../BackendApiCalls/ApiCall';

    


const Header = () => {
    const navigate = useNavigate()
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSecondModal, setShowSecondModal] = useState(false);
    const [showOtpModal, setShowOtpModal] = useState(false);
    const [HelpUrl,setHelpUrl] =useState("")

    const handleLoginModalOpen = () => {
        var loginStaus = JSON.parse(localStorage.getItem('isLoggedIn'))
        localStorage.removeItem("isLoggedIn")
        navigate(
           "/"
        )
        // setShowLoginModal(true);
        // setShowSecondModal(false);
    };
    const handleSecondModalOpen = () => {
        setShowSecondModal(true);
        setShowLoginModal(false);
    };
    const handleOtpModalOpen = () => {
        setShowOtpModal(true);
        setShowLoginModal(false);
        setShowSecondModal(false);
    };

    const handleCloseLoginModal = () => {
        setShowLoginModal(false);
    };
    const handleCloseSecondModal = () => {
        setShowSecondModal(false);
    };
    const handleCloseOtpModal = () => {
        setShowOtpModal(false);
    };

    useEffect(()=>{
      GetTelegramLink("supportLink").then(link=>{
        setHelpUrl(link.link)
      })
    },[])

    return (
        <>
        <div className="col-12 px-0 sticky-top mb-2">
            <nav className="navbar header navbar-expand-lg px-3">
                <Link to="/" className="navbar-brand d-flex"><img src={Logo} className="object-contain h-100" alt="logo"/></Link>
                <button className="navbar-toggler shadow-none p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-dark bg-theme1" tabindex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbar2Label"><img src={Logo} className="object-contain h-100" alt="logo"/></h5>
                        <button type="button" className="btn-close btn-close-white shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav gap-3 align-items-lg-center me-auto mb-3 mb-lg-0">
                            {/* <li className="nav-item"><NavLink to="/plans" className="nav-link">Plans</NavLink></li> */}
                            <li className="nav-item"><NavLink to="/portfolio" className="nav-link">Portfolio</NavLink></li>
                            <li className="nav-item"><NavLink to="/orderlist" className="nav-link">Orders</NavLink></li>
                            <li className="nav-item"><NavLink to="/wallet" className="nav-link">Wallet & Fees</NavLink></li>
                            <li className="nav-item"><NavLink to="/plans" className="nav-link deposit text-uppercase fw-medium text-white d-inline-flex">Crypto Deposit Plans</NavLink></li>
                        </ul>
                        <ul className="navbar-nav gap-3 align-items-lg-center">
                            <li className="nav-item"><NavLink to="/refer" className="nav-link">Refer & Earn</NavLink></li>
                            <li className="nav-item"><NavLink to={HelpUrl} target='_blank' className="nav-link d-flex align-items-center gap-3">Help Center<span><img src={Contact} alt="contact" className="object-contain w-100" /></span></NavLink></li>
                            <li className="nav-item"><NavLink to="#" onClick={handleLoginModalOpen} className="text-uppercase fw-medium btn btn-theme2 themebtn text-white">LogOut</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        {/* Login Modal */}
        <Login show={showLoginModal} handleClose={handleCloseLoginModal} handleSecondModalOpen={handleSecondModalOpen} />
            
        {/* Second Modal */}
        <Ragister show={showSecondModal} handleClose={handleCloseSecondModal} handleLoginModalOpen={handleLoginModalOpen} />

        {/* Second Modal */}
        <Otp show={showOtpModal} handleClose={handleCloseOtpModal} handleOtpModalOpen={handleOtpModalOpen} />
        </>
    )
}

export default Header