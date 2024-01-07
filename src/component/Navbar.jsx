import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // You can replace these icons with your preferred library

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-primary p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold text-xl">Varun</div>
          <div className="md:hidden">
            {/* Hamburger menu for mobile */}
            <button
              className="text-white"
              onClick={toggleMenu}
            >
              {showMenu ? <FiX size={24} /> : <FiMenu size={24} />} {/* Toggle between menu and close icon */}
            </button>
          </div>
          <ul className={`md:flex space-x-14 ${showMenu ? 'block' : 'hidden'} md:block`}>
            <li>
              <Link to="/" className="text-white hover:text-gray-300">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-gray-300">About</Link>
            </li>
            <li>
              <Link to="/services" className="text-white hover:text-gray-300">Services</Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
            </li>
            <li>
              <Link to="/signup" className="text-white hover:text-gray-300">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
