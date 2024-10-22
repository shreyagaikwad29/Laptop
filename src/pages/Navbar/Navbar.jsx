import React, { useState } from 'react'
import { FaLaptopCode } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import "./Navbar.css";
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";


const Navbar = () => {
    const[menu, setMenu] = useState('Home');
    
  return (
    <div className="navbar">
            <img src={logo} className='logo'/>
        <ul className="navbar-menu">
            <li onClick={()=>{setMenu("Home")}} className={menu==="Home"?"active":""}><a href='/'>Home</a></li>
            <li onClick={()=>{setMenu("About")}} className={menu==="About"?"active":""}>About Us</li>
            <li onClick={()=>{setMenu("Product")}}className={menu==="Product"?"active":""}>Products</li>
            <li onClick={()=>{setMenu("Contact")}} className={menu==="Contact"?"active":""}>Contact Us</li>
        </ul>

        <div className="navbar-right">
            <div className="navbar-search-icon">
                <FaBasketShopping />
                <div className="dot"></div>
            </div>
            <Link to="/Auth" className="button">Login / Sign Up</Link>
        </div>

    </div>
  )
}

export default Navbar
