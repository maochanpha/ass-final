import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

export default function Home() {
  const availableCars = [
    { name: "Lamborghini Huracán", img: "/car/Lambo.png", price: "$250,000" },
    { name: "Ferrari 488 GTB", img: "/car/Far23.png", price: "$280,000" },
    { name: "Porsche 911 Turbo", img: "/car/porches911gt3.png", price: "$190,000" },
    { name: "McLaren 720S", img: "/car/mcl720s.png", price: "$310,000" },
  ];

  const comingSoonCars = [
    { name: "Tesla Roadster", img: "/car/roadster.png", release: "2026" },
    { name: "Aston Martin Valhalla", img: "/car/astonv.png", release: "2025" },
    { name: "Bugatti Tourbillon", img: "/car/bugatti.png", release: "2025" },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* ================= HERO SECTION ================= */}
      <div className="flex flex-col items-center justify-center text-center mt-20 overflow-hidden">
        <div className="relative w-full h-[520px] rounded-lg overflow-hidden shadow-lg">
          <img
            src="/car/banner.png"
            alt="Car Banner"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 flex flex-col items-center justify-center px-4"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
              Drive Your <span className="text-blue-400">Dream Car</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-200">
              Discover top-performance cars that fit your lifestyle and budget — only at{" "}
              <span className="font-semibold text-white">Apex Auto</span>.
            </p>
            <Link
              to="/products"
              className="bg-black hover:bg-white text-white hover:text-black px-8 py-3 rounded-xl font-semibold transition transform hover:scale-105"
            >
              Shop Now
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ================= AVAILABLE CARS SECTION ================= */}
      <section className="py-16 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-400"
        >
          Cars for Sale
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {availableCars.map((car, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-blue-500/30 transition transform"
            >
              <img
                src={car.img}
                alt={car.name}
                className="w-full h-52 object-cover"
              />
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                <p className="text-gray-400 mb-3">{car.price}</p>
                <Link
                  to="/products"
                  className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg font-semibold text-white transition"
                >
                  Buy Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= COMING SOON SECTION ================= */}
      <section className="py-16 px-6 bg-gradient-to-b from-black to-gray-900">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-10 text-yellow-400"
        >
          Coming Soon
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {comingSoonCars.map((car, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-yellow-500/30 transition transform"
            >
              <img
                src={car.img}
                alt={car.name}
                className="w-full h-52 object-cover opacity-90"
              />
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                <p className="text-gray-400">Releasing in {car.release}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
