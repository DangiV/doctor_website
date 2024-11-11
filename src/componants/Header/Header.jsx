import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import img1 from '/images/nishi1.png';
import './Header.css'

function Header() {
  // State to toggle the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-teal-600 p-2">
      <div className="container-fluid  mx-auto flex justify-between items-center p-1">
        {/* Logo and brand */}
        <NavLink to="/" className="flex items-center ">
          <img src={img1} alt="Family Dental Care Logo" className="w-7 h-7" />
          <div className='ps-2 head'>
            <h1 className="text-lg md:text-xl font-bold text-white">NEK Dental Care</h1>
            <p>Dentistry,Orthodontics and Aesthetic Center</p>
          </div>
        </NavLink>

        {/* Hamburger menu for mobile */}
        <button
          className={`lg:hidden text-white focus:outline-none ${isMenuOpen ? 'hidden' : 'block'}`}
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`lg:flex items-center  space-x-6 ${isMenuOpen ? 'nav_main_parent ' : 'hidden'} lg:block responsivenav`}
        >
          {isMenuOpen && <p class="closeicon" onClick={() => setIsMenuOpen(false)}>X</p>}

          <NavLink to="/" className="nav_link" onClick={() => setIsMenuOpen(false)}>Home</NavLink>

          <NavLink to="/About" className="nav_link" onClick={() => setIsMenuOpen(false)}>About</NavLink>

          <NavLink to="/Contact" className="nav_link" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>

          <NavLink to="/Services" className="nav_link" onClick={() => setIsMenuOpen(false)}>Services</NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
