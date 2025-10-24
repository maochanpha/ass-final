import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

export default function Retro() {
  const [search, setSearch] = useState("");

  const retroCars = [
    {
      name: "Ford Mustang GT 1967",
      img: "/car/mustang.png",
      year: 1967,
      fuel: "Petrol",
      km: "120,000 km",
      price: "$80,000",
      desc: "Classic American muscle car with iconic design and roar.",
    },
    {
      name: "Chevrolet Camaro SS 1969",
      img: "/car/camaro.png",
      year: 1969,
      fuel: "Petrol",
      km: "95,000 km",
      price: "$90,000",
      desc: "Vintage sports car combining style, power, and nostalgia.",
    },
    {
      name: "Porsche 911 Carrera 1973",
      img: "/car/73.png",
      year: 1973,
      fuel: "Petrol",
      km: "80,000 km",
      price: "$120,000",
      desc: "Timeless classic with legendary performance and curves.",
    },
  ];

  const filteredCars = retroCars.filter((car) =>
    car.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-b from-yellow-900 via-orange-900 to-red-950 min-h-screen text-white px-6 py-16">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-10 mt-16"
      >
        🏁 Retro Cars
      </motion.h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search retro cars..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 rounded-full text-black focus:outline-none"
        />
      </div>

      {/* Filter Links */}
      <div className="flex justify-center mb-10 flex-wrap gap-4 relative z-10">
        {[
          { name: "All", path: "/products" },
          { name: "Limited", path: "/products/limited" },
          { name: "Premium", path: "/products/premium" },
          { name: "Retro", path: "/products/retro" },
        ].map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="px-6 py-2.5 rounded-full font-medium 
                 bg-orange-200 text-black 
                 hover:bg-orange-500 hover:text-white
                 shadow-sm hover:shadow-peach-500/30
                 hover:scale-105 transition-all duration-300
                 border border-transparent hover:border-peach-400"
          >
            {item.name}
          </Link>
        ))}
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
            className="bg-orange-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
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
              <p className="text-lg font-semibold text-yellow-300">
                {car.price}
              </p>
              <Link
                to={`/buy/${encodeURIComponent(car.name)}`}
                className="inline-block bg-orange-400 hover:bg-orange-600 text-black px-4 py-2 rounded-full font-semibold transition mt-3"
              >
                Buy Now
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* No Results */}
      {filteredCars.length === 0 && (
        <p className="text-center text-gray-400 mt-10">No retro cars found.</p>
      )}
    </div>
  );
}
