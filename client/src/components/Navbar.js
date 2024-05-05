// import React from "react";
// import { Link } from "react-router-dom";
// import backgroundImage from '../assets/home.png';

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <nav className="p-4 relative" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'left', width: '100%' }}>
//         <ul className="flex justify-end gap-6">
//           <li>
//             <Link to="/" className="text-black font-bold">Home</Link>
//           </li>
//           <li>
//             <Link to="/services" className="text-black font-bold">Services</Link>
//           </li>
//           <li>
//             <Link to="/about" className="text-black font-bold">About</Link>
//           </li>
//           <li>
//             <Link to="/contact" className="text-black font-bold">Contact</Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-white font-semibold text-lg">Logo</span>
        <button className="text-white text-xl md:hidden" onClick={toggleNavbar}>
          {isOpen ? 'Close' : 'Menu'}
        </button>
        <ul className={`md:flex md:items-center space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
          <li><Link to="/home" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Home</Link></li>
          <li><Link to="/about" className="text-white hover:bg-gray-700 px-3 py-2 rounded">About</Link></li>
          <li><Link to="/services" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Services</Link></li>
          <li><Link to="/contact" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

