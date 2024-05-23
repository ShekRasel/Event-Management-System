import React from 'react';
import { Link } from 'react-router-dom';

const makeups = [
  {
    id: 1,
    name: 'BlissFul Unions Parlor',
    emoji: '💖',
    price: '70000 BDT',
    image: 'src/assets/services images/Makeup and Decoration/pic4.jpg'
  },
  {
    id: 2,
    name: 'Harmony Haven Weddings',
    emoji: '💖',
    price: '50000 BDT',
    image: 'src/assets/services images/Makeup and Decoration/pic1.jpg'
  },
  {
    id: 3,
    name: 'Beauty queen',
    emoji: '💖',
    price: '80000 BDT',
    image: 'src/assets/services images/Makeup and Decoration/pic2.jpg'
  },
  {
    id: 4,
    name: 'Makeup Around',
    emoji: '💖',
    price: '10000 BDT',
    image: 'src/assets/services images/Makeup and Decoration/pic3.jpeg'
  }
];

const MakeupPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4">Makeup Artists Collection</h1>
      <p className="text-xl text-center mb-8">Explore our collections from different reputed brands</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        {makeups.map((makeup) => (
          <Link key={makeup.id} to={`/makeups/${makeup.id}`} className="hover:no-underline">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-lg">
              <img className="w-full h-64 object-cover" src={makeup.image} alt={makeup.name} />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{makeup.name} {makeup.emoji}</h2>
                <p className="text-lg font-bold">{makeup.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MakeupPage;
