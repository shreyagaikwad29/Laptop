import React from 'react'
import Home from "./pages/Home/Home";
import { Route, Routes } from 'react-router-dom';
import Navbar from "./pages/Navbar/Navbar";
import "./App.css"
import Product from './pages/Product/Product'
import Contact from './pages/Contact/Contact';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import UserInfo from './pages/Auth/UserInfo';
import About from './pages/About/About';
import Footer from './pages/Footer/Footer';

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
       <Footer/>
    </>
  )
}

export default App;
