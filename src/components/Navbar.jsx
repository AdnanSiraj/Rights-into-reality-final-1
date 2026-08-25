import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-navy-900 text-white p-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 text-2xl font-bold">
          <img src="/logo.png" alt="Rights Into Reality logo" className="h-10 w-auto" />
          <span className="text-amber-400">RIR</span>
          <span>Rights Into Reality</span>
        </Link>
        <div className="flex space-x-4">
          <Link to="/about" className="hover:text-amber-300 transition-colors">
            About
          </Link>
          <Link to="/programs" className="hover:text-amber-300 transition-colors">
            Programs
          </Link>
          <Link to="/sdgs" className="hover:text-amber-300 transition-colors">
            SDGs
          </Link>
          <Link to="/get-involved" className="hover:text-amber-300 transition-colors">
            Get Involved
          </Link>
          <Link to="/contact" className="hover:text-amber-300 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
