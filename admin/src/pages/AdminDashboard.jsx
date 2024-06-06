import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const usersResponse = await axios.get('http://localhost:3000/api/admin/users', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUsers(usersResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const servicesResponse = await axios.get('http://localhost:3000/api/admin/services', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setServices(servicesResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDeleteUser = async (userId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.delete(`http://localhost:3000/api/admin/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response.data); // Handle successful deletion
      setUsers(users.filter(user => user._id !== userId)); // Update state to remove deleted user
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleDeleteService = async (serviceId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.delete(`http://localhost:3000/api/admin/services/${serviceId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response.data); // Handle successful deletion
      setServices(services.filter(service => service._id !== serviceId)); // Update state to remove deleted service
    } catch (error) {
      console.error('Error deleting service:', error);
    }
  };

  return (
    <div className="p-8 mt-10">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <div className="flex space-x-8">
        <div className="w-1/2 p-4 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Users</h2>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b-2 border-gray-300">ID</th>
                <th className="py-2 px-4 border-b-2 border-gray-300">Email</th>
                <th className="py-2 px-4 border-b-2 border-gray-300">First Name</th>
                <th className="py-2 px-4 border-b-2 border-gray-300">Last Name</th>
                <th className="py-2 px-4 border-b-2 border-gray-300">Profile Photo</th>
                <th className="py-2 px-4 border-b-2 border-gray-300">Action</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(users) && users.map(user => (
                <tr key={user._id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b border-gray-300">{user._id}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{user.email}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{user.firstName}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{user.lastName}</td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    {user.profilePhoto ? (
                      <img src={`http://localhost:3000/${user.profilePhoto}`} alt="Profile" className="w-16 h-16 rounded-full object-cover" onError={(e) => e.target.style.display = 'none'} />
                    ) : (
                      <span>No Photo</span>
                    )}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    <button onClick={() => handleDeleteUser(user._id)} className="bg-red-500 text-white px-4 py-2 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-1/2 p-4 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Booked Services</h2>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b-2 border-gray-300">Service ID</th>
                <th className="py-2 px-4 border-b-2 border-gray-300">Booked Service</th>
                <th className="py-2 px-4 border-b-2 border-gray-300">Price</th>
                <th className="py-2 px-4 border-b-2 border-gray-300">Action</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(services) && services.map(service => (
                <tr key={service._id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b border-gray-300">{service._id}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{service.name}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{service.price}</td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    <button onClick={() => handleDeleteService(service._id)} className="bg-red-500 text-white px-4 py-2 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
