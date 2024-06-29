import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

const offices = [
  {
    id: 1,
    name: 'Executive Office Setup',
    category: 'Office',
    price: '20000 BDT',
    image: 'src/assets/services images/office/main1.jpg',
    description: 'A complete executive office setup including furniture, decor, and organization solutions.',
    images: [
      'src/assets/services images/office/sub1/image1.avif',
      'src/assets/services images/office/sub1/image2.avif',
      'src/assets/services images/office/sub1/image3.avif',
      'src/assets/services images/office/sub1/image4.avif',
      'src/assets/services images/office/sub1/image5.avif',
      'src/assets/services images/office/sub1/image6.avif'
    ]
  },
  {
    id: 2,
    name: 'Tech Startup Office',
    category: 'Office',
    price: '15000 BDT',
    image: 'src/assets/services images/office/main2.jpg',
    description: 'A modern office setup ideal for tech startups with open spaces and innovative furniture.',
    images: [
      'src/assets/services images/office/sub2/image1.avif',
      'src/assets/services images/office/sub2/image2.avif',
      'src/assets/services images/office/sub2/image3.avif',
      'src/assets/services images/office/sub2/image4.avif',
      'src/assets/services images/office/sub2/image5.avif',
      'src/assets/services images/office/sub2/image6.avif'
    ]
  },
  {
    id: 3,
    name: 'Creative Workspace',
    category: 'Office',
    price: '18000 BDT',
    image: 'src/assets/services images/office/main3.jpg',
    description: 'A vibrant and dynamic workspace setup designed for creative teams.',
    images: [
      'src/assets/services images/office/sub3/image1.avif',
      'src/assets/services images/office/sub3/image2.avif',
      'src/assets/services images/office/sub3/image3.avif',
      'src/assets/services images/office/sub3/image4.avif',
      'src/assets/services images/office/sub3/image5.avif',
      'src/assets/services images/office/sub3/image6.avif'
    ]
  },
  {
    id: 4,
    name: 'Corporate Office Design',
    category: 'Office',
    price: '25000 BDT',
    image: 'src/assets/services images/office/main4.jpg',
    description: 'A professional and sleek office design for corporate environments.',
    images: [
      'src/assets/services images/office/sub4/image1.avif',
      'src/assets/services images/office/sub4/image2.avif',
      'src/assets/services images/office/sub4/image3.avif',
      'src/assets/services images/office/sub4/image4.avif',
      'src/assets/services images/office/sub4/image5.avif',
      'src/assets/services images/office/sub4/image6.avif'
    ]
  },
];

const OfficeDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [office, setOffice] = useState(null);
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    setTimeout(() => {
      const selectedOffice = offices.find((o) => o.id === parseInt(id));
      setOffice(selectedOffice);
    }, 1000);
  }, [id]);

  const handleBookNow = async () => {
    if (!isLoggedIn) {
      navigate('/signin');
      return;
    }

    try {
      const userId = localStorage.getItem('userId');
      const token = localStorage.getItem('token');

      if (!token) {
        console.error('Token is undefined');
        return; // Handle missing token scenario
      }

      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/services`, {
        name: office.name,
        price: office.price,
        bookedBy: userId
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      // Redirect to Orders page
      navigate('/orders');
    } catch (error) {
      console.error('Error booking service:', error);
      // Display an error message to the user (e.g., using Toast notifications)
    }
  };

  if (!office) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row items-start lg:items-start">
        <div className="lg:w-1/2 lg:max-h-screen lg:overflow-y-auto pr-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {office.images.map((imgSrc, index) => (
              <img
                key={index}
                className="w-full h-auto object-contain"
                src={import.meta.env.BASE_URL + imgSrc}
                alt={`${office.name} image ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 lg:pl-8 lg:sticky lg:top-0">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h1 className="text-4xl font-semibold italic text-stone-400 mb-4">{office.name}</h1>
            <p className="text-xl text-gray-700 mb-4">{office.description}</p>
            <p className="text-2xl font-bold text-gray-800 mb-4">{office.price}</p>
            <button
              onClick={handleBookNow}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeDetailsPage;
