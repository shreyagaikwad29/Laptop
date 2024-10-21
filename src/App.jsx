import React from 'react'
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/SignUp";
import { Route, Routes } from 'react-router-dom';
import Navbar from "./pages/Navbar/Navbar";
import "./App.css"
import About from './pages/About/About';
import Product from './pages/Product/Product'
import Contact from './pages/Contact/Contact';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import UserInfo from './pages/Auth/UserInfo';

const App=()=> {
  return (
    <>
       <Navbar/>
       <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="About" element={<About/>}/>
            <Route path="Product" element={<Product/>}/>
            <Route path="Contact" element={<Contact/>}/>
            <Route path='Login' element={<Login/>}/>
            <Route path='SignUp' element={<SignUp/>}/>
            <Route path='UserInfo' element={<UserInfo/>}/>
       </Routes>
    </>
  )
}

export default App;
