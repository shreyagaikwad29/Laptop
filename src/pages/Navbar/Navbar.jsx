import React, { useState } from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";
import { useAuth } from '../../store/auth';


const Navbar = () => {
    const [menu, setMenu] = useState('');
    const {isLoggedIn} = useAuth();

    return (
        <div className="navbar">
            <img src={logo} className='logo' alt="Logo" />
            <div className="navbar-menu">
                <li onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}><Link to="/" className='link'>Home</Link></li>
                <li onClick={() => setMenu("About")} className={menu === "About" ? "active" : ""}><Link to="/About" className='link'>About Us</Link></li>
                <li onClick={() => setMenu("Features")} className={menu === "Features" ? "active" : ""}><Link to="/Features" className='link'>Features</Link></li>
                <li onClick={() => setMenu("Contact")} className={menu === "Contact" ? "active" : ""}><Link to="/Contact" className='link'>Contact Us</Link></li>
            </div>
            <div className="navbar-right">
                <p>
                    {isLoggedIn ? (
                        <Link to="/Logout" className="link">Logout</Link>
                    ) : (
                        <>
                        <Link to="/Login" className="link">Login</Link> | 
                        <Link to="/SignUp" className="link">Sign Up</Link>
                        </>
                    )}
                   
                </p>
            </div>
        </div>
    )
}

export default Navbar;
