import React from 'react'
import Home from "./pages/Home/Home";
import { Route, Routes } from 'react-router-dom';
import Navbar from "./pages/Navbar/Navbar";
import "./App.css"
import Contact from './pages/Contact/Contact';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import UserInfo from './pages/Auth/UserInfo';
import About from './pages/About/About';
import Footer from './pages/Footer/Footer';
import Features from './pages/Features/Features';
import TicketForm from './pages/Tickets/TicketForm';
import TicketList from './pages/Tickets/TicketList';
import Error from './pages/Error';
import Logout from './pages/Auth/Logout';

const App=()=> {
  return (
    <>
       <Navbar/>
       <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='About' element={<About/>}/>
            <Route path='tickets' element={<TicketList/>}/>  
            <Route path="Features" element={<Features/>}/>
            <Route path="Contact" element={<Contact/>}/>
            <Route path='Login' element={<Login/>}/>
            <Route path='SignUp' element={<SignUp/>}/>
          { /*<Route path='Logout' element={<Logout/>}/>*/}
            <Route path='ticket' element={<TicketForm/>}/>
            <Route path='ticketlist' element={<TicketList/>}/>
            <Route path='*' element={<Error/>}/>
                             
        </Routes>
       <Footer/>
    </>
  )
}

export default App;
