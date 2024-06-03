import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // Import the AuthContext
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import the eye icons

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // Get the login function from the AuthContext

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/signin', { email, password });
      const { profilePhoto, UserId, token } = response.data;

      localStorage.setItem("token", token)
      login(profilePhoto, UserId);
      navigate('/');
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError('Please sign up first.');
        toast.error('Please sign up first.');
      } else {
        setError('Error signing in. Please try again later.');
        toast.error('Error signing in. Please try again later.');
      }
      console.error('Error signing in:', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row w-full max-w-7xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="sm:w-1/2 flex items-center justify-center p-4 sm:p-8">
          <div className="relative w-full h-full">
            <img src="images/signinPic.avif" alt="SignIn" className="h-64 sm:h-96 md:h-[750px] w-full object-cover rounded-lg" />
            <div className="absolute bottom-0 left-0 right-0 text-center text-white bg-black bg-opacity-5 py-4">
              <p className="font-bold text-5xl">Welcome back!</p>
              <p className="text-2xl">Sign in to access your account</p>
            </div>
          </div>
        </div>
        <div className="sm:w-1/2 flex items-center justify-center p-4 sm:p-8">
          <div className="max-w-lg w-full">
            <h2 className="text-3xl font-bold text-center mb-6">Sign in to Eventhive</h2>
            <p className="text-center font-bold text-gray-600 mb-4">Don't have an account? <a href="/signup" className="text-blue-500 font-bold">Sign Up</a></p>
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <form onSubmit={handleSignIn}>
              <div className="mb-4">
                <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full py-2 px-4 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-500 font-bold" required />
              </div>
              <div className="mb-4 relative">
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  placeholder="Password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  className="w-full py-2 px-4 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-500 font-bold" 
                  required 
                />
                <div 
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-700 cursor-pointer" 
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
              <button type="submit" className="w-full font-bold bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Sign In</button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignIn;
