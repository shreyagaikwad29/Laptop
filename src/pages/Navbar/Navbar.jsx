import React, { useState } from 'react';
import { FaLaptopCode } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import "./Navbar.css";
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";

const Navbar = () => {
    const [menu, setMenu] = useState('');

    return (
        <div className="navbar">
            <img src={logo} className='logo' alt="Logo" />
            <div className="navbar-menu">
                <li onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}><Link to="/">Home</Link></li>
                <li onClick={() => setMenu("About")} className={menu === "About" ? "active" : ""}><Link to="/About">About Us</Link></li>
                <li onClick={() => setMenu("Features")} className={menu === "Features" ? "active" : ""}><Link to="/Features">Features</Link></li>
                <li onClick={() => setMenu("Contact")} className={menu === "Contact" ? "active" : ""}><Link to="/Contact">Contact Us</Link></li>
            </div>
            <div className="navbar-right">
                <p>
                    <Link to="/Login">Login</Link> | <Link to="/SignUp">Sign Up</Link> | <Link to="/UserInfo">User Info</Link>
                </p>
            </div>
        </div>
    )
}

export default Navbar;
