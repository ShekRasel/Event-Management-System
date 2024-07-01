import React from 'react';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    image: 'src/assets/services images/ceremony.avif',
    title: 'Ceremony Costume',
    description: 'We offer a range of clothing options for various events. You can conveniently purchase suits, Panjabi attire, bridal sarees, and other essentials from us based on your event preferences, especially for weddings and similar occasions.',
    link: '/costume'
  },
  {
    image: 'src/assets/services images/photography.avif',
    title: 'Photographer',
    description: 'We provide professional photographers who can capture and document your event. You can easily find photographers based on your location and hire them for your photography needs.',
    link: '/photographer'
  },
  {
    image: 'src/assets/services images/makeup.avif',
    title: 'Makeup and Decoration planing',
    description: 'We offer the services of experienced makeup artists and event decorators who will transform your event venue into a stunning setting. Our team will skillfully apply makeup to give your guests an attractive appearance.',
    link: '/makeup'
  },
  {
    image: 'src/assets/services images/venue food.avif',
    title: 'Venue Reservation and food',
    description: 'We offer delightful event venues that are perfectly suited to host your event and create lasting memories. Additionally, we provide exceptional food services to complement the occasion.',
    link: '/venue'
  },
  {
    image: 'src/assets/services images/birthday.avif',
    title: 'Birthday Party',
    description: 'We provide complete birthday party planning services, including decorations, entertainment, and catering, to make your birthday celebration unforgettable.',
    link: '/birthday'
  },
  {
    image: 'src/assets/services images/office.avif',
    title: 'Office Organizing',
    description: 'Our office organizing services help you plan and execute corporate events and meetings, ensuring a professional and seamless experience.',
    link: '/office'
  }
];

const Service = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-5xl font-bold mb-4 text-center text-blue-700 italic">
        Streamline Your Event Planning with <br /> Our Comprehensive Services
      </h1>
      <p className="mb-8 font-semibold text-lg text-center text-blue-500">
        From Venues to Vendors: Get Everything You Need for Your Next Event Here
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-md"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-auto max-h-96 object-cover transition-transform duration-300 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center transition-opacity duration-300 bg-transparent group-hover:bg-black group-hover:bg-opacity-65">
              <h1 className="text-slate-200 italic text-2xl sm:text-3xl  font-bold mt-12 transition-all duration-300" style={{ color: 'white' }}>
                {service.title}
              </h1>
              <div className="flex flex-col items-center transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-4">
                <p className="text-white font-bold mb-4 px-8 text-center">{service.description}</p>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-8 font-semibold rounded-md"
                  onClick={() => navigate(service.link)}
                >
                  More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
