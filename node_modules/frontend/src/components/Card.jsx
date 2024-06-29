import React, { useState, useEffect } from 'react';

const quotes = [
  // Add your array of quote objects here
  { text: "I don't believe that if you do good, good things will happen. Everything is completely accidental and random. Sometimes bad things happen to very good people and sometimes good things happen to bad people. But at least if you try to do good things, then you're spending your time doing something worthwhile.", author: 'Helen Mirren'},
  { text: "An Internet meme is a hijacking of the original idea. Instead of mutating by random change and spreading by a form of Darwinian selection, Internet memes are altered deliberately by human creativity. There is no attempt at accuracy of copying, as with genes - and as with memes in their original version.", author: 'Richard Dawkins' },
  { text: "Life just doesn't care about our aspirations, or sadness. It's often random, and it's often stupid and it's often completely unexpected, and the closures and the epiphanies and revelations we end up receiving from life, begrudgingly, rarely turn out to be the ones we thought.", author: 'Khaled Hosseini' },
];

const images = [
  // Add your array of image URLs here
  'https://example.com/image1.jpg',
  'https://example.com/image2.jpg',
  // ... add more image URLs
];

function Card() {
  const [currentQuote, setCurrentQuote] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);

    const intervalId = setInterval(() => {
      const nextIndex = (currentIndex + 1) % quotes.length;
      setCurrentIndex(nextIndex);
      setCurrentQuote(quotes[nextIndex]);
    }, 3000); // Adjust interval for desired slide duration (in milliseconds)

    return () => clearInterval(intervalId); // Cleanup function to clear interval on unmount
  }, []);

  return (
    <div className="card-container flex justify-center items-center h-screen">
      <div className="card relative overflow-hidden rounded-lg shadow-md animation">
        {currentQuote && (
          <>
            <img src={images[currentIndex]} alt="Quote background" className="card-image w-full h-full object-cover opacity-30" />
            <div className="card-content absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 py-8">
              <p className="card-text text-xl font-bold mb-4">{currentQuote.text}</p>
              <p className="card-author text-sm font-italic">- {currentQuote.author}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Card;
