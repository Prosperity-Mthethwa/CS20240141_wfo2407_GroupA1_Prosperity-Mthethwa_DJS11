import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleResetHistory = () => {
    navigate('/');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-purple-800 py-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <svg
            width="40"
            height="40"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="48" stroke="white" strokeWidth="4" />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              fill="white"
              fontSize="48"
              fontWeight="bold"
              dy=".3em"
            >
              P
            </text>
          </svg>
          <h1 className="text-white text-2xl font-bold ml-2">PodCasTAR</h1>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Links (Initially Hidden on Smaller Screens) */}
        <nav
          className={`${isMenuOpen ? 'flex' : 'hidden'
            } md:flex flex-col md:flex-row md:items-center absolute md:static top-full md:top-auto left-0 w-full md:w-auto bg-blue-500 md:bg-transparent z-10`}
        >
          <NavLink
            to="/"
            exact
            className="text-white hover:text-black font-bold px-4 py-2 rounded-md mx-2 hover:bg-yellow-200 transition duration-300"
            activeClassName="bg-yellow-400"
          >
            Home
          </NavLink>
          <NavLink
            to="/favorites"
            className="text-white hover:text-black font-bold px-4 py-2 rounded-md mx-2 hover:bg-yellow-200 transition duration-300"
            activeClassName="bg-yellow-400"
          >
            Favorites
          </NavLink>
          <NavLink
            to="/contact"
            className="text-white hover:text-black font-bold px-4 py-2 rounded-md mx-2 hover:bg-yellow-200 transition duration-300"
            activeClassName="bg-yellow-400"
          >
            Contact
          </NavLink>
          <button
            className="text-white font-bold mb-2 px-4 py-2 rounded-md mx-2 bg-transparent border border-white hover:bg-white hover:text-purple-800 focus:outline-none transition duration-300"
            onClick={handleResetHistory}
          >
            LogOut
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
