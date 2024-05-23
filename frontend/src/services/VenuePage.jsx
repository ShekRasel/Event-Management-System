import React from 'react';
import { Link } from 'react-router-dom';

const venues = [
  {
    id: 1,
    name: 'Garden Paradise',
    type: 'Outdoor 🌳',
    price: '30000.00 BDT',
    image: 'src/assets/services images/venue res and food/pic1.avif'
  },
  {
    id: 2,
    name: 'Grand Ballroom',
    type: 'Indoor 🏰',
    price: '23000.00 BDT',
    image: 'src/assets/services images/venue res and food/pic2.avif'
  },
  {
    id: 3,
    name: 'Rooftop Lounge',
    type: 'Open-Air 🌇',
    price: '154400.00 BDT',
    image: 'src/assets/services images/venue res and food/pic3.avif'
  },
  {
    id: 4,
    name: 'Starlight Plaza',
    type: 'Beachfront 🏖️',
    price: '254400.00 BDT',
    image: 'src/assets/services images/venue res and food/pic4.avif'
  },
  {
    id: 5,
    name: 'Seaside Villa',
    type: 'Outdoor 🌳',
    price: '13000.00 BDT',
    image: 'src/assets/services images/venue res and food/pic5.avif'
  },
  {
    id: 6,
    name: 'Grand Ballroom',
    type: 'Indoor 🏰',
    price: '20300.00 BDT',
    image: 'src/assets/services images/venue res and food/pic6.avif'
  },
  {
    id: 7,
    name: 'Rooftop Lounge',
    type: 'Open-Air 🌇',
    price: '13500.00 BDT',
    image: 'src/assets/services images/venue res and food/pic7.avif'
  },
  {
    id: 8,
    name: 'The Crystal Ballroom',
    type: 'Beachfront 🏖️',
    price: '25300.00 BDT',
    image: 'src/assets/services images/venue res and food/pic8.avif'
  }
];

const VenuePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4">Venue Reservation</h1>
      <p className="text-xl text-center mb-8">Explore our stunning venues for your special occasion</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {venues.map((venue) => (
          <Link key={venue.id} to={`/venues/${venue.id}`} className="hover:no-underline">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-lg">
              <div className="overflow-hidden">
                <img className="w-full h-64 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110" src={venue.image} alt={venue.name} />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{venue.name}</h2>
                <p className="text-gray-600 mb-2">{venue.type}</p>
                <p className="text-lg font-bold">{venue.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VenuePage;
