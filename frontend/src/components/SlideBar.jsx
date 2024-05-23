import React, { useState, useEffect } from 'react';

// Sample data for quotes
const quotesData = [
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
    profilePic: "https://via.placeholder.com/150",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
    profilePic: "https://via.placeholder.com/150",
  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs",
    profilePic: "https://via.placeholder.com/150",
  },
  {
    quote: "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt",
    profilePic: "https://via.placeholder.com/150",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
    profilePic: "https://via.placeholder.com/150",
  },
];

const SlideBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to generate random quote index
  const generateRandomIndex = () => {
    return Math.floor(Math.random() * quotesData.length);
  };

  // Function to handle sliding effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotesData.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden w-full">
      <div className="flex absolute top-0 left-0 transition-transform duration-1000" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {quotesData.map((quote, index) => (
          <div key={index} className="w-full flex-shrink-0 p-4">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-gray-800 text-lg mb-4">{quote.quote}</p>
              <div className="flex items-center">
                <img src={quote.profilePic} alt="Profile" className="w-10 h-10 rounded-full mr-3" />
                <div>
                  <p className="text-gray-600 font-medium">{quote.author}</p>
                  <p className="text-gray-500 text-sm">Author</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlideBar;
