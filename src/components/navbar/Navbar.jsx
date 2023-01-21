import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { FaSignOutAlt } from 'react-icons/fa';
import { BiMenuAltRight } from 'react-icons/bi';
import './Navbar.css';
import { useSelector } from "react-redux";

const Navbar = ({user}) => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate("/login");
        window.location.reload();
    }
    
    return (
        <div className="nav-container">
            <ToastContainer />
            <div className="nav-wrapper">
                <div className="nav-left">
                    <h1>Murex</h1>
                </div>

                <div className="nav-center">
                    <ul className="nav-links">
                        <li className="nav-link"><Link to="/">Home</Link></li>
                        <li className="nav-link"><Link to="/">About</Link></li>
                        <li className="nav-link"><Link to="/">Service</Link></li>
                        <li className="nav-link"><Link to="/">Team</Link></li>
                        <li className="nav-link"><Link to="/">EXplore</Link></li>
                        <li className="nav-link"><Link to="/">Contact</Link></li>
                    </ul>
                </div>

                <div className="nav-right">
                    {user && <div className="loggedin-user-name-container"><div className="nav-logged-in-user"><span className="nav-user"><Link to={`/user/${user.Id}/profile`}>{user.FullName}</Link></span>
                    <div className="loggedin-user-menue">
                        <span>Logut</span>
                        <span>Logut</span>
                        <span>Logut</span>
                        <span>Logut</span>
                    </div>
                        <span onClick={handleLogout} className="log-out-btn"><FaSignOutAlt/></span> 
                    </div></div>}

                    {!user && <><button className="login-btn"><Link to="/login">Login</Link></button>
                    <button className="register-btn"><Link to="/register">Register</Link></button></>}

                    <div className="navbar-menu-icon">
                        <BiMenuAltRight />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Navbar;