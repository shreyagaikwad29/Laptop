// src/Login.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './Login.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate(); 
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            password: Yup.string()
                .min(6, 'Must be 6 characters or more')
                .required('Required'),
        }),
        onSubmit: async (values) => {
            try {
                const response = await axios.get('http://localhost:5000/users');
                
                // Check if the response is valid
                if (!response || !response.data) {
                    console.error('No data returned from the API');
                    return;
                }
        
                const users = response.data;
        
                // Simulating login check
                const user = users.find(user => user.email === values.email && user.password === values.password);
                if (user) {
                    localStorage.setItem('user', JSON.stringify(user));
                    console.log('Login successful:', user);
                    navigate('/'); // Navigate to home page on successful login
                } else {
                    console.error('Invalid credentials');
                }
            } catch (error) {
                // Log the error message for debugging
                console.error('Error fetching users:', error.message);
                if (error.response) {
                    // The request was made and the server responded with a status code
                    console.error('Response data:', error.response.data);
                    console.error('Response status:', error.response.status);
                }
            }
        },
        
    });

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        className="login-input"
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
                    <label htmlFor="password">Password</label>
                    <input
                        className="login-input"
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

                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    );
};

export default Login;
