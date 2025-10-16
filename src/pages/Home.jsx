import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const banners = [
    {
      img: "/car/banner.png",
      title: "Drive Your Dream Car",
      subtitle: "Discover top-performance cars that fit your lifestyle and budget.",
      button: "Shop Now",
    },
    {
      img: "/car/banner2.png",
      title: "Luxury That Moves You",
      subtitle: "Find premium cars from the world’s top brands only at Apex Auto.",
      button: "Explore Cars",
    },
    {
      img: "/car/banner3.png",
      title: "Speed Meets Style",
      subtitle: "Unleash performance and elegance on every road.",
      button: "View Models",
    },
  ];

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [banners.length]);

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
      {/* ================= SLIDE BANNER ================= */}
      <div className="relative w-full h-[520px] overflow-hidden mt-20 rounded-lg">
        <AnimatePresence>
          <motion.img
            key={banners[currentIndex].img}
            src={banners[currentIndex].img}
            alt={banners[currentIndex].title}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>

        {/* Banner Text */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            {banners[currentIndex].title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-blue-400">
              {banners[currentIndex].title.split(" ").slice(-1)}
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-200">
            {banners[currentIndex].subtitle}
          </p>
          <Link
            to="/products"
            className="bg-black hover:bg-white text-white hover:text-black px-8 py-3 rounded-xl font-semibold transition transform hover:scale-105"
          >
            {banners[currentIndex].button}
          </Link>
        </motion.div>

        {/* Dots navigation */}
        <div className="absolute bottom-6 flex justify-center w-full space-x-3">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* ================= AVAILABLE CARS ================= */}
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

      {/* ================= COMING SOON ================= */}
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
