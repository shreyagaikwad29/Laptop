import React from 'react'
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import "./App.css"
const App=()=> {
  return (
    <>
       <Navbar/>
       <Routes>
            <Route path="/" element={<Auth/>}/>
            <Route path="/Home" element={<Home/>}/>
       </Routes>
    </>
  )
}

export default App;
