// Import React and necessary hooks/components
import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import { AuthContext } from '../context/AuthContext';
import { IoLogOut } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [color, setColor] = useState('red');
  const { isLoggedIn, profilePhoto, logout } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {}, [isLoggedIn]);

  useEffect(() => {
    const colors = ['black', 'teal', 'indigo'];
    let colorIndex = 0;

    const changeColor = () => {
      setColor(colors[colorIndex]);
      colorIndex = (colorIndex + 1) % colors.length;
    };

    const intervalId = setInterval(changeColor, 500); // Change color every 500ms

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOrdersClick = () => {
    if (!isLoggedIn) {
      navigate('/signin'); // Use navigate instead of window.location.href
    }
  };

  const getLinkClasses = (path) => {
    return location.pathname === path
      ? 'text-red-500 font-bold'
      : 'text-gray-700 hover:text-gray-900 font-semibold hover:underline';
  };

  const profilePhotoClass = 'w-12 h-12 rounded-full border-4 border-green-600';

  // Define profile photo URL based on environment variable using Vite's import.meta.env
  const profilePhotoUrl = `${import.meta.env.VITE_API_BASE_URL}/${profilePhoto}`;

  return (
    <nav className=" bg-slate-100 shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 rounded-full mr-4" />
          <div className="text-3xl font-semibold italic" style={{ color }}>Event-Expert</div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex space-x-6">
            <Link to="/" className={getLinkClasses("/")}>Home</Link>
            <Link to="/services" className={getLinkClasses("/services")}>Services</Link>
            <Link to="/orders" className={getLinkClasses("/orders")} onClick={handleOrdersClick}>Orders</Link>
            <Link to="/contact" className={getLinkClasses("/contact")}>Contact</Link>
            <Link to="/add-product" className={getLinkClasses("/add-product")}>Add Product</Link>
          </div>
          {!isLoggedIn && (
            <Link to="/signup" className=" bg-blue-700 font-bold text-white px-4 py-2 rounded hover:bg-blue-600 hidden md:block">Sign Up</Link>
          )}
          {isLoggedIn && (
            <>
              {profilePhoto && (
                <div className="relative">
                  <img src={profilePhotoUrl} alt="profile" className={profilePhotoClass} onClick={toggleDropdown} />
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                      <button onClick={toggleDropdown} className="w-full text-right px-4 py-2">
                        <svg className="w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                      </button>
                      <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</Link>
                      <button onClick={logout} className="flex w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 items-center gap-1"> <IoLogOut className=' w-8 h-8'/> Sign Out</button>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <Link to="/" className={`block px-4 py-2 ${getLinkClasses("/")}`} onClick={toggleMenu}>Home</Link>
          <Link to="/services" className={`block px-4 py-2 ${getLinkClasses("/services")}`} onClick={toggleMenu}>Services</Link>
          <Link to="/orders" className={`block px-4 py-2 ${getLinkClasses("/orders")}`} onClick={() => { handleOrdersClick(); toggleMenu(); }}>Orders</Link>
          <Link to="/contact" className={`block px-4 py-2 ${getLinkClasses("/contact")}`} onClick={toggleMenu}>Contact</Link>
          <Link to="/add-product" className={`block px-4 py-2 ${getLinkClasses("/add-product")}`} onClick={toggleMenu}>Add Product</Link>
          {!isLoggedIn && <Link to="/signup" className="block bg-blue-500 text-white text-center px-4 py-2 rounded hover:bg-blue-600 m-2" onClick={toggleMenu}>Sign Up</Link>}
          {isLoggedIn && (
            <>
              {profilePhoto && (
                <div className="relative">
                  <img src={profilePhotoUrl} alt="profile" className={profilePhotoClass} onClick={toggleDropdown} />
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                      <button onClick={toggleDropdown} className="w-full text-right px-4 py-2">
                        <svg className="w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                      </button>
                      <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={toggleDropdown}>Profile</Link>
                      <button onClick={logout} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Sign Out</button>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
