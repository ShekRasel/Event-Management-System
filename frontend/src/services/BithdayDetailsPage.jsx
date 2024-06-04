import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

const birthdays = [
  {
    id: 1,
    name: 'Princess Party Package',
    category: 'Kids',
    price: '5000 BDT',
    image: 'src/assets/services images/birthday/main1.jpg',
    description: 'A magical princess-themed party package perfect for your little one.',
    images: [
      'src/assets/services images/birthday/sub1/image1.avif',
      'src/assets/services images/birthday/sub1/image2.avif',
      'src/assets/services images/birthday/sub1/image3.avif',
      'src/assets/services images/birthday/sub1/image4.avif',
      'src/assets/services images/birthday/sub1/image5.avif',
      'src/assets/services images/birthday/sub1/image6.avif'
    ]
  },
  {
    id: 2,
    name: 'Superhero Adventure Party',
    category: 'Kids',
    price: '6000 BDT',
    image: 'src/assets/services images/birthday/main2.jpg',
    description: 'An action-packed superhero-themed party package for your little heroes.',
    images: [
      'src/assets/services images/birthday/sub2/image1.avif',
      'src/assets/services images/birthday/sub2/image2.avif',
      'src/assets/services images/birthday/sub2/image3.avif',
      'src/assets/services images/birthday/sub2/image4.avif',
      'src/assets/services images/birthday/sub2/image5.avif',
      'src/assets/services images/birthday/sub2/image6.avif'
    ]
  },
  {
    id: 3,
    name: 'Jungle Safari Party',
    category: 'Kids',
    price: '5500 BDT',
    image: 'src/assets/services images/birthday/main3.jpg',
    description: 'A wild jungle safari-themed party package for an adventurous celebration.',
    images: [
      'src/assets/services images/birthday/sub3/image1.avif',
      'src/assets/services images/birthday/sub3/image2.avif',
      'src/assets/services images/birthday/sub3/image3.avif',
      'src/assets/services images/birthday/sub3/image4.avif',
      'src/assets/services images/birthday/sub3/image5.avif',
      'src/assets/services images/birthday/sub3/image6.avif'
    ]
  },
  {
    id: 4,
    name: 'Under the Sea Party',
    category: 'Kids',
    price: '5800 BDT',
    image: 'src/assets/services images/birthday/main4.jpg',
    description: 'An enchanting under-the-sea-themed party package for an unforgettable birthday.',
    images: [
      'src/assets/services images/birthday/sub4/image1.avif',
      'src/assets/services images/birthday/sub4/image2.avif',
      'src/assets/services images/birthday/sub4/image3.avif',
      'src/assets/services images/birthday/sub4/image4.avif',
      'src/assets/services images/birthday/sub4/image5.avif',
      'src/assets/services images/birthday/sub4/image6.avif'
    ]
  },
];

const BirthdayDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [birthday, setBirthday] = useState(null);
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    setTimeout(() => {
      const selectedBirthday = birthdays.find((b) => b.id === parseInt(id));
      setBirthday(selectedBirthday);
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

      await axios.post('http://localhost:3000/api/services', {
        name: birthday.name,
        price: birthday.price,
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

  if (!birthday) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row items-start lg:items-start">
        <div className="lg:w-1/2 lg:max-h-screen lg:overflow-y-auto pr-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {birthday.images.map((imgSrc, index) => (
              <img
                key={index}
                className="w-full h-auto object-contain"
                src={import.meta.env.BASE_URL + imgSrc}
                alt={`${birthday.name} image ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 lg:pl-8 lg:sticky lg:top-0">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h1 className="text-4xl font-semibold italic text-stone-400 mb-4">{birthday.name}</h1>
            <p className="text-xl text-gray-700 mb-4">{birthday.description}</p>
            <p className="text-2xl font-bold text-gray-800 mb-4">{birthday.price}</p>
            <button
              onClick={handleBookNow}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthdayDetailsPage;
