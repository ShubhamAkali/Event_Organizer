// src/pages/SeminarsPage.js
import React from 'react';
import Button from '../components/UI/Button';

const images = [
  '/assets/images/seminar1.jpg',
  '/assets/images/seminar2.jpg',
  // Add more image paths here
];

const SeminarsPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-6">Seminar Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img src={image} alt={`Seminar ${index + 1}`} className="w-full h-full object-cover" />
            <Button className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              Book This Event
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeminarsPage;
