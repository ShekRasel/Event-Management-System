import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { FaTimes } from 'react-icons/fa';
import { AuthContext } from '../context/AuthContext';
import { loadStripe } from '@stripe/stripe-js';

const Orders = () => {
  const [services, setServices] = useState([]);
  const { profilePhoto, email, logout } = useContext(AuthContext);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3000/api/services', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  const handleDelete = async (serviceId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:3000/api/services/${serviceId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setServices(prevServices => prevServices.filter(service => service._id !== serviceId));
    } catch (error) {
      console.error('Error deleting service:', error.response.data.message);
    }
  };

  const makePayment = async (serviceId, amount) => {
    try {
      const stripe = await loadStripe("pk_test_51PAtfyP6UnHdutC2LTD4KkQZZSJCeCZzlNgViwthME8ERF8YmOl7cnty7QdpYYUAB7FnA0eS0IbYYkWZy0XvCPCA00eSGArlVS");
      amount = parseInt(amount.replace(' BDT', ''));
      const body = {
        serviceId,
        amount,
      };
      const headers = {
        "Content-Type": "application/json",
      };
      const response = await fetch("http://localhost:3000/api/create-checkout-session", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error('Failed to create Stripe checkout session');
      }

      const session = await response.json();
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.error('Error redirecting to Stripe checkout:', result.error.message);
      }
    } catch (error) {
      console.error('Error during payment:', error);
    }
  };

  const handleSignOut = () => {
    logout();
    window.location.reload();
  };

  console.log(email);

  return (
    <div className="flex min-h-screen bg-gray-100 p-6 justify-center">
      <div className="w-full max-w-3xl bg-white p-4 lg:p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <div>
            {profilePhoto && (
              <img src={`http://localhost:3000/${profilePhoto}`} alt="Profile" className="w-16 h-16 rounded-full mb-2" />
            )}
            {email && (
              <p className=" text-red-600 text-sm"> Email:{email}</p>
            )}
          </div>
          <div>
            <button onClick={handleSignOut} className="bg-red-500 text-white px-4 py-2 rounded">
              Sign Out
            </button>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center mb-4">Your Booked Services</h2>
        {services.length === 0 ? (
          <p className="text-center text-gray-500">You have no booked services yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full lg:w-auto mx-auto divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3 px-3 lg:px-6 text-left text-base font-medium text-gray-500 uppercase tracking-wider">Event Name</th>
                  <th className="py-3 px-3 lg:px-6 text-left text-base font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="py-3 px-3 lg:px-6 text-left text-base font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {services.map((service) => (
                  <tr key={service._id}>
                    <td className="py-2 px-3 lg:px-6 whitespace-nowrap text-sm lg:text-base">{service.name}</td>
                    <td className="py-2 px-3 lg:px-6 whitespace-nowrap text-sm lg:text-base">${service.price}</td>
                    <td className="py-2 px-3 lg:px-6 whitespace-nowrap text-sm lg:text-base">
                      <button
                        onClick={() => makePayment(service._id, service.price)}
                        className="bg-green-500 text-white px-3 py-1 rounded mr-2 lg:px-4 lg:py-2"
                      >
                        Pay
                      </button>
                      <button
                        onClick={() => handleDelete(service._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded lg:px-4 lg:py-2"
                      >
                        <FaTimes />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
