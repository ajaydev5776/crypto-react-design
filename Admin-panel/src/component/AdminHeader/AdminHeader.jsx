import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import profileImg from '../../assets/img/profile-img.jpg'
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.svg'

const AdminHeader = ({ onToggle }) => {
    return (
        <>
            <div className="col-12 header d-flex align-items-center bg-white">
                <div className=" logopart d-lg-none d-block">
                    <Link to="/index"  className="logo mx-3"><img src={Logo} alt="log" /></Link>
                </div>
                <button onClick={onToggle} className="switch-icn btn btn-theme2 border-0" id="switch"><i className="fas fa-bars"></i></button>
                <nav className="header-nav ms-auto">    
                    <ul className="d-flex align-items-center">
                        <Dropdown>
                            <Dropdown.Toggle variant="white" id="dropdown-basic" className="nav-link border-0 nav-profile position-relative text-dark d-inline-flex align-items-center pe-0">
                                <img src={profileImg} alt="Profile" className="rounded-circle" />
                                <span className="d-none d-md-block ps-2">K. Anderson</span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile  overflow-hidden bg-white border-0">
                                <Dropdown.Item href='/' className="dropdown-item position-relative text-dark d-inline-flex align-items-center">
                                    <span className="profile-icn d-flex align-items-center justify-content-center"><i className="fas fa-sign-out-alt"></i></span>
                                    <span>Sign Out</span>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default AdminHeader