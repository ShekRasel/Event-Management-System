import React from 'react';
import { Link } from 'react-router-dom';

const photographers = [
  {
    id: 1,
    name: 'LensCrafted Perspective',
    price: '7000 BDT',
    emoji: '❤️',
    image: 'src/assets/services images/photographer/pic1.jpeg'
  },
  {
    id: 2,
    name: 'StellarShots Collective',
    price: '5000 BDT',
    emoji: '❤️',
    image: 'src/assets/services images/photographer/pic8.jpg'
  },
  {
    id: 3,
    name: 'FocusFrame Creations',
    price: '4500 BDT',
    emoji: '❤️',
    image: 'src/assets/services images/photographer/pic2.jpg'
  },
  {
    id: 4,
    name: 'Ecliptic Moments Photography',
    price: '3500 BDT',
    emoji: '❤️',
    image: 'src/assets/services images/photographer/pic3.jpg'
  },
  {
    id: 5,
    name: 'ChromaClick Creative',
    price: '3000 BDT',
    emoji: '❤️',
    image: 'src/assets/services images/photographer/pic4.jpeg'
  },
  {
    id: 6,
    name: 'FrameFiesta Photography',
    price: '6000 BDT',
    emoji: '❤️',
    image: 'src/assets/services images/photographer/pic5.jpg'
  },
  {
    id: 7,
    name: 'LensCrafted Perspectives',
    price: '5000 BDT',
    emoji: '❤️',
    image: 'src/assets/services images/photographer/pic6.jpg'
  },
  {
    id: 8,
    name: 'Creative Click',
    price: '4000 BDT',
    emoji: '❤️',
    image: 'src/assets/services images/photographer/pic7.jpg'
  },
];

const PhotographerPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4">Photographers</h1>
      <p className="text-xl text-center mb-8">Discover talented photographers from around the world</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {photographers.map((photographer) => (
          <Link key={photographer.id} to={`/photographers/${photographer.id}`} className="hover:no-underline">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-lg">
              <img className="w-full h-48 object-cover" src={photographer.image} alt={photographer.name} />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{photographer.name}</h2>
                <p className="text-gray-600 mb-2">{photographer.emoji}</p> {/* Love emoji */}
                <p className="text-gray-600 mb-2">{photographer.price}</p> {/* Price */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PhotographerPage;

