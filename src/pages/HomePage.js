// src/pages/HomePage.js
import React from 'react';
import MainLayout from '../components/Layout/MainLayout';
import Carousel from '../components/Carousel';

const HomePage = () => {
  return (
    <MainLayout>
      <Carousel />
      <div className="text-center px-4 md:px-8 lg:px-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12">
          Welcome to Our Event Management Appssss
        </h1>
        <p className="text-lg md:text-xl lg:text-3xl leading-relaxed font-medium text-gray-700 mx-auto">
          Welcome to Event Organizer, your ultimate solution for seamless event planning and management. Whether you’re arranging a birthday party, a wedding, or a corporate seminar, our application simplifies the entire process. With Event Organizer, customers can easily browse and book events, vendors can manage orders efficiently, and admins can oversee the website effortlessly. Our platform ensures secure payment processing, real-time notifications, and customizable themes, making event management hassle-free and enjoyable. Let Event Organizer help you create memorable events with ease. Start planning your perfect event today!
        </p>
      </div>
    </MainLayout>
  );
};

export default HomePage;
