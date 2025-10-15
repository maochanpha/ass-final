import React, { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-black text-white px-6 py-4 shadow-lg fixed w-full top-0 z-50">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">
          Apex<span className="text-blue-500">Auto</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          <li><Link to="/" className="hover:text-white transition">Home</Link></li>
          <li><Link to="/products" className="hover:text-white transition">Products</Link></li>
          <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
          <li><Link to="/about" className="hover:text-white transition">About</Link></li>
          <li><Link to="/report" className="hover:text-white transition">Report</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl focus:outline-none text-gray-200 hover:text-white transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Slide Menu */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              className="fixed top-0 left-0 w-64 h-full bg-gray-900 text-white z-50 p-6 shadow-lg"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">
                  Menu
                </h2>
                <HiX
                  className="text-2xl cursor-pointer hover:text-blue-400"
                  onClick={() => setIsOpen(false)}
                />
              </div>

              <ul className="space-y-4">
                <li><Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-blue-400 transition">Home</Link></li>
                <li><Link to="/products" onClick={() => setIsOpen(false)} className="block hover:text-blue-400 transition">Products</Link></li>
                <li><Link to="/contact" onClick={() => setIsOpen(false)} className="block hover:text-blue-400 transition">Contact</Link></li>
                <li><Link to="/about" onClick={() => setIsOpen(false)} className="block hover:text-blue-400 transition">About</Link></li>
                <li><Link to="/report" onClick={() => setIsOpen(false)} className="block hover:text-blue-400 transition">Report</Link></li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
