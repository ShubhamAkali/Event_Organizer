// src/Shared/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-blue-600 text-white">
      <div className="flex items-center justify-between p-4 md:p-6">
        <Link to="/" className="flex items-center text-3xl md:text-4xl lg:text-5xl font-bold">
          <img 
            src="/assets/images/logo1.jpg" 
            alt="Logo" 
            className="w-16 h-16 md:w-20 md:h-20 mr-4 md:mr-6 object-cover" 
          />
          <span>Event Organizer</span>
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <nav className="hidden md:flex md:items-center text-lg md:text-xl lg:text-3xl font-medium">
          <Link to="/" className="ml-4 md:ml-6 hover:text-gray-300">Home</Link>
          <Link to="/events" className="ml-4 md:ml-6 hover:text-gray-300">Our Events</Link>
          <Link to="/about" className="ml-4 md:ml-6 hover:text-gray-300">About</Link>
          <Link to="/contact" className="ml-4 md:ml-6 hover:text-gray-300">Contact</Link>
          <Link to="/login" className="ml-4 md:ml-6 hover:text-gray-300">Login</Link>
          <Link to="/register" className="ml-4 md:ml-6 hover:text-gray-300">Register</Link>
        </nav>
      </div>
      {/* Vertical menu for smaller screens */}
      <nav className={`flex-col md:hidden ${isOpen ? 'flex' : 'hidden'}`}>
        <Link to="/" className="p-4 hover:bg-blue-700" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/events" className="p-4 hover:bg-blue-700" onClick={() => setIsOpen(false)}>Our Events</Link>
        <Link to="/about" className="p-4 hover:bg-blue-700" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/contact" className="p-4 hover:bg-blue-700" onClick={() => setIsOpen(false)}>Contact</Link>
        <Link to="/login" className="p-4 hover:bg-blue-700" onClick={() => setIsOpen(false)}>Login</Link>
        <Link to="/register" className="p-4 hover:bg-blue-700" onClick={() => setIsOpen(false)}>Register</Link>
      </nav>
    </header>
  );
};

export default Header;
