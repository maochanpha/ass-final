import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

export default function Premium() {
  const [search, setSearch] = useState("");

  const premiumCars = [
    {
      name: "Bugatti Chiron Pur Sport",
      img: "/car/bugati.png",
      year: 2024,
      fuel: "Petrol",
      km: "1,200 km",
      price: "$3,500,000",
      desc: "Ultra-exclusive hypercar delivering unmatched speed and luxury.",
    },
    {
      name: "McLaren Speedtail",
      img: "/car/mclaren.png",
      year: 2023,
      fuel: "Hybrid",
      km: "800 km",
      price: "$2,200,000",
      desc: "A futuristic hybrid hyper-GT with extreme performance and design.",
    },
    {
      name: "Aston Martin Valkyrie",
      img: "/car/aston.png",
      year: 2024,
      fuel: "Hybrid",
      km: "500 km",
      price: "$3,000,000",
      desc: "Track-focused hypercar combining F1 technology with road legality.",
    },
  ];

  const filteredCars = premiumCars.filter((car) =>
    car.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
<div className="bg-gradient-to-b from-gray-900 via-yellow-900 to-black min-h-screen text-white px-6 py-16">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-10"
      >
        ✨ Premium Cars
      </motion.h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search premium cars..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 rounded-full text-black focus:outline-none"
        />
      </div>

      {/* Filter Links */}
      <div className="flex justify-center mb-6 space-x-4 z-10 relative">
        <Link
          to="/products"
          className="px-4 py-2 rounded-full font-semibold bg-blue-500 text-white transition"
        >
          All
        </Link>
        <Link
          to="/products/Limited"
          className="px-4 py-2 rounded-full font-semibold bg-gray-800 text-gray-300 hover:bg-gray-700 transition"
        >
          Limited
        </Link>
        <Link
          to="/products/Premium"
          className="px-4 py-2 rounded-full font-semibold bg-gray-800 text-gray-300 hover:bg-gray-700 transition"
        >
          Premium
        </Link>
        <Link
          to="/products/Retro"
          className="px-4 py-2 rounded-full font-semibold bg-gray-800 text-gray-300 hover:bg-gray-700 transition"
        >
          Retro
        </Link>
      </div>

      {/* Car Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {filteredCars.map((car, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <img
              src={car.img}
              alt={car.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-5 space-y-2">
              <h2 className="text-2xl font-bold text-yellow-400">{car.name}</h2>
              <p className="text-gray-300">{car.desc}</p>
              <div className="text-sm text-gray-400">
                <p>Year: {car.year}</p>
                <p>Fuel: {car.fuel}</p>
                <p>Driven: {car.km}</p>
              </div>
              <p className="text-lg font-semibold text-blue-400">{car.price}</p>
              <Link
                to={`/buy/${encodeURIComponent(car.name)}`}
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-full font-semibold transition mt-3"
              >
                Buy Now
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* No Results */}
      {filteredCars.length === 0 && (
        <p className="text-center text-gray-400 mt-10">
          No premium cars found.
        </p>
      )}
    </div>
  );
}
