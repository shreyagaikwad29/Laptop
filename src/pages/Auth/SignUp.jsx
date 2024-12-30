// import React, { useState } from 'react'
// import { FaUser, FaLock } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { IoCall } from "react-icons/io5";
// import "./Auth.css";
// import { useNavigate, Link } from 'react-router-dom';


// const Auth = () => {
//   const [action , setAction] = useState("Login");
//   const navigate = useNavigate();

//   const handleLogin = ()=>{
//     setAction("Login");
//     navigate('/');
//   }
//   return (
//     <>
//       <div className="container">
//         <div className="header">
//           <div className="text">{action}</div>
//           <div className="underline"></div>
//         </div>
//         <div className="inputs">
//           {action==="Login"?<div></div>:
//           <>
//           <div className="input">
//             <span>
//                 <FaUser/>
//             </span>
//             <input type="text" placeholder='Name' required />
//           </div>
//           <div className="input">
//             <span>
//               <IoCall />
//             </span>
//             <input type="tel" placeholder='Contact Number' pattern="\d{10}" name="mobile" required/>
//           </div>
//           </>}
          
//           <div className="input">
//             <span>
//               <MdEmail />
//             </span>
//             <input type="email" placeholder='Email ID' required />
//           </div>
//           <div className="input">
//             <span>
//               <FaLock />
//             </span>
//             <input type="password" placeholder='Password' required />
//           </div>
//         </div>
//         {action==="Sign Up"?<div></div>:<div className="forget-password">forget passowrd? <span>click here</span></div>}
//         <div className="submit-container">
//           <Link className={action==="Login"?"submit gray":"button"} onClick={()=>{setAction("Sign Up")}}>Sign Up</Link>
//           <Link className={action==="Sign Up"?"submit gray":"button"} onClick={handleLogin}>Login</Link>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Auth


import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './SignUp.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';// Import useHistory for navigation
import Signupimg from "../../assets/signup.png";
import { useAuth } from '../../store/auth';
import { toast } from 'react-toastify';
const URL = "http://localhost:3010/api/auth/Signup";

const SignUp = () => {
    const navigate = useNavigate(); // Initialize useHistory
    const { storetokenInLS }= useAuth();

    const [user, setUser] = useState({
        name: "",
        email: "",
        mobile: "",
        password: ""
    });

    const handleInput = (e) =>{
        e.preventDefault();
        console.log(e);
        const name = e.target.name;
        const value = e.target.value;

        setUser({
            ...user,
            [name] : value,
        })
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(user);
        try {
            const response = await fetch(URL, {
                method:"POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
                credentials: 'include'
            });
            
            console.log("SignUp form", response);

            if (response.ok) {
                toast.success("Sign up successful");
                const res_data = await response.json();
                console.log("res from server", res_data);
                storetokenInLS(res_data.token);
                // localStorage.setItem("token", res_data);
                setUser({ 
                    name: "",
                    email:"",
                    mobile:"",
                    password:"" });  
                navigate("/Login"); 
            }else{
                toast.error("invalid credential");
                console.log("invalid credential")
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        // <div className="signup-container">
        //     <img src={Signupimg} />
        //     <h2>Sign Up</h2>
        //     <form onSubmit={handleSubmit}>
        //         <div>
        //             <label htmlFor="name">Name</label>
        //             <input
        //                 className="signup-input"
        //                 id="name"
        //                 name="name"
        //                 type="text"
        //                 onChange={formik.handleChange}
        //                 value={formik.values.name}
        //             />
        //             {formik.touched.name && formik.errors.name ? (
        //                 <div className="error">{formik.errors.name}</div>
        //             ) : null}
        //         </div>

        //         <div>
        //             <label htmlFor="email">Email</label>
        //             <input
        //                 className="signup-input"
        //                 id="email"
        //                 name="email"
        //                 type="email"
        //                 onChange={formik.handleChange}
        //                 value={formik.values.email}
        //             />
        //             {formik.touched.email && formik.errors.email ? (
        //                 <div className="error">{formik.errors.email}</div>
        //             ) : null}
        //         </div>

        //         <div>
        //             <label htmlFor="mobile">Mobile Number</label>
        //             <input
        //                 className="signup-input"
        //                 id="mobile"
        //                 name="mobile"
        //                 type="number"
        //                 onChange={formik.handleChange}
        //                 value={formik.values.mobile}
        //             />
        //             {formik.touched.mobile && formik.errors.mobile ? (
        //                 <div className="error">{formik.errors.mobile}</div>
        //             ) : null}
        //         </div>

        //         <div>
        //             <label htmlFor="password">Password</label>
        //             <input
        //                 className="signup-input"
        //                 id="password"
        //                 name="password"
        //                 type="password"
        //                 onChange={formik.handleChange}
        //                 value={formik.values.password}
        //             />
        //             {formik.touched.password && formik.errors.password ? (
        //                 <div className="error">{formik.errors.password}</div>
        //             ) : null}
        //         </div>

        //         <button type="submit" className="signup-button">Sign Up</button>
        //     </form>
        //     {popupMessage && (
        //         <div className="popup-message">
        //             {popupMessage}
        //         </div>
        //     )}
            
        // </div>
        <>
        <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        <div className="registration-image">
                        <lottie-player
                        src="https://lottie.host/dbad61e5-9996-45cd-8145-85b6b239009d/ywZJ8SWsOM.json"  // Lottie animation JSON file
                        background="##FFFFFF"  // Background color
                        speed="1"  // Speed of the animation
                        style={{ width: '500px', height: '500px' }}  // Style for the animation
                        loop  // Animation will loop
                          // Controls like play, pause, etc.
                        autoplay  // Start animation immediately
                        direction="1"  // Animation direction
                        mode="normal"  // Mode of animation (normal or reversed)
                    ></lottie-player>
                        </div>

                        

                        <div className="registration-form">
                            <h1 className="main-heading mb-3">Sign Up</h1>
                                <br />

                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="name">Name</label>
                                        <br />
                                        <input 
                                        type="text" 
                                        name='name'
                                        placeholder='name'
                                        id='name'
                                        required
                                        autoComplete='off'
                                        value={user.name}
                                        onChange={handleInput} />
                                    </div>

                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <br />
                                        <input 
                                        type="email" 
                                        name='email'
                                        placeholder='email'
                                        id='email'
                                        required
                                        autoComplete='off'
                                        value={user.email}
                                        onChange={handleInput} />
                                    </div>

                                    <div>
                                        <label htmlFor="mobile">Mobile</label>
                                        <br />
                                        <input 
                                        type="number" 
                                        name='mobile'
                                        placeholder='mobile'
                                        id='mobile'
                                        required
                                        autoComplete='off'
                                        value={user.mobile}
                                        onChange={handleInput} />
                                    </div>

                                    <div>
                                        <label htmlFor="password">Password</label>
                                        <br />
                                        <input 
                                        type="password" 
                                        name='password'
                                        placeholder='password'
                                        id='password'
                                        required
                                        autoComplete='off'
                                        value={user.password}
                                        onChange={handleInput} />
                                    </div>
                                    
                                    <br />

                                    <button type='submit' className='btn btn-submit'>Signup Now</button>

                                </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
        </>
    );
};

export default SignUp;
