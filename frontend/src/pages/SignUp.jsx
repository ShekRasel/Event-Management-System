import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // Import the AuthContext

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null); // Add state for profile photo
  const { login } = useContext(AuthContext); // Get the login function from the AuthContext
  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(); // Create a FormData object
      formData.append('firstName', firstName);
      formData.append('lastName', lastName);
      formData.append('email', email);
      formData.append('password', password);
      if (profilePhoto) {
        formData.append('profilePhoto', profilePhoto, profilePhoto.name); // Append profile photo to FormData if selected
      }

      const response = await axios.post('http://localhost:3000/api/signup', formData, {
        headers: {
          'Content-Type': 'multipart/form-data' // Set content type for FormData
        }
      });

      console.log(response.data); // Handle success response
      localStorage.setItem('isLoggedIn', true); // Set isLoggedIn to true
      localStorage.setItem('profilePhoto', response.data.profilePhoto);
      login(response.data.profilePhoto); // Update authentication state using the login function
      navigate('/'); // Redirect to the home page
    } catch (error) {
      console.error('Error signing up:', error.response ? error.response.data : error.message); // Handle error
    }
  };

  const handleProfilePhotoChange = (event) => {
    setProfilePhoto(event.target.files[0]); // Update profile photo state
  };

  return (
    <div className="flex flex-col sm:flex-row min-h-screen">
      <div className="sm:w-1/2 relative">
        <div className="relative mt-20">
          <img src="public/images/signupPic.avif" alt="SignUp" className="max-h-full" />
          <div className="absolute bottom-0 left-0 right-0 text-center text-white bg-black bg-opacity-0 py-4">
            <p className="font-bold text-5xl">Join 35k+ web professionals &</p>
            <p className="font-bold text-5xl">build your website</p>
            <p className="text-2xl">Commercial License</p>
            <p className="text-2xl">Unlimited Exports</p>
            <p className="text-2xl">120+ Coded Blocks</p>
            <p className="text-2xl">Design Files Included</p>
          </div>
        </div>
      </div>
      <div className="sm:w-1/2 bg-white flex items-center justify-center">
        <div className="max-w-md w-full py-12 px-8">
          <h2 className="text-3xl font-semibold text-center mb-6">Sign up to Eventhive</h2>
          <p className="text-center text-gray-600 mb-4">Already have an account? <a href="/signin" className="text-blue-500">Login</a></p>
          <form onSubmit={handleSignUp}>
            <div className="mb-4">
              <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full py-2 px-4 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-500" required />
            </div>
            <div className="mb-4">
              <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full py-2 px-4 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-500" required />
            </div>
            <div className="mb-4">
              <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full py-2 px-4 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-500" required />
            </div>
            <div className="mb-4">
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full py-2 px-4 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-500" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Choose a photo from PC</label>
              <input type="file" accept="image/*" onChange={handleProfilePhotoChange} className="w-full py-2 px-4 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-500" />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Sign Up</button>
          </form>
          <button className="w-full bg-red-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-red-600 focus:outline-none focus:bg-red-600">Sign Up with Google</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
