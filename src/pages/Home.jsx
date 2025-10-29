import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";

// ===== Limited Stock Timer Component =====
function LimitedStockTimer({ stock = 5, endTime }) {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime.getTime() - now;

      if (distance <= 0) {
        setTimeLeft("Sale ended");
        clearInterval(interval);
        return;
      }

      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(
        `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime]);

  if (stock <= 0) return null;

  return (
    <div className="bg-red-600 text-white px-4 py-1 rounded-lg font-semibold text-center mt-2 text-sm">
      ⚡ Only {stock} left! Sale ends in {timeLeft} ⚡
    </div>
  );
}

// ===== Home Component =====
export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const banners = [
    {
      img: "/car/banner.png",
      title: "Drive Your Dream Car",
      subtitle:
        "Discover top-performance cars that fit your lifestyle and budget.",
      button: "Shop Now",
    },
    {
      img: "/car/banner2.png",
      title: "Luxury That Moves You",
      subtitle:
        "Find premium cars from the world’s top brands only at Apex Auto.",
      button: "Explore Cars",
    },
    {
      img: "/car/banner3.png",
      title: "Speed Meets Style",
      subtitle: "Unleash performance and elegance on every road.",
      button: "View Models",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [banners.length]);

  // ===== Updated availableCars with stock and countdown =====
  const availableCars = [
    {
      name: "Lamborghini Huracán",
      img: "/car/Lambo.png",
      price: "$250,000",
      stock: 3,
      saleEnd: new Date("2025-10-25T23:59:59"),
    },
    {
      name: "Ferrari 488 GTB",
      img: "/car/Far23.png",
      price: "$280,000",
      stock: 5,
      saleEnd: new Date("2025-10-22T23:59:59"),
    },
    {
      name: "Porsche 911 Turbo",
      img: "/car/porches911gt3.png",
      price: "$190,000",
      stock: 2,
      saleEnd: new Date("2025-11-01T23:59:59"),
    },
    {
      name: "McLaren 720S",
      img: "/car/mcl720s.png",
      price: "$310,000",
      stock: 1,
      saleEnd: new Date("2025-10-21T23:59:59"),
    },
  ];

  const comingSoonCars = [
    { name: "Tesla Roadster", img: "/car/roadster.png", release: "2026" },
    { name: "Aston Martin Valhalla", img: "/car/astonv.png", release: "2025" },
    { name: "Bugatti Tourbillon", img: "/car/bugatti.png", release: "2025" },
  ];

  const testimonials = [
    {
      name: "Kim Jung Un",
      text: "Amazing service! My Ferrari was delivered in 3 days!",
      img: "/cus/ku.png",
    },
    {
      name: "President Donald J. Trump",
      text: "Smooth purchase and great support team!",
      img: "/cus/dt.png",
    },
    {
      name: "Vladimir Putin",
      text: "Got my dream Porsche—thanks Apex Auto!",
      img: "/cus/pt.png",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white relative">
      <div className="relative w-full h-[550px] overflow-hidden mt-16 rounded-lg">
        <AnimatePresence>
          <motion.img
            key={banners[currentIndex].img}
            src={banners[currentIndex].img}
            alt={banners[currentIndex].title}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover  "
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>
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

      <section className="py-4 px-6 bg-yellow-500 text-white text-center font-semibold text-lg animate-pulse rounded-md">
        ⚡ Flash Sale: This weekend only! Limited stock on select supercars! ⚡
      </section>

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
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-blue-500/30 transition transform relative"
            >
              <div className="relative">
                <img
                  src={car.img}
                  alt={car.name}
                  className="w-full h-52 object-cover"
                />
                {car.stock <= 5 && car.stock > 0 && (
                  <LimitedStockTimer stock={car.stock} endTime={car.saleEnd} />
                )}
              </div>
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                <p className="text-gray-400 mb-3">{car.price}</p>
                <Link
                  to="/products"
                  className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg font-semibold text-white transition"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-900 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-10 text-red-400"
        >
          Featured Supercar of the Month
        </motion.h2>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
          <img
            src="/car/feature.png"
            alt="Featured Car"
            className="w-full md:w-1/2 object-cover"
          />
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-2 text-white">
              Ferrari SF90 Stradale
            </h3>
            <p className="text-gray-300 mb-4">
              Experience hybrid power with 986 horsepower and breathtaking
              design.
            </p>
            <p className="text-yellow-400 font-semibold mb-3">
              0–100 km/h in 2.5s
            </p>
            <Link
              to="/products/limited"
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition"
            >
              View Details
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-900 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-blue-400 mb-10"
        >
          Why Choose Car Dealership?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-3">✅ Certified Cars</h3>
            <p className="text-gray-300">
              Every car passes a 200-point inspection before sale.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-3">
              💰 Flexible Financing
            </h3>
            <p className="text-gray-300">
              Get your dream car with easy monthly payment plans.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-3">⚡ Fast Delivery</h3>
            <p className="text-gray-300">
              We deliver your car anywhere in record time.
            </p>
          </div>
        </div>
      </section>

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
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-red-300/30 transition transform"
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

      <section className="py-16 px-6 bg-gray-800 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-10 text-green-400"
        >
          Happy Customers
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((review, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-700 p-6 rounded-2xl shadow-lg text-center"
            >
              <img
                src={review.img}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="italic text-gray-300 mb-3">“{review.text}”</p>
              <h4 className="font-semibold text-white">{review.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-10 text-blue-400"
        >
          Our Achievements
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <p className="text-4xl font-bold text-white">10K+</p>
            <p className="text-gray-400">Cars Sold</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-white">500+</p>
            <p className="text-gray-400">Luxury Models</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-white">20+</p>
            <p className="text-gray-400">Countries</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-white">4.9⭐</p>
            <p className="text-gray-400">Customer Rating</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-800 text-center">
        <h2 className="text-3xl font-bold text-blue-400 mb-4">Stay Updated!</h2>
        <p className="text-gray-300 mb-6">
          Get the latest cars, offers, and news straight to your inbox.
        </p>
        <div className="flex justify-center flex-col md:flex-row gap-2">
          <input
            type="email"
            placeholder="Your email"
            className=" text-black px-4 py-2 rounded-l-xl focus:outline-none w-full md:w-64"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-r-xl font-semibold transition">
            Subscribe
          </button>
        </div>
      </section>

      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4-.81L3 20l1.81-4a9.86 9.86 0 01-.81-4c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
