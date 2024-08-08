// src/pages/EventsPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Shared/Footer';
import Header from '../components/Shared/Header';

const EventsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-4">
        <div className="flex flex-wrap -mx-2">
          <Link to="/events/birthdays" className="w-full md:w-1/2 px-2 mb-4">
            <div className="relative w-full h-100vh">
              <img src="/assets/images/event5.webp" alt="Birthdays" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-3xl font-bold">Birthdays</div>
            </div>
          </Link>
          <Link to="/events/seminars" className="w-full md:w-1/2 px-2 mb-4">
            <div className="relative w-full h-100vh">
              <img src="/assets/images/event6.webp" alt="Seminars" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-3xl font-bold">Seminars</div>
            </div>
          </Link>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <div className="relative w-full h-96">
              <img src="/assets/images/event7.jpeg" alt="Weddings" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-3xl font-bold">Weddings - Coming Soon</div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <div className="relative w-full h-96">
              <img src="/assets/images/event8.jpeg" alt="Concerts" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-3xl font-bold">Concerts - Coming Soon</div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EventsPage;
