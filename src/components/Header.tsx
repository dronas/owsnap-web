"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import LanguageToggle from './LanguageToggle';

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground p-4 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <Link to="/" className="text-3xl font-bold mb-2 md:mb-0">
          Owsnap Photobooth Rental
        </Link>
        <nav className="flex items-center space-x-4">
          <Link to="/" className="hover:underline text-lg">
            Home
          </Link>
          <Link to="/book" className="hover:underline text-lg">
            Book Now
          </Link>
          <LanguageToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;