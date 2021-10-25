import React, { createContext, useContext, useState, useEffect } from "react";
import { signupUser, loginUser } from "../services/api";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  const login = async (email, password) => {
    const data = await loginUser(email, password).then((json) => json.data);
    if (data.message === "ok") {
      localStorage.setItem("user", JSON.stringify(data.data));
      setCurrentUser(data.data);
    } else {
      throw new Error(data.message);
    }
  };

  const signup = async (user) => {
    await signupUser(user).then((json) => json.data);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setCurrentUser(null);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
