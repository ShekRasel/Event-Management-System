import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState('red');
  const { isLoggedIn, profilePhoto, logout } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {}, [isLoggedIn]);

  useEffect(() => {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
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

  return (
    <nav className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 rounded-full mr-4" />
          <div className="text-3xl font-semibold italic" style={{ color }}>Curate & Co</div>
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
            <Link to="/signup" className="bg-blue-500 font-bold text-white px-4 py-2 rounded hover:bg-blue-600 hidden md:block">Sign Up</Link>
          )}
          {isLoggedIn && (
            <>
              {profilePhoto && (
                <img src={`http://localhost:3000/${profilePhoto}`} alt="profile" className={profilePhotoClass} />
              )}
              <button onClick={logout} className="bg-red-500 font-bold text-white px-4 py-2 rounded hover:bg-red-600 hidden md:block">Sign Out</button>
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
              {profilePhoto && <img src={`http://localhost:3000/${profilePhoto}`} alt="profile" className={profilePhotoClass} />}
              <button onClick={logout} className="block bg-red-500 text-white font-bold text-center px-4 py-2 rounded hover:bg-red-600 m-2">Sign Out</button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
