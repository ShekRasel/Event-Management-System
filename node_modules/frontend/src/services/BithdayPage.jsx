import React from 'react';
import { Link } from 'react-router-dom';

const birthdays = [
  {
    id: 1,
    name: 'Dreamland Celebrations',
    emoji: '🎉',
    price: '25000 BDT',
    image: 'src/assets/services images/Birthday/pic1.avif'
  },
  {
    id: 2,
    name: 'Joyful Parties',
    emoji: '🎉',
    price: '15000 BDT',
    image: 'src/assets/services images/Birthday/pic2.avif'
  },
  {
    id: 3,
    name: 'Birthday Bash',
    emoji: '🎉',
    price: '20000 BDT',
    image: 'src/assets/services images/Birthday/pic3.avif'
  },
  {
    id: 4,
    name: 'Party Time',
    emoji: '🎉',
    price: '18000 BDT',
    image: 'src/assets/services images/Birthday/pic4.avif'
  }
];

const BirthdayPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4">Birthday Party Packages</h1>
      <p className="text-xl text-center mb-8">Explore our exciting birthday party packages for a memorable celebration</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        {birthdays.map((birthday) => (
          <Link key={birthday.id} to={`/birthdays/${birthday.id}`} className="hover:no-underline">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-lg">
              <img className="w-full h-64 object-cover" src={birthday.image} alt={birthday.name} />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{birthday.name} {birthday.emoji}</h2>
                <p className="text-lg font-bold">{birthday.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BirthdayPage;
