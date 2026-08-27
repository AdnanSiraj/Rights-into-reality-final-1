import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programs' },
  { to: '/activities', label: 'Activities' },
  { to: '/sdgs', label: 'SDGs' },
  { to: '/get-involved', label: 'Get Involved' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-navy-900 text-white p-4 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 text-2xl font-bold" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="Rights Into Reality logo" className="h-10 w-auto" />
          <span className="text-amber-400">RIR</span>
          <span className="hidden sm:inline">Rights Into Reality</span>
        </Link>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-4">
          {links.map(({ to, label }) => (
            <Link key={to} to={to} className="hover:text-amber-300 transition-colors">
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile links */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col space-y-3 max-w-7xl mx-auto">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="hover:text-amber-300 transition-colors"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
