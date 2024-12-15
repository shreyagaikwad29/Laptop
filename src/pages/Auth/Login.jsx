// src/Login.js
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './Login.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';
const URL = "http://localhost:3010/api/auth/Login";

const Login = () => {
    // const navigate = useNavigate(); 
    // const formik = useFormik({
    //     initialValues: {
    //         email: '',
    //         password: '',
    //     },
    //     validationSchema: Yup.object({
    //         email: Yup.string()
    //             .email('Invalid email address')
    //             .required('Required'),
    //         password: Yup.string()
    //             .min(6, 'Must be 6 characters or more')
    //             .required('Required'),
    //     }),
    //     onSubmit: async (values) => {
    //         try {
    //             const response = await axios.get('http://localhost:5000/users');
                
    //             // Check if the response is valid
    //             if (!response || !response.data) {
    //                 console.error('No data returned from the API');
    //                 return;
    //             }
        
    //             const users = response.data;
        
    //             // Simulating login check
    //             const user = users.find(user => user.email === values.email && user.password === values.password);
    //             if (user) {
    //                 localStorage.setItem('user', JSON.stringify(user));
    //                 console.log('Login successful:', user);
    //                 navigate('/'); // Navigate to home page on successful login
    //             } else {
    //                 console.error('Invalid credentials');
    //             }
    //         } catch (error) {
    //             // Log the error message for debugging
    //             console.error('Error fetching users:', error.message);
    //             if (error.response) {
    //                 // The request was made and the server responded with a status code
    //                 console.error('Response data:', error.response.data);
    //                 console.error('Response status:', error.response.status);
    //             }
    //         }
    //     },
        
    // });
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    const handleInput = (e) =>{
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name] : value,
        });
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const response = await fetch(URL, {
                method:"POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            console.log("login form", response);

            if (response.ok) {
                alert("login successful");
                setUser({ email:"", password:"" });  
                navigate("/"); 
            }else{
                alert("invalid credential");
                console.log("invalid credential")
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        // <div className="login-container">
        //     <h2>Login</h2>
        //     <form onSubmit={formik.handleSubmit}>
        //         <div>
        //             <label htmlFor="email">Email</label>
        //             <input
        //                 className="login-input"
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
        //             <label htmlFor="password">Password</label>
        //             <input
        //                 className="login-input"
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

        //         <button type="submit" className="login-button">Login</button>
        //     </form>
        // </div>
        <>
        <section>
            <main>
                <div className="section-login">
                    <div className="container grid grid-two-cols">
                        <div className="login-image">
                            <img src="" alt="" />
                        </div>


                    
                        <div className="login-form">
                            <h1 className="main-heading mb-3">Login</h1>
                            <br />

                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input 
                                    type="email"
                                    name='email'
                                    placeholder='Enter your email'
                                    id='email'
                                    required
                                    autoComplete='off'
                                    value={user.email}
                                    onChange={handleInput} />
                                </div>

                                <div>
                                    <label htmlFor="password">Password</label>
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
                                <button type='submit' className='btn btn-submit'>
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
        </>
    );
};

export default Login;
