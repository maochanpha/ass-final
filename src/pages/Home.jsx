import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white mt-20 overflow-hidden">
      {/* Hero Banner */}
      <div className="relative w-full h-[520px] rounded-lg overflow-hidden shadow-lg">
        {/* Background Image */}
        <img
          src="/car/banner.png"
          alt="Car Banner"
          className="w-full h-full object-cover opacity-80"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

        {/* Overlay text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex flex-col items-center justify-center px-4"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Drive Your <span className="text-blue-500">Dream Car</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-200">
            Discover top-performance cars that fit your lifestyle and budget — only at{" "}
            <span className="font-semibold text-white">Apex Auto</span>.
          </p>
          <Link
            to="/products"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold transition transform hover:scale-105"
          >
            Shop Now
          </Link>
        </motion.div>
      </div>

      
    </div>
  );
}
