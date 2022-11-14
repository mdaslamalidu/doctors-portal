import React, { createContext, useState } from "react";
import app from "../firebase/Firebase.config";

const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  const userInfo = {
    user,
  };
  return <AuthContext.Provider value={userInfo}></AuthContext.Provider>;
};

export default AuthProvider;
