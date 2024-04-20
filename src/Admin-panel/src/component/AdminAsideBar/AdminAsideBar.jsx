import React from 'react'
import Logo from '../../assets/img/logo.svg'
import { Link, NavLink } from 'react-router-dom'

const AdminAsideBar = ({ isActive }) => {
    return (
        <>
        <div className={`col-auto h-100 asidemenu ${isActive ? 'active' : ''}`}  id="asidebar">
            <aside className="asidebar bg-white h-100 row flex-nowrap flex-column">
                <div className="col-12 logopart">
                    <Link to="/index" className="logo mx-3"><img src={Logo} alt="log" /></Link>
                    <button className="switch-icn bg-white border-0 ms-auto d-lg-none d-block" id="switchcancle"><i className="fas fa-times"></i></button>
                </div>
                <div className="col-12 h-100 flex-fill overflow-y-auto overflow-x-hidden">
                    <div className="asideitem p-3">
                        <ul className="navlist list-unstyled m-0 p-0">
                            <li><NavLink to="/index" className="navitems"><i className="fas fa-home"></i> Dashboard</NavLink></li>
                            <li><NavLink to="/new-user" className="navitems"><i className="far fa-user"></i> Add New User</NavLink></li>
                            <li><NavLink to="/user-wallet" className="navitems"><i className="fas fa-wallet"></i> User Wallet</NavLink></li>
                            <li><NavLink to="/user-history" className="navitems"><i className="fas fa-shopping-bag"></i> User History</NavLink></li>
                        </ul>
                    </div>
                </div>
            </aside>
        </div>
        </>
    )
}

export default AdminAsideBar