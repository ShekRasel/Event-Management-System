import React, { useState } from 'react';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    nid: '',
    agencyName: '',
    agencyEmail: '',
    phoneNumber: '',
    servicesCategory: '',
    priceRating: '',
    businessCategory: '',
    address: '',
    photo1: null,
    photo2: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <div className="container mx-auto py-12 flex justify-center bg-slate-400">
      <div className="max-w-4xl w-full px-6 py-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">Add Product</h1>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="nid" className="block text-gray-700 font-bold mb-2">NID No</label>
              <input
                type="text"
                id="nid"
                name="nid"
                placeholder="NID Number"
                className="w-full py-3 px-4 border-2 border-gray-200 focus:outline-none focus:border-blue-500 rounded-lg"
                value={formData.nid}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="agencyName" className="block text-gray-700 font-bold mb-2">Agency Name</label>
              <input
                type="text"
                id="agencyName"
                name="agencyName"
                placeholder="Agency Name"
                className="w-full py-3 px-4 border-2 border-gray-200 focus:outline-none focus:border-blue-500 rounded-lg"
                value={formData.agencyName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="agencyEmail" className="block text-gray-700 font-bold mb-2">Agency Email</label>
              <input
                type="email"
                id="agencyEmail"
                name="agencyEmail"
                placeholder="Agency Email"
                className="w-full py-3 px-4 border-2 border-gray-200 focus:outline-none focus:border-blue-500 rounded-lg"
                value={formData.agencyEmail}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone Number"
                className="w-full py-3 px-4 border-2 border-gray-200 focus:outline-none focus:border-blue-500 rounded-lg"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="servicesCategory" className="block text-gray-700 font-bold mb-2">Services Category</label>
              <input
                type="text"
                id="servicesCategory"
                name="servicesCategory"
                placeholder="Services Category"
                className="w-full py-3 px-4 border-2 border-gray-200 focus:outline-none focus:border-blue-500 rounded-lg"
                value={formData.servicesCategory}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="priceRating" className="block text-gray-700 font-bold mb-2">Price Rating</label>
              <input
                type="text"
                id="priceRating"
                name="priceRating"
                placeholder="Price Rating"
                className="w-full py-3 px-4 border-2 border-gray-200 focus:outline-none focus:border-blue-500 rounded-lg"
                value={formData.priceRating}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="businessCategory" className="block text-gray-700 font-bold mb-2">Business Category</label>
              <input
                type="text"
                id="businessCategory"
                name="businessCategory"
                placeholder="Business Category"
                className="w-full py-3 px-4 border-2 border-gray-200 focus:outline-none focus:border-blue-500 rounded-lg"
                value={formData.businessCategory}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4 col-span-2">
              <label htmlFor="address" className="block text-gray-700 font-bold mb-2">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Address"
                className="w-full py-3 px-4 border-2 border-gray-200 focus:outline-none focus:border-blue-500 rounded-lg"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4 col-span-2">
              <label htmlFor="photo1" className="block text-gray-700 font-bold mb-2">Upload Your Events Photo</label>
              <input
                type="file"
                id="photo1"
                name="photo1"
                className="w-full py-3 px-4 border-2 border-gray-200 focus:outline-none focus:border-blue-500"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4 col-span-2">
              <label htmlFor="photo2" className="block text-gray-700 font-bold mb-2">Upload Your Business License</label>
              <input
                type="file"
                id="photo2"
                name="photo2"
                className="w-full py-3 px-4 border-2 border-gray-200 focus:outline-none focus:border-blue-500"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mb-4 col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
