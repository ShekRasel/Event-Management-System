import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Import icons as needed

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
    company: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/contact/submit', formData);
      toast.success(response.data.message);
      setFormData({
        name: '',
        email: '',
        message: '',
        phone: '',
        company: '',
      });
    } catch (error) {
      toast.error('An error occurred while submitting the form');
    }
  };

  return (
    <div className="container mx-auto py-10">
      <div className="max-w-4xl mx-auto bg-slate-50 rounded-lg shadow-md">
        <div className="px-6 py-8">
          <h1 className="text-3xl md:text-4xl lg:text-3xl font-bold text-center mb-6">Contact Us</h1>
          <p className="text-lg text-gray-700 mb-8 text-center italic">
            We'd love to hear from you. Reach out using the details below or send us a message.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone Card */}
            <div className="bg-gray-100 rounded-lg p-6">
              <div className="text-center mb-4">
                <FaPhone className="text-4xl text-blue-500 mb-2 mx-auto" />
              </div>
              <p className="text-xl font-bold mb-2 text-center">Phone</p>
              <p className="text-gray-700 text-center">01648936921</p>
              <p className="text-gray-700 text-center">01648936921</p>
            </div>

            {/* Email Card */}
            <div className="bg-gray-100 rounded-lg p-6">
              <div className="text-center mb-4">
                <FaEnvelope className="text-4xl text-blue-500 mb-4 mx-auto" />
              </div>
              <p className="text-xl font-bold mb-2 text-center">Email</p>
              <p className="text-gray-700 text-center">mdr889299@gmail.com</p>
              <p className="text-gray-700 text-center">swe.rasel@gmail.com</p>
            </div>

            {/* Address Card */}
            <div className="bg-gray-100 rounded-lg p-6">
              <div className="text-center mb-4">
                <FaMapMarkerAlt className="text-4xl text-blue-500 mb-4 mx-auto" />
              </div>
              <p className="text-xl font-bold mb-2 text-center">Address</p>
              <p className="text-gray-700 text-center">Ashuliya, Dhaka</p>
              <p className="text-gray-700 text-center">Bangladesh</p>
            </div>
          </div>

          <h2 className="text-2xl lg:text-2xl font-bold mt-12 mb-4 text-center">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Your Name</label>
                <input
                  type="text"
                  placeholder='Your name'
                  id="name"
                  name="name"
                  className="w-full py-3 px-4 border-2 border-gray-200 focus:outline-none focus:border-blue-500"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder='Your Email Address'
                  id="email"
                  name="email"
                  className="w-full py-3 px-4 border-2 border-gray-200 focus:outline-none focus:border-blue-500"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder='Type your phone number'
                  id="phone"
                  name="phone"
                  className="w-full py-3 px-4 border-2 border-gray-200 focus:outline-none focus:border-blue-500"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="company" className="block text-gray-700 font-bold mb-2">Company Name</label>
                <input
                  type="text"
                  placeholder='Your Company'
                  id="company"
                  name="company"
                  className="w-full py-3 px-4 border-2 border-gray-200 focus:outline-none focus:border-blue-500"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4 col-span-2">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder='write massages'
                  className="w-full py-3 px-4 border-2 border-gray-200 focus:outline-none focus:border-blue-500"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="mb-4 col-span-2">
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
