import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
const makeups = [
  {
    id: 1,
    name: 'BlissFul Unions Parlor',
    emoji: '💖',
    price: '70000 BDT',
    image: 'src/assets/services images/Makeup and Decoration/pic4.jpg',
    description: 'Expert bridal makeup for your special day, ensuring you look flawless and stunning.',
    images: [
      'src/assets/services images/Makeup and Decoration/Sub1/image1.jpeg',
      'src/assets/services images/Makeup and Decoration/Sub1/image2.jpeg',
      'src/assets/services images/Makeup and Decoration/Sub1/image3.jpeg',
      'src/assets/services images/Makeup and Decoration/Sub1/image4.jpeg',
      'src/assets/services images/Makeup and Decoration/Sub1/image5.webp',
      'src/assets/services images/Makeup and Decoration/Sub1/image6.jpeg'
    ]
  },
  {
    id: 2,
    name: 'Harmony Haven Weddings',
    emoji: '💖',
    price: '50000 BDT',
    image: 'src/assets/services images/Makeup and Decoration/pic1.jpg',
    description: 'Professional makeup services that create a harmonious and beautiful look for weddings.',
    images: [
      'src/assets/services images/Makeup and Decoration/Sub2/image1.webp',
      'src/assets/services images/Makeup and Decoration/Sub2/image2.jpeg',
      'src/assets/services images/Makeup and Decoration/Sub2/image3.jpeg',
      'src/assets/services images/Makeup and Decoration/Sub2/image4.jpeg',
      'src/assets/services images/Makeup and Decoration/Sub2/image5.jpeg',
      'src/assets/services images/Makeup and Decoration/Sub2/image6.webp'
    ]
  },
  {
    id: 3,
    name: 'Beauty queen',
    emoji: '💖',
    price: '80000 BDT',
    image: 'src/assets/services images/Makeup and Decoration/pic2.jpg',
    description: 'Top-notch beauty services that crown you as the queen of the event.',
    images: [
      'src/assets/services images/Makeup and Decoration/Sub3/image1.jpeg',
      'src/assets/services images/Makeup and Decoration/Sub3/image2.webp',
      'src/assets/services images/Makeup and Decoration/Sub3/image3.jpeg',
      'src/assets/services images/Makeup and Decoration/Sub3/image4.webp',
      'src/assets/services images/Makeup and Decoration/Sub3/image5.jpeg',
      'src/assets/services images/Makeup and Decoration/Sub3/image6.jpeg'
    ]
  },
  {
    id: 4,
    name: 'Makeup Around',
    emoji: '💖',
    price: '10000 BDT',
    image: 'src/assets/services images/Makeup and Decoration/pic3.jpeg',
    description: 'Affordable and high-quality makeup services for all your special occasions.',
    images: [
      'src/assets/services images/Makeup and Decoration/Sub4/image1.jpeg',
      'src/assets/services images/Makeup and Decoration/Sub4/image2.jpeg',
      'src/assets/services images/Makeup and Decoration/Sub4/image3.jpeg',
      'src/assets/services images/Makeup and Decoration/Sub4/image4.jpeg',
      'src/assets/services images/Makeup and Decoration/Sub4/image5.jpeg',
      'src/assets/services images/Makeup and Decoration/Sub4/image6.jpeg'
    ]
  }
];

const MakeupDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [makeup, setMakeup] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const selectedMakeup = makeups.find((m) => m.id === parseInt(id));
      setMakeup(selectedMakeup);
    }, 1000);
  }, [id]);

  const handleBookNow = async () => {
    if (!userLoggedIn) {
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
        name: makeup.name,
        price: makeup.price,
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

  if (!makeup) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row items-start lg:items-start">
        <div className="lg:w-1/2 lg:max-h-screen lg:overflow-y-auto pr-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {makeup.images.map((imgSrc, index) => (
              <img
                key={index}
                className="w-full h-auto object-contain"
                src={import.meta.env.BASE_URL + imgSrc}
                alt={`${makeup.name} image ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 lg:pl-8 lg:sticky lg:top-0">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h1 className="text-4xl font-semibold italic text-stone-400 mb-4">{makeup.name} {makeup.emoji}</h1>
            <p className="text-xl text-gray-700 mb-4">{makeup.description}</p>
            <p className="text-2xl font-bold text-gray-800 mb-4">{makeup.price}</p>
            <button onClick={handleBookNow} className="bg-blue-500 text-white px-4 py-2 rounded-lg">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeupDetailsPage;
