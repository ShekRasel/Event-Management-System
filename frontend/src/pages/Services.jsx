import React from 'react';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    image: 'src/assets/services images/ceremony.avif',
    title: 'Ceremony Costume',
    description: 'We offer a range of clothing options for various events. You can conveniently purchase suits, Panjabi attire, bridal sarees, and other essentials from us based on your event preferences, especially for weddings and similar occasions.',
    link: '/costume' // Updated link for the first service
  },
  {
    image: 'src/assets/services images/photography.avif',
    title: 'Photographer',
    description: 'We provide professional photographers who can capture and document your event. You can easily find photographers based on your location and hire them for your photography needs.',
    link: '/photographer' // Updated link for the second service
  },
  {
    image: 'src/assets/services images/makeup.avif',
    title: 'Makeup and Decoration planing',
    description: 'We offer the services of experienced makeup artists and event decorators who will transform your event venue into a stunning setting. Our team will skillfully apply makeup to give your guests an attractive appearance. They are dedicated to creating a visually appealing atmosphere and ensuring a memorable experience for all attendees.',
    link: '/makeup' // Updated link for the third service
  },
  {
    image: 'src/assets/services images/venue food.avif',
    title: 'Venue Reservation and food',
    description: 'We offer delightful event venues that are perfectly suited to host your event and create lasting memories. Additionally, we provide exceptional food services to complement the occasion.',
    link: '/food' // Updated link for the fourth service
  }
];

const Service = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-5xl font-bold mb-4 text-center text-blue-500 italic">
        Streamline Your Event Planning with <br /> Our Comprehensive Services
      </h1>
      <p className="mb-8 font-semibold text-lg text-center text-blue-400">
        From Venues to Vendors: Get Everything You Need for Your Next Event Here
      </p>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {/* First Row */}
        <div className="grid grid-cols-1 gap-8">
          {services.slice(0, 2).map((service, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-md"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-auto max-h-96 object-cover transition-transform duration-300 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg bg-black bg-opacity-75">
                <h1 className="text-white text-xl mb-2 transition-colors duration-300 group-hover:text-gray-200" style={{ color: 'rgb(36,145,184,255)' }}>{service.title}</h1>
                <p className="text-white font-bold mb-4 text-center">{service.description}</p>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition duration-300"
                  onClick={() => navigate(service.link)}
                >
                  More
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Second Row */}
        <div className="grid grid-cols-1 gap-8">
          {services.slice(2, 4).map((service, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-md"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-auto max-h-96 object-cover transition-transform duration-300 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg bg-black bg-opacity-75">
                <h1 className="text-white text-xl mb-2 transition-colors duration-300 group-hover:text-gray-200" style={{ color: 'rgb(36,145,184,255)' }}>{service.title}</h1>
                <p className="text-white font-bold mb-4 text-center">{service.description}</p>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition duration-300"
                  onClick={() => navigate(service.link)}
                >
                  More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
