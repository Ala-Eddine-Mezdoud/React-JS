import React from 'react';

export const Card = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <img className="w-full h-48 object-cover" src="https://via.placeholder.com/400x200" alt="Card image" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-900">Card Title</h2>
        <p className="mt-2 text-gray-600">
          This is a simple description text for the card. It gives an overview of what the card is about.
        </p>
        <div className="mt-4">
          <button className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-500 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};
