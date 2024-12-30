// src/Login.js
import React, { useState } from 'react';
import './Login.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../store/auth';
import { toast } from 'react-toastify';
const URL = "http://localhost:3010/api/auth/Login";


const Login = () => {
   
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    const { storetokenInLS }= useAuth();

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
                toast.success("login successful");
                const res_data = await response.json();
                console.log("res from server", res_data);
                storetokenInLS(res_data.token);
                setUser({ 
                    email:"", 
                    password:"" });  
                navigate("/"); 
            }else{ 
                toast.error("invalid credential");
                console.log("invalid credential")
            }
        } catch (error) { 
            console.log(error);
        }
    };

    return (
        <>
        <section>
            <main>
                <div className="section-login">
                    <div className="container grid grid-two-cols">
                        <div className="login-image">
                        <lottie-player
                            src="https://lottie.host/a24a101e-a63a-457e-a7f2-76088e0f94be/sahdouugyY.json"  // Lottie animation JSON file
                            background="##FFFFFF"  // Background color
                            speed="1"  // Speed of the animation
                            style={{ width: '300px', height: '300px' }}  // Style for the animation
                            loop  // Animation will loop // Controls like play, pause, etc.
                            autoplay  // Start animation immediately
                            direction="1"  // Animation direction
                            mode="normal"  // Mode of animation (normal or reversed)
                        ></lottie-player>
                        </div>


                    
                        <div className="login-form">
                            <h1 className="main-heading mb-3">Login</h1>
                            <br />

                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <br />
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
