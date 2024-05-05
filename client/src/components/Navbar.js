import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from '../assets/home.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="p-4 relative" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'left', width: '100%' }}>
        <ul className="flex justify-end gap-6">
          <li>
            <Link to="/" className="text-black font-bold">Home</Link>
          </li>
          <li>
            <Link to="/services" className="text-black font-bold">Services</Link>
          </li>
          <li>
            <Link to="/about" className="text-black font-bold">About</Link>
          </li>
          <li>
            <Link to="/contact" className="text-black font-bold">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
