import React, { useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const venues = [
  {
    id: 1,
    name: 'Garden Paradise',
    type: 'Outdoor 🌳',
    price: '30000.00 BDT',
    image: 'src/assets/services images/venue res and food/pic1.avif',
    description: 'A beautiful garden venue perfect for outdoor weddings and events.',
    images: [
      'src/assets/services images/venue res and food/Sub1/image1.jpeg',
      'src/assets/services images/venue res and food/Sub1/image2.jpeg',
      'src/assets/services images/venue res and food/Sub1/image3.jpeg',
      'src/assets/services images/venue res and food/Sub1/image4.jpeg',
      'src/assets/services images/venue res and food/Sub1/image5.jpeg',
      'src/assets/services images/venue res and food/Sub1/image6.jpeg'
    ]
  },
  {
    id: 2,
    name: 'Grand Ballroom',
    type: 'Indoor 🏰',
    price: '35000.00 BDT',
    image: 'src/assets/services images/venue res and food/pic2.avif',
    description: 'An elegant indoor ballroom ideal for grand occasions and ceremonies.',
    images: [
      'src/assets/services images/venue res and food/Sub2/image1.jpeg',
      'src/assets/services images/venue res and food/Sub2/image2.jpeg',
      'src/assets/services images/venue res and food/Sub2/image3.jpeg',
      'src/assets/services images/venue res and food/Sub2/image4.jpeg',
      'src/assets/services images/venue res and food/Sub2/image5.jpeg',
      'src/assets/services images/venue res and food/Sub2/image6.jpeg'
    ]
  },
  {
    id: 3,
    name: 'Rooftop Lounge',
    type: 'Open-Air 🌇',
    price: '70000.00 BDT',
    image: 'src/assets/services images/venue res and food/pic3.avif',
    description: 'A stunning rooftop lounge with panoramic views of the city.',
    images: [
      'src/assets/services images/venue res and food/Sub3/image1.jpeg',
      'src/assets/services images/venue res and food/Sub3/image2.webp',
      'src/assets/services images/venue res and food/Sub3/image3.webp',
      'src/assets/services images/venue res and food/Sub3/image4.jpeg',
      'src/assets/services images/venue res and food/Sub3/image5.jpeg',
      'src/assets/services images/venue res and food/Sub3/image6.jpeg'
    ]
  },
  {
    id: 4,
    name: 'Starlight Plaza',
    type: 'Beachfront 🏖️',
    price: '90000.00 BDT',
    image: 'src/assets/services images/venue res and food/pic4.avif',
    description: 'A picturesque beachfront venue perfect for romantic beach weddings.',
    images: [
      'src/assets/services images/venue res and food/Sub4/image1.jpeg',
      'src/assets/services images/venue res and food/Sub4/image2.jpeg',
      'src/assets/services images/venue res and food/Sub4/image3.jpeg',
      'src/assets/services images/venue res and food/Sub4/image4.jpeg',
      'src/assets/services images/venue res and food/Sub4/image5.jpeg',
      'src/assets/services images/venue res and food/Sub4/image6.jpeg'
    ]
  },
  {
    id: 5,
    name: 'Seaside Villa',
    type: 'Outdoor 🌳',
    price: '83000.00 BDT',
    image: 'src/assets/services images/venue res and food/pic5.avif',
    description: 'A charming villa by the sea, ideal for intimate outdoor events.',
    images: [
      'src/assets/services images/venue res and food/Sub5/image1.jpeg',
      'src/assets/services images/venue res and food/Sub5/image2.jpeg',
      'src/assets/services images/venue res and food/Sub5/image3.jpeg',
      'src/assets/services images/venue res and food/Sub5/image4.jpeg',
      'src/assets/services images/venue res and food/Sub5/image5.jpeg',
      'src/assets/services images/venue res and food/Sub5/image6.jpeg'
    ]
  },
  {
    id: 6,
    name: 'Sapphire Sky Convention Center',
    type: 'Indoor 🏰',
    price: '50300.00 BDT',
    image: 'src/assets/services images/venue res and food/pic6.avif',
    description: 'Another elegant indoor ballroom for luxurious events.',
    images: [
      'src/assets/services images/venue res and food/Sub6/image1.jpeg',
      'src/assets/services images/venue res and food/Sub6/image2.webp',
      'src/assets/services images/venue res and food/Sub6/image3.jpeg',
      'src/assets/services images/venue res and food/Sub6/image4.jpeg',
      'src/assets/services images/venue res and food/Sub6/image5.webp',
      'src/assets/services images/venue res and food/Sub6/image6.jpeg'
    ]
  },
  {
    id: 7,
    name: 'The Grand Oak Manor',
    type: 'Open-Air 🌇',
    price: '93500.00 BDT',
    image: 'src/assets/services images/venue res and food/pic7.avif',
    description: 'An open-air rooftop venue with stunning views and ambiance.',
    images: [
      'src/assets/services images/venue res and food/Sub7/image1.jpeg',
      'src/assets/services images/venue res and food/Sub7/image2.jpeg',
      'src/assets/services images/venue res and food/Sub7/image3.jpeg',
      'src/assets/services images/venue res and food/Sub7/image4.jpeg',
      'src/assets/services images/venue res and food/Sub7/image5.jpeg',
      'src/assets/services images/venue res and food/Sub7/image6.jpeg'
    ]
  },
  {
    id: 8,
    name: 'The Crystal Ballroom',
    type: 'Beachfront 🏖️',
    price: '65300.00 BDT',
    image: 'src/assets/services images/venue res and food/pic8.avif',
    description: 'A luxurious beachfront ballroom for unforgettable events.',
    images: [
      'src/assets/services images/venue res and food/Sub8/image1.jpeg',
      'src/assets/services images/venue res and food/Sub8/image2.jpeg',
      'src/assets/services images/venue res and food/Sub8/image3.jpeg',
      'src/assets/services images/venue res and food/Sub8/image4.jpeg',
      'src/assets/services images/venue res and food/Sub8/image5.jpeg',
      'src/assets/services images/venue res and food/Sub8/image6.jpeg'
    ]
  }
];

const VenueDetailsPage = () => {
  const { id } = useParams();
  const [venue, setVenue] = useState(null);
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    // Simulating asynchronous loading
    setTimeout(() => {
      const selectedVenue = venues.find((v) => v.id === parseInt(id));
      setVenue(selectedVenue);
    }, 1000);
  }, [id]);

  const handleBookNow = () => {
    if (!isLoggedIn) {
      // Redirect to sign-in page if not logged in
      window.location.href = '/signin'; // Update the path as per your routes
      return;
    }
    
    const existingServices = JSON.parse(localStorage.getItem('services')) || [];
    const newServices = [...existingServices, { eventName: venue.name, price: venue.price }];
    localStorage.setItem('services', JSON.stringify(newServices));
    window.location.href = "/Orders";
  };

  if (!venue) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row items-start lg:items-start">
        <div className="lg:w-1/2 lg:max-h-screen lg:overflow-y-auto pr-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {venue.images.map((imgSrc, index) => (
              <img
                key={index}
                className="w-full h-auto object-contain"
                src={import.meta.env.BASE_URL + imgSrc}
                alt={`${venue.name} image ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 lg:pl-8 lg:sticky lg:top-0">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h1 className="text-4xl font-bold mb-4">{venue.name} {venue.type}</h1>
            <p className="text-xl text-gray-700 mb-4">{venue.description}</p>
            <p className="text-2xl font-bold text-gray-800 mb-4">{venue.price}</p>
            <button 
              onClick={handleBookNow}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueDetailsPage;
