import React from 'react';
import { Link } from 'react-router-dom';

const offices = [
  {
    id: 1,
    name: 'Corporate Bliss',
    emoji: '🏢',
    price: '45000 BDT',
    image: 'src/assets/services images/Office/pic1.avif'
  },
  {
    id: 2,
    name: 'Executive Events',
    emoji: '🏢',
    price: '55000 BDT',
    image: 'src/assets/services images/Office/pic2.avif'
  },
  {
    id: 3,
    name: 'Office Gala',
    emoji: '🏢',
    price: '60000 BDT',
    image: 'src/assets/services images/Office/pic3.avif'
  },
  {
    id: 4,
    name: 'Business Bash',
    emoji: '🏢',
    price: '70000 BDT',
    image: 'src/assets/services images/Office/pic4.avif'
  }
];

const OfficePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4">Office Event Packages</h1>
      <p className="text-xl text-center mb-8">Explore our exclusive office event packages to organize your corporate events</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        {offices.map((office) => (
          <Link key={office.id} to={`/offices/${office.id}`} className="hover:no-underline">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-lg">
              <img className="w-full h-64 object-cover" src={office.image} alt={office.name} />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{office.name} {office.emoji}</h2>
                <p className="text-lg font-bold">{office.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OfficePage;
