import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Link to="/" className="flex items-center space-x-3 text-2xl font-bold">
  <img src="/logo.svg" alt="Rights Into Reality" className="h-9 w-auto" />
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
