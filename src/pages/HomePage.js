import React from 'react';
import MainLayout from '../components/Layout/MainLayout';
import Carousel from '../components/Carousel';

const HomePage = () => {
  return (
    <MainLayout>
      <Carousel />
      <div className="text-center px-2 md:px-4 lg:px-8">
        <h1 className="text-2xl md:text-2.5xl lg:text-3xl font-bold mb-4 md:mb-6">
          Welcome to Our Event Management App
        </h1>
        <p className="text-base md:text-lg lg:text-xl leading-relaxed font-medium text-gray-700 mx-auto">
          Welcome to Event Organizer, your ultimate solution for seamless event planning and management. Whether you’re arranging a birthday party, a wedding, or a corporate seminar, our application simplifies the entire process. With Event Organizer, customers can easily browse and book events, vendors can manage orders efficiently, and admins can oversee the website effortlessly. Our platform ensures secure payment processing, real-time notifications, and customizable themes, making event management hassle-free and enjoyable. Let Event Organizer help you create memorable events with ease. Start planning your perfect event today!
        </p>
      </div>
    </MainLayout>
  );
};

export default HomePage;
