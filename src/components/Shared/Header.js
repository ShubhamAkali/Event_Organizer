import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Event Organizer</Link>
        <nav>
          <Link to="/" className="ml-4">Home</Link>
          <Link to="/about" className="ml-4">About</Link>
          <Link to="/contact" className="ml-4">Contact</Link>
          <Link to="/login" className="ml-4">Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
