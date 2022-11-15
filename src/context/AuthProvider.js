import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/Firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, {
      displayName: userInfo,
    });
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const forgetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const signinwithgoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const userInfo = {
    user,
    createUser,
    signIn,
    updateUser,
    logout,
    loading,
    forgetPassword,
    signinwithgoogle,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe;
  }, []);
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
