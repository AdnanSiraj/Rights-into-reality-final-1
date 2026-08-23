import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-semibold">Rights Into Reality</h3>
            <p className="text-amber-300">
              Turning Rights into Reality
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-amber-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-300 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-amber-300 transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/sdgs" className="hover:text-amber-300 transition-colors">
                  SDGs
                </Link>
              </li>
              <li>
                <Link to="/get-involved" className="hover:text-amber-300 transition-colors">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-lg font-semibold">Contact Us</h4>
            <p className="space-y-1">
              Upper Swat, Khyber Pakhtunkhwa, Pakistan
            </p>
            <p className="space-y-1">
              email: info@rightsintoreality.org
            </p>
            <p className="space-y-1">
              phone: +92 123 4567890
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-lg font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-amber-300 transition-colors">
                {/* Facebook icon */}
                <span aria-label="Facebook">📘</span>
              </a>
              <a href="#" className="hover:text-amber-300 transition-colors">
                {/* Twitter icon */}
                <span aria-label="Twitter">🐦</span>
              </a>
              <a href="#" className="hover:text-amber-300 transition-colors">
                {/* Instagram icon */}
                <span aria-label="Instagram">📸</span>
              </a>
              <a href="#" className="hover:text-amber-300 transition-colors">
                {/* LinkedIn icon */}
                <span aria-label="LinkedIn">💼</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-navy-800 text-center text-sm text-amber-400">
          &copy; {new Date().getFullYear()} Rights Into Reality Organization. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
