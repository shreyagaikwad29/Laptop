import React from 'react'
import Home from "./Component/Home";
import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import "./App.css"
const App=()=> {
  return (
    <>
       <Navbar/>
       <Routes>
            <Route index element={<Home/>}/>
       </Routes>
    </>
  )
}

export default App;
