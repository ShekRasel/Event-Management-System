import React from 'react';
import { useParams } from 'react-router-dom';

const photographers = [
  {
    id: 1,
    name: 'John Smith',
    specialty: 'Wedding Photography',
    location: 'New York City',
    image: 'https://via.placeholder.com/200',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in risus finibus, gravida quam sit amet, interdum ex. Nulla facilisi. Sed condimentum ex in lacinia vestibulum.',
    price: '$100 per hour'
  },
  {
    id: 2,
    name: 'Emily Johnson',
    specialty: 'Portrait Photography',
    location: 'Los Angeles',
    image: 'https://via.placeholder.com/200',
    description: 'Suspendisse potenti. Duis lacinia, velit a convallis scelerisque, urna elit lobortis lorem, at congue risus turpis eu elit. Duis faucibus rhoncus sapien.',
    price: '$120 per hour'
  },
  {
    id: 3,
    name: 'David Lee',
    specialty: 'Fashion Photography',
    location: 'London',
    image: 'https://via.placeholder.com/200'
  },
  {
    id: 4,
    name: 'Sophia Chen',
    specialty: 'Landscape Photography',
    location: 'Tokyo',
    image: 'https://via.placeholder.com/200'
  },
  {
    id: 5,
    name: 'Michael Brown',
    specialty: 'Event Photography',
    location: 'Paris',
    image: 'https://via.placeholder.com/200'
  },
  {
    id: 6,
    name: 'Emma White',
    specialty: 'Product Photography',
    location: 'Berlin',
    image: 'https://via.placeholder.com/200'
  },
  {
    id: 7,
    name: 'Daniel Garcia',
    specialty: 'Travel Photography',
    location: 'Sydney',
    image: 'https://via.placeholder.com/200'
  },
  {
    id: 8,
    name: 'Olivia Taylor',
    specialty: 'Street Photography',
    location: 'Toronto',
    image: 'https://via.placeholder.com/200'
  },
];

const PhotoDetailsPage = () => {
  const { id } = useParams();
  const photographer = photographers.find(photographer => photographer.id === parseInt(id));

  if (!photographer) {
    return <div>Photographer not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img className="w-full h-auto" src={photographer.image} alt={photographer.name} />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-2">{photographer.name}</h1>
          <p className="text-xl font-semibold mb-2">{photographer.specialty}</p>
          <p className="text-lg mb-2">{photographer.location}</p>
          <p className="text-lg mb-4">{photographer.price}</p>
          <p className="text-lg">{photographer.description}</p>
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">Pay Now</button>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsPage;
