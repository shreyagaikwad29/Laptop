import React, { useState } from 'react'
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import "./Auth.css";
import { useNavigate, Link } from 'react-router-dom';


const Auth = ({setShowLogin}) => {
  const [currState,setCurrState] = useState("Login");
  
  return (
   
      <div className="login-popup">
        <form className="login-popup-container">
          <div className="login-popup-title">
         <h2>{currState}</h2>
         <img onClick={()=>setShowLogin(false)} src={MdAssessment.cross_icon} alt=""/>
         </div>
               <div className="login-popup-inputs">
                {currState==="Login"?<></>:<input type="text" placeholder='Your name' required />}
          <input type="text" placeholder='Your name' required />
          <input type="email" placeholder='Your email' required />
          <input type="password" placeholder='Your password' required />
          </div>
          <button>{currState==="Sign Up"?"Create account":"Login"}</button>
          <div className ="login-popup-condition">
            <input type="checkbox" required/>
            <p>By counting, I agree to the terms of use & privacy policy.</p>
            </div>
            {currState==="Login"
            ?<p>Create a new Account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
            : <p>Already have an account?<span  onClick={()=>setCurrState("Login")}>Login here</span></p>
            }
            
           
                  
          </form>
        
        </div>
       
  )
}

export default Auth
