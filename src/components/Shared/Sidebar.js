import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ links }) => {
  return (
    <aside className="bg-gray-800 text-white w-64 p-4">
      <nav>
        {links.map((link, index) => (
          <Link key={index} to={link.path} className="block py-2 px-4 hover:bg-gray-700">
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
