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

const SignUp = () => {
    const navigate = useNavigate(); // Initialize useHistory
    const [popupMessage, setPopupMessage] = useState('');

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            mobile: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(50, 'Must be 50 characters or less')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            mobile: Yup.string()
                .matches(/^[0-9]{10}$/, 'Must be exactly 10 digits')
                .required('Required'),
            password: Yup.string()
                .min(6, 'Must be 6 characters or more')
                .required('Required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Required'),
        }),
        // onSubmit: async (values) => {
        //     try {
        //         const response = await axios.post('http://localhost:5000/users', values);
        //         localStorage.setItem('user', JSON.stringify(response.data));
        //         console.log(response.data); // Handle successful sign-up
        //     } catch (error) {
        //         console.error('Sign-up failed:', error.response.data); // Handle error
        //     }
        // },
        onSubmit: async (values) => {
            try {
                const response = await axios.post('http://localhost:5000/api/signup', values);
                localStorage.setItem('user', JSON.stringify(response.data));
                setPopupMessage(`Username: ${values.name}\nSign-up successful!`);
                navigate('/login'); // Set success message
                console.log(response.data); // Handle successful sign-up
            } catch (error) {
                setPopupMessage('Sign-up failed: ' + error.response.data.message); // Set error message
                console.error('Sign-up failed:', error.response.data); // Handle error
            }
        },
    });

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        className="signup-input"
                        id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div className="error">{formik.errors.name}</div>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        className="signup-input"
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className="error">{formik.errors.email}</div>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="mobile">Mobile Number</label>
                    <input
                        className="signup-input"
                        id="mobile"
                        name="mobile"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.mobile}
                    />
                    {formik.touched.mobile && formik.errors.mobile ? (
                        <div className="error">{formik.errors.mobile}</div>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        className="signup-input"
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <div className="error">{formik.errors.password}</div>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        className="signup-input"
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.confirmPassword}
                    />
                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                        <div className="error">{formik.errors.confirmPassword}</div>
                    ) : null}
                </div>

                <button type="submit" className="signup-button">Sign Up</button>
            </form>
            {popupMessage && (
                <div className="popup-message">
                    {popupMessage}
                </div>
            )}
            
        </div>
    );
};

export default SignUp;
