import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const storetokenInLS = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken); // Update the state when a token is set
  };

  const Logoutuser = () => {
    setToken(null); // Clear the token state
    localStorage.removeItem("token"); // Remove the token from localStorage
    console.log("Logout successful");
  };

  const isLoggedIn = !!token; // Dynamically update based on the token state

  return (
    <AuthContext.Provider value={{ isLoggedIn, storetokenInLS, Logoutuser }}>
      {children}
    </AuthContext.Provider>
  );
};
