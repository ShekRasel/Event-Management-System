// src/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState('');

  useEffect(() => {
    const loggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
    setIsLoggedIn(!!loggedIn);
    
    const photo = localStorage.getItem('profilePhoto');
    setProfilePhoto(photo || '');
  }, []);

  const login = (photo) => {
    console.log("Photo received during login:", photo);
    localStorage.setItem('isLoggedIn', true);
    if (photo) {
      const formattedPhoto = photo.replace(/\\/g, '/');
      localStorage.setItem('profilePhoto', formattedPhoto);
      setProfilePhoto(formattedPhoto);
    }
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('profilePhoto');
    setIsLoggedIn(false);
    setProfilePhoto('');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, profilePhoto, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
