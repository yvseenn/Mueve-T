import { createContext, useContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Function for signing up
  const signup = async (userData) => {
    try {
      const response = await axios.post("http://localhost:8000/signup", userData);
      setUser(response.data.user);
      // You can also store the token in local storage or cookies for authentication
    } catch (error) {
      console.log(error);
    }
  };

  // Function for logging in
  const login = async (userData) => {
    try {
      const response = await axios.post("http://localhost:8000/login", userData);
      setUser(response.data.user);
      // You can also store the token in local storage or cookies for authentication
    } catch (error) {
      console.log(error);
    }
  };

  // Function for logging out
  const logout = () => {
    setUser(null);
    // Clear the stored token from local storage or cookies
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
