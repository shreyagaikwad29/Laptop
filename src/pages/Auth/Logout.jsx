import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../store/auth";

const Logout = () => {
  const { Logoutuser, isLoggedIn } = useAuth();

  useEffect(() => {
    Logoutuser();
  }, [Logoutuser]);

  // Redirect to login if the user is no longer logged in
  if (!isLoggedIn) {
    return <Navigate to="/Login" />;
  }

  return <div>Logging out...</div>; // Optional loading state
};

export default Logout;
