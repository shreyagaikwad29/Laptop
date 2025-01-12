import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");
    // const [ticket, setTicket] = useState("");
    // const authorizationToken = `Bearer ${token}`;


    const storetokenInLS = (serverToken)=>{
        setToken(serverToken);
        return localStorage.setItem("token", serverToken);
    };

    
  const Logoutuser = () => {
    setToken(null); // Clear the token state
    localStorage.removeItem("token"); // Remove the token from localStorage
    console.log("Logout successful");
  };
  const isLoggedIn = !!token; 

  const userAuthentication = async () =>{
    try {
        const response = await fetch("http://localhost:3010/api/auth/user", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.ok) {
            const data = await response.json();
            console.log("user data", data.userData);
            setUser(data.userData);
        }
    } catch (error) {
        console.log(error);
        console.log("error fetching user data");
    }
  }

 

  useEffect(()=>{
    userAuthentication();
  },[token]);

    return ( <AuthContext.Provider value={{isLoggedIn, storetokenInLS, Logoutuser, user, userAuthentication, token}}>
        {children}
    </AuthContext.Provider>
    )
};

export const useAuth=() =>{
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
      
        throw new Error("useAuth used putside of the Provider")
    }
    return authContextValue;
}