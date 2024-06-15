import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdMessage, MdNotifications, MdAccountCircle } from 'react-icons/md';

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
        console.error('Error fetching users:', error);
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
        console.error('Error fetching services:', error);
      }
    };

    fetchData();
  }, []);

  const handleDeleteUser = async (userId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:3000/api/admin/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setUsers(users.filter(user => user._id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleDeleteService = async (serviceId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:3000/api/admin/services/${serviceId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setServices(services.filter(service => service._id !== serviceId));
    } catch (error) {
      console.error('Error deleting service:', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <div className="flex justify-between items-center bg-gray-800 text-white px-4 py-2 fixed top-0 w-full z-10">
        <div className="flex items-center">
          <img src="/src/assets/logo.jpg" alt="Logo" className="w-10 h-10 mr-2 rounded-full" />
          <span className="text-lg font-bold">Event Expert</span>
        </div>
        <div className="flex-grow flex justify-center mx-4">
          <input type="text" placeholder="Search..." className="w-4/12 px-3 py-1.5 rounded-md bg-gray-700 text-white outline-none" />
        </div>
        <div className="flex items-center gap-3">
          <MdMessage className="w-6 h-6 mr-2 cursor-pointer" />
          <MdNotifications className="w-6 h-6 mr-2 cursor-pointer" />
          <MdAccountCircle className="w-10 h-10 rounded-full cursor-pointer" />
        </div>
      </div>

      <div className="flex mt-12">
        {/* Sidebar */}
        <div className="bg-gray-800 text-white w-60 p-4 fixed left-0 h-screen overflow-y-auto z-10">
          <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
          <ul>
            <li className="mb-2">Users</li>
            <li className="mb-2">Services</li>
            <li className="mb-2">Sing In </li>
            <li className="mb-2">Sign Up</li>
            <li className="mb-2">Sign Out</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-grow p-8 ml-60 transition-all duration-300">
          <div className="grid grid-cols-1 gap-8">
            <div className="bg-white shadow-md rounded-lg p-4 overflow-x-auto mb-8">
              <h2 className="text-xl font-bold mb-4 text-center">Users</h2>
              <div className="max-h-96 overflow-y-auto">
                <table className="w-full border-collapse">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="p-2 border-b border-gray-300">Email</th>
                      <th className="p-2 border-b border-gray-300">First Name</th>
                      <th className="p-2 border-b border-gray-300">Last Name</th>
                      <th className="p-2 border-b border-gray-300">Profile Photo</th>
                      <th className="p-2 border-b border-gray-300">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map(user => (
                      <tr key={user._id} className="hover:bg-gray-100">
                        <td className="p-2 border-b border-gray-300">{user.email}</td>
                        <td className="p-2 border-b border-gray-300">{user.firstName}</td>
                        <td className="p-2 border-b border-gray-300">{user.lastName}</td>
                        <td className="p-2 border-b border-gray-300">
                          {user.profilePhoto ? (
                            <img
                              src={`http://localhost:3000/${user.profilePhoto}`}
                              alt="Profile"
                              className="w-12 h-12 rounded-full object-cover"
                              onError={(e) => { e.target.style.display = 'none'; }}
                            />
                          ) : (
                            <span>No Photo</span>
                          )}
                        </td>
                        <td className="p-2 border-b border-gray-300">
                          <button
                            onClick={() => handleDeleteUser(user._id)}
                            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 overflow-x-auto">
              <h2 className="text-xl font-bold mb-4 text-center">Booked Services</h2>
              <div className="max-h-96 overflow-y-auto">
                <table className="w-full border-collapse">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="p-2 border-b border-gray-300">Service ID</th>
                      <th className="p-2 border-b border-gray-300">Booked Service</th>
                      <th className="p-2 border-b border-gray-300">Price</th>
                      <th className="p-2 border-b border-gray-300">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {services.map(service => (
                      <tr key={service._id} className="hover:bg-gray-100">
                        <td className="p-2 border-b border-gray-300">{service._id}</td>
                        <td className="p-2 border-b border-gray-300">{service.name}</td>
                        <td className="p-2 border-b border-gray-300">{service.price}</td>
                        <td className="p-2 border-b border-gray-300">
                          <button
                            onClick={() => handleDeleteService(service._id)}
                            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none"
                          >
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
        </div>

        {/* Additional Sections */}
        <div className="flex flex-col w-96 ml-8">
          <div className="bg-white shadow-md rounded-lg p-4 mb-8">
            <h2 className="text-xl font-bold mb-4 text-center">Section 1</h2>
            {/* Content for Section 1 */}
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 mb-8">
            <h2 className="text-xl font-bold mb-4 text-center">Section 2</h2>
            {/* Content for Section 2 */}
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4 text-center">Section 3</h2>
            {/* Content for Section 3 */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
