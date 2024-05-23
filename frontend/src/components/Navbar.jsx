// AuthContext.jsx
// No changes needed here, assuming profilePhoto is correctly stored in the state.

// Navbar.jsx
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, profilePhoto, logout } = useContext(AuthContext);

  useEffect(() => {
    console.log("isLoggedIn:", isLoggedIn);
  }, [isLoggedIn]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
console.log("Profile photo path:", profilePhoto);


  return (
    <nav className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 mr-4" />
          <div className="text-2xl font-semibold text-gray-800">EventExpert</div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-gray-900">Services</Link>
            <Link to="/orders" className="text-gray-700 hover:text-gray-900">Orders</Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
            <Link to="/add-product" className="text-gray-700 hover:text-gray-900">Add Product</Link>
          </div>
          {!isLoggedIn && <Link to="/signup" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 hidden md:block">Sign Up</Link>}
          {isLoggedIn && (
            <>
              {profilePhoto && (
              <img src={`http://localhost:3000/${profilePhoto}`} alt="profile" className="w-10 h-10 rounded-full" />)}
              <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 hidden md:block">SignOut</button>
            </>
          )}
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <Link to="/" className="block text-gray-700 hover:text-gray-900 px-4 py-2" onClick={toggleMenu}>Home</Link>
          <Link to="/services" className="block text-gray-700 hover:text-gray-900 px-4 py-2" onClick={toggleMenu}>Services</Link>
          <Link to="/orders" className="block text-gray-700 hover:text-gray-900 px-4 py-2" onClick={toggleMenu}>Orders</Link>
          <Link to="/contact" className="block text-gray-700 hover:text-gray-900 px-4 py-2" onClick={toggleMenu}>Contact</Link>
          <Link to="/add-product" className="block text-gray-700 hover:text-gray-900 px-4 py-2" onClick={toggleMenu}>Add Product</Link>
          {!isLoggedIn && <Link to="/signup" className="block bg-blue-500 text-white text-center px-4 py-2 rounded hover:bg-blue-600 m-2" onClick={toggleMenu}>Sign Up</Link>}
          {isLoggedIn && (
            <>
              {profilePhoto && <img src={`/backend/uploads${profilePhoto}`} className="w-10 h-10 rounded-full mx-auto my-2" />}
              <button onClick={logout} className="block bg-red-500 text-white text-center px-4 py-2 rounded hover:bg-red-600 m-2">SignOut</button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
