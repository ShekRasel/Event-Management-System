import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validDomains = ['gmail.com', 'yahoo.com', 'outlook.com'];
    const emailDomain = email.split('@')[1];
    return emailRegex.test(email) && validDomains.includes(emailDomain);
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setError('Email or Phone Number wrong');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('firstName', firstName);
      formData.append('lastName', lastName);
      formData.append('email', email);
      formData.append('password', password);
      if (profilePhoto) {
        formData.append('profilePhoto', profilePhoto, profilePhoto.name);
      }

      const response = await axios.post('http://localhost:3000/api/signup', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log(response.data);
      localStorage.setItem('isLoggedIn', true);
      localStorage.setItem('profilePhoto', response.data.profilePhoto);
      login(response.data.profilePhoto);
      navigate('/');
    } catch (error) {
      console.error('Error signing up:', error.response ? error.response.data : error.message);
    }
  };

  const handleProfilePhotoChange = (event) => {
    setProfilePhoto(event.target.files[0]);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row w-full max-w-7xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="sm:w-1/2 flex items-center justify-center p-4 sm:p-8">
          <div className="relative w-full h-full">
            <img src="public/images/signupPic.avif" alt="SignUp" className="h-64 sm:h-96 md:h-[750px] w-full object-cover rounded-lg" />
            <div className="absolute bottom-0 left-0 right-0 text-center text-white bg-black bg-opacity-5 py-4">
              <p className="font-bold text-5xl">Join 35k+ web professionals &</p>
              <p className="font-bold text-5xl">build your website</p>
              <p className="text-2xl">Commercial License</p>
              <p className="text-2xl">Unlimited Exports</p>
              <p className="text-2xl">120+ Coded Blocks</p>
              <p className="text-2xl">Design Files Included</p>
            </div>
          </div>
        </div>
        <div className="sm:w-1/2 flex items-center justify-center p-4 sm:p-8">
          <div className="max-w-lg w-full">
            <h2 className="text-3xl font-bold text-center mb-6">Sign up to Eventhive</h2>
            <p className="text-center font-bold text-gray-600 mb-4">Already have an account? <a href="/signin" className="text-blue-500 font-bold">Login</a></p>
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <form onSubmit={handleSignUp}>
              <div className="mb-4">
                <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full py-2 px-4 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-500 font-bold" required />
              </div>
              <div className="mb-4">
                <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full py-2 px-4 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-500 font-bold" required />
              </div>
              <div className="mb-4">
                <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full py-2 px-4 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-500 font-bold" required />
              </div>
              <div className="mb-4">
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full py-2 px-4 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-500 font-bold" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Choose a photo from PC</label>
                <input type="file" accept="image/*" onChange={handleProfilePhotoChange} className="w-full py-2 px-4 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-500" />
              </div>
              <button type="submit" className="w-full font-bold bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Sign Up</button>
            </form>
            <button className="w-full font-bold bg-red-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-red-600 focus:outline-none focus:bg-red-600">Sign Up with Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
