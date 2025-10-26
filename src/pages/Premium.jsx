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
    <div className="bg-gradient-to-b from-yellow-600 via-yellow-900 to-black min-h-screen text-white px-6 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-16 mt-16"
      >
        ✨ Premium Cars
      </motion.h1>

      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search premium cars..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 rounded-full text-black focus:outline-none"
        />
      </div>

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
                 bg-yellow-200 text-black 
                 hover:bg-peach-500 hover:bg-yellow-400 hover:text-white
                 shadow-sm hover:shadow-peach-500/30
                 hover:scale-105 transition-all duration-300
                 border border-transparent hover:border-peach-400"
          >
            {item.name}
          </Link>
        ))}
      </div>

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
            className="bg-yellow-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
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

      {filteredCars.length === 0 && (
        <p className="text-center text-gray-400 mt-10">
          No premium cars found.
        </p>
      )}
    </div>
  );
}
