import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';

const Logout = () => {
    useEffect(()=>{
        Logoutuser();
    },[Logoutuser]);



  return <Navigate to={"/Login"}/>;
}

export default Logout
