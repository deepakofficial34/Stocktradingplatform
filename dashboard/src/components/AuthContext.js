import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      verifyToken();
    } else {
      setLoading(false);
    }
  }, []);

  const verifyToken = async () => {
    try {
      const response = await axios.get("http://localhost:3002/verify", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data.user);
      setLoading(false);
    } catch (error) {
      localStorage.removeItem("token");
      setToken(null);
      setUser(null);
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:3002/login", {
        email,
        password,
      });
      const { token: newToken, user: userData } = response.data;
      localStorage.setItem("token", newToken);
      setToken(newToken);
      setUser(userData);
      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Login failed",
      };
    }
  };

  const signup = async (email, username, password) => {
    try {
      const response = await axios.post("http://localhost:3002/signup", {
        email,
        username,
        password,
      });
      const { token: newToken, user: userData } = response.data;
      localStorage.setItem("token", newToken);
      setToken(newToken);
      setUser(userData);
      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Signup failed",
      };
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  const value = {
    user,
    token,
    login,
    signup,
    logout,
    loading,
    isAuthenticated: !!token,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;

