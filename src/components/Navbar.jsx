import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Report", path: "/report" },
  ];

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed w-full top-0 z-50 bg-gradient-to-r from-gray-900 to-black text-white px-9 py-5 shadow-2xl backdrop-blur-sm"
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
          className="text-2xl font-bold tracking-wide"
        >
          Car<span className="text-blue-500">Dealership</span>
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-gray-300">
          {links.map((link) => (
            <li key={link.name} className="relative group">
              <Link
                to={link.path}
                className={`hover:text-white transition text-2xl ${
                  location.pathname === link.path
                    ? "text-blue-500 font-bold"
                    : ""
                }`}
              >
                {link.name}
              </Link>

              {/* Dropdown for Products */}
              {link.name === "Products" && (
                <ul className="absolute top-full left-0 bg-gray-800 text-white p-4 mt-2 hidden group-hover:block rounded shadow-lg z-10">
                  <li>
                    <Link
                      to="/products/limited"
                      className="block py-1 px-2 hover:text-blue-400"
                    >
                      Limited Edition
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products/Premium"
                      className="block py-1 px-2 hover:text-blue-400"
                    >
                      Premium Car
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products/Retro"
                      className="block py-1 px-2 hover:text-blue-400"
                    >
                      Retro Car
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl focus:outline-none  text-gray-200 hover:text-white transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Overlay & Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 50 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-30"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              className="fixed top-0 left-0 w-72 h-[100vh] 
                   bg-gradient-to-b from-blue-900 via-gray-900 to-black
                   text-white z-50 shadow-2xl border-r border-blue-800/40"
            >
              {/* Header */}
              <div className="flex justify-between items-center px-5 py-4 border-b border-gray-700/50">
                <h2 className="text-xl font-semibold">Menu</h2>
                <HiX
                  className="text-2xl cursor-pointer hover:text-blue-400 transition"
                  onClick={() => setIsOpen(false)}
                />
              </div>

              {/* Menu Links */}
              <motion.ul
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.1 } },
                }}
                className="mt-1 rounded-b-xl bg-gradient-to-b from-gray-900 via-black to-gray-950 
             border-t border-peach-500/30 shadow-inner 
             max-lg:pb-96 backdrop-blur-sm"
              >
                {links.map((link) => (
                  <motion.li
                    key={link.name}
                    variants={{
                      hidden: { x: -40, opacity: 0 },
                      visible: { x: 0, opacity: 1 },
                    }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center w-full px-5 py-3 text-base font-medium
                            hover:bg-blue-700/30 rounded-r-full transition-all duration-200
                            ${
                              location.pathname === link.path
                                ? "text-blue-400 font-semibold bg-blue-900/30 border-l-4 border-blue-400"
                                : "text-gray-300"
                            }`}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
