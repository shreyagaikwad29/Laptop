import React from 'react'
import Home from "./pages/Home/Home";
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
          
       </Routes>
    </>
  )
}

export default App;
