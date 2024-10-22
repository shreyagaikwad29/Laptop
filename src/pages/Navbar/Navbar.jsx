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
            <li onClick={()=>{setMenu("About")}} className={menu==="About"?"active":""}><a href='About'>About Us</a></li>
            <li onClick={()=>{setMenu("Product")}}className={menu==="Product"?"active":""}><a href='Product'>Product</a></li>
            <li onClick={()=>{setMenu("Contact")}} className={menu==="Contact"?"active":""}><a href='Contact'>Contact Us</a></li>
        </ul>

        <div className="navbar-right">
            {/* <div className="navbar-search-icon">
                <FaBasketShopping />
                <div className="dot"></div>
            </div> */}
            <p>
                <a href="/Login">Login</a> | <a href="/SignUp">Sign Up</a> | <a href="/UserInfo">User Info</a>
            </p>
        </div>

    </div>
  )
}

export default Navbar
