import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const photographers = [
  {
    id: 1,
    name: 'LensCrafted Perspective',
    price: '7000 BDT',
    emoji: '❤️',
    image: 'src/assets/services images/photographer/pic1.jpeg',
    description: 'Capturing moments with a crafted lens, ensuring each shot tells a story.',
    images: [
      'src/assets/services images/photographer/Sub1/image1.jpeg',
      'src/assets/services images/photographer/Sub1/image2.jpeg',
      'src/assets/services images/photographer/Sub1/image3.webp',
      'src/assets/services images/photographer/Sub1/image4.jpeg',
      'src/assets/services images/photographer/Sub1/image5.jpeg',
      'src/assets/services images/photographer/Sub1/image6.jpeg',
    ]
  },
  {
    id: 2,
    name: 'StellarShots Collective',
    price: '5000 BDT',
    emoji: '❤️',
    image: 'src/assets/services images/photographer/pic8.jpg',
    description: 'A collective of photographers dedicated to capturing stellar shots.',
    images: [
      'src/assets/services images/photographer/Sub2/image1.webp',
      'src/assets/services images/photographer/Sub2/image2.jpeg',
      'src/assets/services images/photographer/Sub2/image3.webp',
      'src/assets/services images/photographer/Sub2/image4.webp',
      'src/assets/services images/photographer/Sub2/image5.webp',
      'src/assets/services images/photographer/Sub2/image6.webp',
    ]
  },
  {
    id: 3,
    name: 'FocusFrame Creations',
    price: '4500 BDT',
    emoji: '❤️',
    image: 'src/assets/services images/photographer/pic2.jpg',
    description: 'Focused on framing your precious moments with creativity and precision.',
    images: [
      'src/assets/services images/photographer/Sub3/image1.webp',
      'src/assets/services images/photographer/Sub3/image2.jpeg',
      'src/assets/services images/photographer/Sub3/image3.jpeg',
      'src/assets/services images/photographer/Sub3/image4.jpeg',
      'src/assets/services images/photographer/Sub3/image5.jpeg',
      'src/assets/services images/photographer/Sub3/image6.jpeg',
    ]
  },
  {
    id: 4,
    name: 'Ecliptic Moments Photography',
    price: '3500 BDT',
    emoji: '❤️',
    image: 'src/assets/services images/photographer/pic3.jpg',
    description: 'Specializing in capturing moments that are out of this world.',
    images: [
      'src/assets/services images/photographer/Sub4/image1.webp',
      'src/assets/services images/photographer/Sub4/image2.webp',
      'src/assets/services images/photographer/Sub4/image3.jpeg',
      'src/assets/services images/photographer/Sub4/image4.jpeg',
      'src/assets/services images/photographer/Sub4/image5.jpeg',
      'src/assets/services images/photographer/Sub4/image6.jpeg',
    ]
  },
  {
    id: 5,
    name: 'ChromaClick Creative',
    price: '3000 BDT',
    emoji: '❤️',
    image: 'src/assets/services images/photographer/pic4.jpeg',
    description: 'Bringing vibrant colors and creativity to every click.',
    images: [
      'src/assets/services images/photographer/Sub5/image1.webp',
      'src/assets/services images/photographer/Sub5/image2.jpeg',
      'src/assets/services images/photographer/Sub5/image3.jpeg',
      'src/assets/services images/photographer/Sub5/image4.jpeg',
      'src/assets/services images/photographer/Sub5/image5.jpeg',
      'src/assets/services images/photographer/Sub5/image6.jpeg',
    ]
  },
  {
    id: 6,
    name: 'FrameFiesta Photography',
    price: '6000 BDT',
    emoji: '❤️',
    image: 'src/assets/services images/photographer/pic5.jpg',
    description: 'A celebration of moments captured through the lens.',
    images: [
      'src/assets/services images/photographer/Sub6/image1.jpeg',
      'src/assets/services images/photographer/Sub6/image2.webp',
      'src/assets/services images/photographer/Sub6/image3.jpeg',
      'src/assets/services images/photographer/Sub6/image4.jpeg',
      'src/assets/services images/photographer/Sub6/image5.jpeg',
      'src/assets/services images/photographer/Sub6/image6.jpeg',
    ]
  },
  {
    id: 7,
    name: 'LensCrafted Perspectives',
    price: '5000 BDT',
    emoji: '❤️',
    image: 'src/assets/services images/photographer/pic6.jpg',
    description: 'Another perspective from the LensCrafted team, capturing unique stories.',
    images: [
      'src/assets/services images/photographer/Sub7/image1.webp',
      'src/assets/services images/photographer/Sub7/image2.jpeg',
      'src/assets/services images/photographer/Sub7/image3.webp',
      'src/assets/services images/photographer/Sub7/image4.jpeg',
      'src/assets/services images/photographer/Sub7/image5.jpeg',
      'src/assets/services images/photographer/Sub7/image6.jpeg',
    ]
  },
  {
    id: 8,
    name: 'Creative Click',
    price: '4000 BDT',
    emoji: '❤️',
    image: 'src/assets/services images/photographer/pic7.jpg',
    description: 'Creative and imaginative photography for every occasion.',
    images: [
      'src/assets/services images/photographer/Sub8/image1.jpeg',
      'src/assets/services images/photographer/Sub8/image2.jpeg',
      'src/assets/services images/photographer/Sub8/image3.jpeg',
      'src/assets/services images/photographer/Sub8/image4.jpeg',
      'src/assets/services images/photographer/Sub8/image5.jpeg',
      'src/assets/services images/photographer/Sub8/image6.jpeg',
    ]
  }
];


const PhotoDetailsPage = () => {
  const { id } = useParams();
  const [photographer, setPhotographer] = useState(null);

  useEffect(() => {
    // Simulating asynchronous loading
    setTimeout(() => {
      const selectedPhotographer = photographers.find((p) => p.id === parseInt(id));
      setPhotographer(selectedPhotographer);
    }, 1000);
  }, [id]);

  if (!photographer) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row items-start lg:items-start">
        <div className="lg:w-1/2 lg:max-h-screen lg:overflow-y-auto pr-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {photographer.images.map((imgSrc, index) => (
              <img
                key={index}
                className="w-full h-auto object-contain"
                src={import.meta.env.BASE_URL + imgSrc}
                alt={`${photographer.name} image ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 lg:pl-8 lg:sticky lg:top-0">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h1 className="text-4xl font-semibold italic text-stone-400 mb-4">{photographer.name} {photographer.emoji}</h1>
            <p className="text-xl text-gray-700 mb-4">{photographer.description}</p>
            <p className="text-2xl font-bold text-gray-800 mb-4">{photographer.price}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Hire Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsPage;
