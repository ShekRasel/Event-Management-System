import React from 'react';
import { Link } from 'react-router-dom';

const costumes = [
  {
    id: 1,
    name: 'White Toe hill and Bride beauty',
    category: 'Women',
    price: '2900.99 BDT',
    image: 'src/assets/services images/costume ceremony/main image.jpg',
    description: 'A beautiful bridal gown perfect for your special day.',
    images: [
      'src/assets/services images/costume ceremony/main image.jpg',
      'src/assets/services images/costume ceremony/additional1.jpg',
      'src/assets/services images/costume ceremony/additional2.jpg'
    ]
  },
  {
    id: 2,
    name: 'Aesthetic Bridal Gown and Newyork Bride V',
    category: 'Women',
    price: '3559.99 BDT',
    image: 'src/assets/services images/costume ceremony/main1.avif',
    description: 'An aesthetic bridal gown for the modern bride.',
    images: [
      'src/assets/services images/costume ceremony/main1.avif',
      'src/assets/services images/costume ceremony/additional3.jpg',
      'src/assets/services images/costume ceremony/additional4.jpg'
    ]
  },
  {
    id: 3,
    name: 'Stylish Sherwani and Panjabi Arong',
    category: 'Men',
    price: '3999.99 BDT',
    image: 'src/assets/services images/costume ceremony/main2.jpg',
    description: 'Stylish Sherwani perfect for traditional ceremonies.',
    images: [
      'src/assets/services images/costume ceremony/main2.jpg',
      'src/assets/services images/costume ceremony/additional5.jpg',
      'src/assets/services images/costume ceremony/additional6.jpg'
    ]
  },
  {
    id: 4,
    name: 'Wheat Indian Sherwani and Asus',
    category: 'Men',
    price: '4444.99 BDT',
    image: 'src/assets/services images/costume ceremony/main3.jpg',
    description: 'A classic Indian Sherwani in a wheat color.',
    images: [
      'src/assets/services images/costume ceremony/main3.jpg',
      'src/assets/services images/costume ceremony/additional7.jpg',
      'src/assets/services images/costume ceremony/additional8.jpg'
    ]
  },
  {
    id: 5,
    name: 'Bridal Suits',
    category: 'Men',
    price: '8000.99 BDT',
    image: 'src/assets/services images/costume ceremony/main4.jpg',
    description: 'Elegant bridal suits for a sophisticated look.',
    images: [
      'src/assets/services images/costume ceremony/main4.jpg',
      'src/assets/services images/costume ceremony/additional9.jpg',
      'src/assets/services images/costume ceremony/additional10.jpg'
    ]
  },
  {
    id: 6,
    name: 'Women Lovely',
    category: 'Women',
    price: '8888.99 BDT',
    image: 'src/assets/services images/costume ceremony/main5.jpg',
    description: 'Lovely dress for women, perfect for special occasions.',
    images: [
      'src/assets/services images/costume ceremony/main5.jpg',
      'src/assets/services images/costume ceremony/additional11.jpg',
      'src/assets/services images/costume ceremony/additional12.jpg'
    ]
  },
  {
    id: 7,
    name: 'Women new stylist Dress',
    category: 'Women',
    price: '4000.99 BDT',
    image: 'src/assets/services images/costume ceremony/main6.jpg',
    description: 'New stylist dress for women, modern and trendy.',
    images: [
      'src/assets/services images/costume ceremony/main6.jpg',
      'src/assets/services images/costume ceremony/additional13.jpg',
      'src/assets/services images/costume ceremony/additional14.jpg'
    ]
  },
  {
    id: 8,
    name: 'Slylist Jacket',
    category: 'Men',
    price: '5555.99 BDT',
    image: 'src/assets/services images/costume ceremony/main7.jpg',
    description: 'A stylish jacket for men, perfect for casual and formal events.',
    images: [
      'src/assets/services images/costume ceremony/main7.jpg',
      'src/assets/services images/costume ceremony/additional15.jpg',
      'src/assets/services images/costume ceremony/additional16.jpg'
    ]
  },
];

const CostumePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4">Costumes Collection</h1>
      <p className="text-xl text-center mb-8">Explore our collections from different reputed brands</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {costumes.map((costume) => (
          <Link key={costume.id} to={`/costumes/${costume.id}`} className="hover:no-underline">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-lg">
              <img className="w-full h-64 object-cover" src={costume.image} alt={costume.name} />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{costume.name}</h2>
                <p className="text-gray-600 mb-2">{costume.category}</p>
                <p className="text-lg font-bold">{costume.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CostumePage;
