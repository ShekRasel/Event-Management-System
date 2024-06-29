import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();


const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState('');
  const [userId, setUserId] = useState(null);
  const [email, setEmail] = useState(''); // Add state for email

  useEffect(() => {
    const loggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
    setIsLoggedIn(!!loggedIn);

    const photo = localStorage.getItem('profilePhoto');
    setProfilePhoto(photo || '');

    const storedUserId = localStorage.getItem('userId');
    setUserId(storedUserId || null);

    const storedEmail = localStorage.getItem('email'); // Retrieve email from local storage
    setEmail(storedEmail || '');
  }, []);

  const login = (photo, userId, userEmail, token) => { // Include userEmail as a parameter
    localStorage.setItem('isLoggedIn', true);
    if (photo) {
      const formattedPhoto = photo.replace(/\\/g, '/');
      localStorage.setItem('profilePhoto', formattedPhoto);
      setProfilePhoto(formattedPhoto);
    }
    localStorage.setItem('userId', userId);
    setUserId(userId);
    localStorage.setItem('email', userEmail); // Store email in local storage
    setEmail(userEmail);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('profilePhoto');
    localStorage.removeItem('userId');
    localStorage.removeItem('email');
    setIsLoggedIn(false);
    setProfilePhoto('');
    setUserId(null);
    setEmail(''); // Clear email on logout
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, profilePhoto, userId, email, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
