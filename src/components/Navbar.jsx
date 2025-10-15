import React, { useState } from "react";
import { Link } from "react-router";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-b from-gray-900 to-black text-gray-300 px-9 py-6">
      <div className="flex justify-between items-center">
          
        <div className="text-3xl font-bold">
          <Link to="/">Apex Auto</Link> 
        </div>
  
            
        <ul className="hidden md:flex space-x-8 text-lg">
          <li><Link to="/" className="hover:text-gray-500 text-2xl p-5 m-2">Home</Link></li>
          <li><Link to="/products" className="hover:text-gray-500 text-2xl p-5 m-2">Products</Link></li>
          <li><Link to="/contact" className="hover:text-gray-500 text-2xl p-5 m-2">Contact</Link></li>
          <li><Link to="/about" className="hover:text-gray-500 text-2xl p-5 m-2">About</Link></li>
          <li><Link to="/report" className="hover:text-gray-500 text-2xl p-5 m-2">Report</Link></li>
        </ul>
        

        
    
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

    
      {isOpen && (
        <ul className="md:hidden mt-3 space-y-2 bg-gray-300 rounded-lg p-3">
          <li><Link to="/" className="block hover:text-gray-800 text-black">Home</Link></li>
          <li><Link to="/products" className="block hover:text-gray-800 text-black">Products</Link></li>
          <li><Link to="/contact" className="block hover:text-gray-800 text-black">Contact</Link></li>
          <li><Link to="/about" className="block hover:text-gray-800 text-black">About</Link></li>
          <li><Link to="/report" className="block hover:text-gray-800 text-black">Report</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
