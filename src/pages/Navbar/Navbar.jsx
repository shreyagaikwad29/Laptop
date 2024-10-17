import React, { useState } from 'react'
import { FaLaptopCode } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import "./Navbar.css";



const Navbar = () => {
    const[menu, setMenu] = useState('Home');
    
  return (
    <div className="navbar">
        <FaLaptopCode className='logo'/>
        <ul className="navbar-menu">
            <li className={menu==="/Home"?"active":""}>Home</li>
            <li className={menu==="/About"?"active":""}>About Us</li>
            <li className={menu==="/Product"?"active":""}>Products</li>
            <li className={menu==="Contact"?"active":""}>Contact Us</li>
        </ul>

        <div className="navbar-right">
            <div className="navbar-search-icon">
                <FaBasketShopping />
                <div className="dot"></div>
            </div>
            <button>Sign In</button>
        </div>

    </div>
  )
}

export default Navbar
