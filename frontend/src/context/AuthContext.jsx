// src/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState('');
  const [userId, setUserId] = useState(null); // Add state for user ID

  useEffect(() => {
    const loggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
    setIsLoggedIn(!!loggedIn);

    const photo = localStorage.getItem('profilePhoto');
    setProfilePhoto(photo || '');

    const storedUserId = localStorage.getItem('userId'); // Retrieve user ID
    setUserId(storedUserId || null);
  }, []);

  const login = (photo, userId, token) => { // Include userId as a parameter
    console.log("Photo received during login:", photo);
    console.log("Token received during login:", token); 
    localStorage.setItem('isLoggedIn', true);
    // localStorage.setItem('token', token);
    console.log("Token stored in local storage:", token);
    if (photo) {
      const formattedPhoto = photo.replace(/\\/g, '/');
      localStorage.setItem('profilePhoto', formattedPhoto);
      setProfilePhoto(formattedPhoto);
    }
    localStorage.setItem('userId', userId); // Store user ID in local storage
    setUserId(userId);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('profilePhoto');
    localStorage.removeItem('userId');
    setIsLoggedIn(false);
    setProfilePhoto('');
    setUserId(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, profilePhoto, userId, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
