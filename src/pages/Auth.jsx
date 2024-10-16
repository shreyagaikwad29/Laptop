import React, { useState } from 'react'
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import "./Auth.css";
import { useNavigate } from 'react-router-dom';


const Auth = () => {
  const [action , setAction] = useState("Login");
  const navigate = useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault();
    if ("Login") {
      navigate.push('/Home');
    }
  }
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action==="Login"?<div></div>:
          <>
          <div className="input">
            <span>
                <FaUser/>
            </span>
            <input type="text" placeholder='Name' required />
          </div>
          <div className="input">
            <span>
              <IoCall />
            </span>
            <input type="tel" placeholder='Contact Number' pattern="\d{10}" name="mobile" required/>
          </div>
          </>}
          
          <div className="input">
            <span>
              <MdEmail />
            </span>
            <input type="email" placeholder='Email ID' required />
          </div>
          <div className="input">
            <span>
              <FaLock />
            </span>
            <input type="password" placeholder='Password' required />
          </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forget-password">forget passowrd? <span>click here</span></div>}
        <div className="submit-container">
          <div className={action==="Login"?"submit gray":"button"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
          <div className={action==="Sign Up"?"submit gray":"button"} onClick={()=>{setAction("Login")}} onSubmit={handleSubmit}>Login</div>
        </div>
      </div>
    </>
  )
}

export default Auth
