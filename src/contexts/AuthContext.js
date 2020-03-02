import React, { useState, useEffect } from "react";
import firebase from "../fire";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({isLoading: true, isAuthenticated : false});

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
        if(user) setAuthState({user, isLoading:false, isAuthenticated : true})
    });
  }, []);

  return (
    <AuthContext.Provider value={{...authState, setAuthState}}>
      {children}
    </AuthContext.Provider>
  );
};