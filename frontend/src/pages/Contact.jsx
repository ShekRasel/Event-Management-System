import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto py-12 flex justify-center">
      <div className="max-w-xl w-full px-6 py-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">Office Address</h2>
            <p className="text-gray-700 mb-4">
              123 Main Street<br />
              City, State, ZIP Code<br />
              Country
            </p>
            <h2 className="text-xl md:text-2xl font-bold mb-2">Phone</h2>
            <p className="text-gray-700 mb-4">123-456-7890</p>
            <h2 className="text-xl md:text-2xl font-bold mb-2">Email</h2>
            <p className="text-gray-700 mb-4">info@example.com</p>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">Business Hours</h2>
            <p className="text-gray-700 mb-4">
              Monday - Friday: 9:00 AM - 5:00 PM<br />
              Saturday: 10:00 AM - 3:00 PM<br />
              Sunday: Closed
            </p>
            <h2 className="text-xl md:text-2xl font-bold mb-2">Social Media</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Facebook: <a href="https://www.facebook.com/example" className="underline">Example</a></li>
              <li>Twitter: <a href="https://www.twitter.com/example" className="underline">Example</a></li>
              <li>Instagram: <a href="https://www.instagram.com/example" className="underline">Example</a></li>
            </ul>
          </div>
        </div>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mt-12 mb-4">Send us a Message</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full py-2 px-4 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full py-2 px-4 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
            <textarea id="message" name="message" rows="4" className="w-full py-2 px-4 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-500" required></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
