import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState, useEffect, createContext } from "react";
import React from "react";
import { loginAPI, registerAPI } from "@/Services/AuthServices";
import axios from "axios";
const UserContext = createContext({});

export const UserProvider = ({ children }) => {  // Correct destructuring for children prop
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));  // Parse the user object correctly
      setToken(storedToken);  // No need to parse token if it's a simple string
      axios.defaults.headers.common["Authorization"] = "Bearer" + token;
    }
    setIsReady(true);
  }, []);

  const registerUser = async (email, username, password) => {
    try {
      const res = await registerAPI(email, username, password);
      if (res) {
        localStorage.setItem("token", res.data.token);
        const userObj = {
          username: res.data.username,
          email: res.data.email,
        };
        localStorage.setItem("user", JSON.stringify(userObj));
        setToken(res.data.token);
        setUser(userObj);
        toast.success("Registration Successful");
        navigate("/");
      }
    } catch (error) {
      toast.warning("Server error occurred during registration");
    }
  };

  const loginUser = async (username, password) => {
    try {
      const res = await loginAPI(username, password);
      if (res) {
        localStorage.setItem("token", res.data.token);
        console.log("Test")
        const userObj = {
          username: res.data.username,
          email: res.data.email,
        };
        localStorage.setItem("user", JSON.stringify(userObj));
        setToken(res.data.token);
        setUser(userObj);
        toast.success("Login Successful");
        navigate("/");
      }
    } catch (error) {
      toast.warning("Server error occurred during login");
    }
  };

  const isLoggedIn = () => {
    return !!user;
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setToken(null);  // Set token to null instead of an empty string
    navigate("/");
  };

  return (
    <UserContext.Provider value={{ loginUser, user, token, logout, isLoggedIn, registerUser }}>
      {isReady ? children : null}  {/* Render children only when isReady is true */}
    </UserContext.Provider>
  );
};

export const useAuth = () => React.useContext(UserContext);
