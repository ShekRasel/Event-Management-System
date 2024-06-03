// src/components/OrdersPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaTimes } from 'react-icons/fa'; // Import cross icon

const Orders = () => {
  const [services, setServices] = useState([]);

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
      setServices(services.filter(service => service._id !== serviceId));
    } catch (error) {
      console.error('Error deleting service:', error);
    }
  };

  const handlePay = (serviceId) => {
    // Add your payment logic here
    console.log(`Pay for service with ID: ${serviceId}`);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 p-6">
      {/* Left side cart */}
      <div className="w-1/4 bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Cart</h2>
        {services.length === 0 ? (
          <p>You have no booked services yet.</p>
        ) : (
          <ul>
            {services.map((service) => (
              <li key={service._id} className="mb-2">
                <div className="flex justify-between items-center">
                  <span>{service.name}</span>
                  <span>${service.price}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Right side cart table */}
      <div className="w-3/4 bg-white p-4 ml-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Your Booked Services</h2>
        {services.length === 0 ? (
          <p>You have no booked services yet.</p>
        ) : (
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Event Name</th>
                <th className="py-2 px-4 border-b">Price</th>
                <th className="py-2 px-4 border-b">Address</th>
                <th className="py-2 px-4 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service._id}>
                  <td className="py-2 px-4 border-b">{service.name}</td>
                  <td className="py-2 px-4 border-b">${service.price}</td>
                  <td className="py-2 px-4 border-b">{service.address}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => handlePay(service._id)}
                      className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                    >
                      Pay
                    </button>
                    <button
                      onClick={() => handleDelete(service._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                      <FaTimes />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Orders;
