import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const costumes = [
  {
    id: 1,
    name: 'White Toe hill and Bride beauty',
    category: 'Women',
    price: '2900.99 BDT',
    image: 'src/assets/services images/costume ceremony/main image.jpg',
    description: 'A beautiful bridal gown perfect for your special day.',
    images: [
      'src/assets/services images/costume ceremony/Sub1/images1.jpeg',
      'src/assets/services images/costume ceremony/Sub1/images2.jpeg',
      'src/assets/services images/costume ceremony/Sub1/images3.avif',
      'src/assets/services images/costume ceremony/Sub1/images4.avif',
      'src/assets/services images/costume ceremony/Sub1/images5.avif',
      'src/assets/services images/costume ceremony/Sub1/images6.avif'
    ]
  },
  {
    id: 2,
    name: 'Aesthetic Bridal Gown and Newyork Bride V',
    category: 'Women',
    price: '3559.99 BDT',
    image: 'src/assets/services images/costume ceremony/main1.avif',
    description: ' This could be a boutique or online retailer specializing in unique, trendsetting gowns. They might feature a curated selection from various designers known for their distinctive and fashion-forward aesthetic',
    images: [
      'src/assets/services images/costume ceremony/Sub2/images1.avif',
      'src/assets/services images/costume ceremony/Sub2/images2.avif',
      'src/assets/services images/costume ceremony/Sub2/images3.avif',
      'src/assets/services images/costume ceremony/Sub2/images4.avif',
      'src/assets/services images/costume ceremony/Sub2/images5.avif',
      'src/assets/services images/costume ceremony/Sub2/images6.avif'
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
      'src/assets/services images/costume ceremony/Sub3/images1.avif',
      'src/assets/services images/costume ceremony/Sub3/images2.avif',
      'src/assets/services images/costume ceremony/Sub3/images3.avif',
      'src/assets/services images/costume ceremony/Sub3/images4.avif',
      'src/assets/services images/costume ceremony/Sub3/images5.jpeg',
      'src/assets/services images/costume ceremony/Sub3/images6.jpeg'
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
      'src/assets/services images/costume ceremony/Sub4/images1.jpeg',
      'src/assets/services images/costume ceremony/Sub4/images2.jpeg',
      'src/assets/services images/costume ceremony/Sub4/images3.jpeg',
      'src/assets/services images/costume ceremony/Sub4/images4.jpeg',
      'src/assets/services images/costume ceremony/Sub4/images5.jpeg',
      'src/assets/services images/costume ceremony/Sub4/images6.jpeg'
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
      'src/assets/services images/costume ceremony/Sub5/images1.jpeg',
      'src/assets/services images/costume ceremony/Sub5/images2.webp',
      'src/assets/services images/costume ceremony/Sub5/images3.jpeg',
      'src/assets/services images/costume ceremony/Sub5/images4.jpeg',
      'src/assets/services images/costume ceremony/Sub5/images5.jpeg',
      'src/assets/services images/costume ceremony/Sub5/images6.webp'
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
      'src/assets/services images/costume ceremony/Sub6/images1.jpeg',
      'src/assets/services images/costume ceremony/Sub6/images2.jpeg',
      'src/assets/services images/costume ceremony/Sub6/images3.jpeg',
      'src/assets/services images/costume ceremony/Sub6/images4.webp',
      'src/assets/services images/costume ceremony/Sub6/images5.webp',
      'src/assets/services images/costume ceremony/Sub6/images6.webp'
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
      'src/assets/services images/costume ceremony/Sub7/images1.jpeg',
      'src/assets/services images/costume ceremony/Sub7/images2.webp',
      'src/assets/services images/costume ceremony/Sub7/images3.jpeg',
      'src/assets/services images/costume ceremony/Sub7/images4.jpeg',
      'src/assets/services images/costume ceremony/Sub7/images5.webp',
      'src/assets/services images/costume ceremony/Sub7/images6.jpeg'
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
      'src/assets/services images/costume ceremony/Sub8/images1.jpeg',
      'src/assets/services images/costume ceremony/Sub8/images2.jpeg',
      'src/assets/services images/costume ceremony/Sub8/images3.jpeg',
      'src/assets/services images/costume ceremony/Sub8/images4.jpeg',
      'src/assets/services images/costume ceremony/Sub8/images5.jpeg',
      'src/assets/services images/costume ceremony/Sub8/images6.jpeg'
    ]
  },
];

const CostumeDetailsPage = () => {
  const { id } = useParams();
  const [costume, setCostume] = useState(null);

  useEffect(() => {
    // Simulating asynchronous loading
    setTimeout(() => {
      const selectedCostume = costumes.find((c) => c.id === parseInt(id));
      setCostume(selectedCostume);
    }, 1000);
  }, [id]);

  if (!costume) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row items-start lg:items-start">
        <div className="lg:w-1/2 lg:max-h-screen lg:overflow-y-auto pr-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {costume.images.map((imgSrc, index) => (
              <img
                key={index}
                className="w-full h-auto object-contain"
                src={import.meta.env.BASE_URL + imgSrc}
                alt={`${costume.name} image ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 lg:pl-8 lg:sticky lg:top-0">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h1 className="text-4xl font-semibold italic text-stone-400 mb-4">{costume.name}</h1>
            <p className="text-xl text-gray-700 mb-4">{costume.description}</p>
            <p className="text-2xl font-bold text-gray-800 mb-4">{costume.price}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostumeDetailsPage;
