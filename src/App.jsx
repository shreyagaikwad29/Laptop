import React from 'react'
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import { Route, Routes } from 'react-router-dom';
import Navbar from "./pages/Navbar/Navbar";
import "./App.css"
import About from './pages/About/About';
import Product from './pages/Product/Product';
import Contact from './pages/Contact/Contact';

const App=()=> {
  return (
    <>
       <Navbar/>
       <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Product" element={<Product/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Auth" element={<Auth/>}/>
       </Routes>
    </>
  )
}

export default App;
