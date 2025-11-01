import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router";

// Flash Sale Timer Component
function FlashSaleTimer({ discountEnd }) {
  const [timeLeft, setTimeLeft] = useState("");

  React.useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = discountEnd.getTime() - now;

      if (distance <= 0) {
        setTimeLeft("Sale ended");
        clearInterval(interval);
        return;
      }

      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(
        `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [discountEnd]);

  return (
    <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
      ⚡ {timeLeft} ⚡
    </div>
  );
}

export default function Products() {
  const [search, setSearch] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [fuelFilter, setFuelFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState(500000);

  const cars = [
    {
      name: "Toyota Corolla",
      img: "car/corolla.png",
      year: 2021,
      fuel: "Petrol",
      km: "25,000 km",
      price: 15000,
      discount: 0.1,
    },
    {
      name: "McLaren 720S",
      img: "car/mcl720s.png",
      year: 2022,
      fuel: "Petrol",
      km: "5,000 km",
      price: 280000,
      discount: 0,
    },
    {
      name: "Nissan GTR R35",
      img: "car/GTR.png",
      year: 2021,
      fuel: "Petrol",
      km: "10,000 km",
      price: 120000,
      discount: 0.05,
    },
    {
      name: "Aston Martin DB11",
      img: "car/amt.png",
      year: 2020,
      fuel: "Petrol",
      km: "8,000 km",
      price: 200000,
      discount: 0.15,
    },
    {
      name: "Audi R8",
      img: "car/audir8.png",
      year: 2021,
      fuel: "Petrol",
      km: "12,000 km",
      price: 170000,
      discount: 0,
    },
    {
      name: "BMW M4",
      img: "car/bmwm4-25.png",
      year: 2022,
      fuel: "Petrol",
      km: "9,000 km",
      price: 130000,
      discount: 0.1,
    },
    {
      name: "Ferrari 812",
      img: "car/Far23.png",
      year: 2022,
      fuel: "Petrol",
      km: "3,500 km",
      price: 350000,
      discount: 0,
    },
    {
      name: "Toyota GR Supra",
      img: "car/grsupra.png",
      year: 2023,
      fuel: "Petrol",
      km: "2,000 km",
      price: 60000,
      discount: 0.08,
    },
    {
      name: "Lamborghini Huracán",
      img: "car/Lambo.png",
      year: 2021,
      fuel: "Petrol",
      km: "4,000 km",
      price: 280000,
      discount: 0.05,
    },
    {
      name: "Ford Mustang GT",
      img: "car/mustang25.png",
      year: 2020,
      fuel: "Petrol",
      km: "15,000 km",
      price: 55000,
      discount: 0.12,
    },
    {
      name: "Tesla Model S",
      img: "car/tesla.png",
      year: 2023,
      fuel: "Electric",
      km: "1,000 km",
      price: 90000,
      discount: 0,
    },
    {
      name: "Porsche 911 GT3",
      img: "car/porches911gt3.png",
      year: 2022,
      fuel: "Petrol",
      km: "6,000 km",
      price: 220000,
      discount: 0.1,
    },
  ];
  // Filter cars by search, year, fuel, price
  const filteredCars = cars.filter((car) => {
    const matchesSearch = car.name.toLowerCase().includes(search.toLowerCase());
    const matchesYear = yearFilter ? car.year === parseInt(yearFilter) : true;
    const matchesFuel = fuelFilter ? car.fuel === fuelFilter : true;
    const matchesPrice = car.price <= priceFilter;
    return matchesSearch && matchesYear && matchesFuel && matchesPrice;
  });

  // Quick View Modal
  const [modalCar, setModalCar] = useState(null);

  return (
    <div className="relative bg-gradient-to-b from-gray-900 to-black py-16 px-6 min-h-screen overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-4xl text-center mt-20 mb-10 font-extrabold text-white tracking-wide"
      >
        Cars for Sale
      </motion.h1>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12 relative z-10">
        <div className="relative w-64">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search cars..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700 transition"
          />
        </div>

        <select
          value={yearFilter}
          onChange={(e) => setYearFilter(e.target.value)}
          className="px-4 py-2 rounded-full bg-gray-800 text-white border border-gray-700 focus:outline-none"
        >
          <option value="">All Years</option>
          {[2020, 2021, 2022, 2023].map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        <select
          value={fuelFilter}
          onChange={(e) => setFuelFilter(e.target.value)}
          className="px-4 py-2 rounded-full bg-gray-800 text-white border border-gray-700 focus:outline-none"
        >
          <option value="">All Fuel Types</option>
          {["Petrol", "Electric"].map((fuel) => (
            <option key={fuel} value={fuel}>
              {fuel}
            </option>
          ))}
        </select>

        <div className="flex items-center gap-2">
          <input
            type="range"
            min="0"
            max="500000"
            step="5000"
            value={priceFilter}
            onChange={(e) => setPriceFilter(parseInt(e.target.value))}
            className="w-48"
          />
          <span className="text-white">${priceFilter.toLocaleString()}</span>
        </div>
      </div>

      {/* Car Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-stretch justify-items-center max-w-[1500px] m-auto relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {filteredCars.length > 0 ? (
          filteredCars.map((car, index) => {
            const discountedPrice = car.price * (1 - car.discount);
            const hasDiscount = car.discount > 0;

            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -10, rotateX: 2, rotateY: 2 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative w-full max-w-xs backdrop-blur-lg bg-white/10 border border-gray-700 rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition duration-300"
              >
                {hasDiscount && (
                  <FlashSaleTimer discountEnd={car.discountEnd} />
                )}

                <img
                  src={car.img}
                  alt={car.name}
                  className="w-full h-56 object-cover"
                />

                <div className="p-5">
                  <h2 className="text-lg font-semibold text-white mb-2">
                    {car.name}
                  </h2>
                  <p className="text-sm text-gray-400 mb-4">
                    {car.year} • {car.fuel} • {car.km}
                  </p>

                  <div className="flex justify-between items-center">
                    <div>
                      {hasDiscount ? (
                        <div>
                          <p className="text-gray-400 line-through text-sm">
                            ${car.price.toLocaleString()}
                          </p>
                          <motion.p
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                            className="text-lg font-bold bg-gradient-to-r from-yellow-400 to-red-400 text-transparent bg-clip-text"
                          >
                            ${discountedPrice.toLocaleString()}
                          </motion.p>
                        </div>
                      ) : (
                        <p className="text-lg font-bold bg-gradient-to-r from-blue-400 to-green-400 text-transparent bg-clip-text">
                          ${car.price.toLocaleString()}
                        </p>
                      )}
                    </div>

                    <Link to={`/buy/${encodeURIComponent(car.name)}`}>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="bg-black hover:bg-white hover:text-black text-white px-4 py-2 rounded-lg shadow"
                      >
                        View Details
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })
        ) : (
          <p className="text-white text-center col-span-full text-lg mt-10">
            No cars found
          </p>
        )}
      </motion.div>

      {/* Quick View Modal */}
      {modalCar && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="bg-gray-900 p-8 rounded-2xl max-w-lg w-full relative"
          >
            <button
              onClick={() => setModalCar(null)}
              className="absolute top-4 right-4 text-white font-bold text-xl"
            >
              ✖
            </button>
            <img
              src={modalCar.img}
              alt={modalCar.name}
              className="w-full h-64 object-cover rounded-xl mb-4"
            />
            <h2 className="text-2xl font-bold text-white mb-2">
              {modalCar.name}
            </h2>
            <p className="text-gray-400 mb-2">
              {modalCar.year} • {modalCar.fuel} • {modalCar.km}
            </p>
            <p className="text-lg font-bold text-white">
              ${(modalCar.price * (1 - modalCar.discount)).toLocaleString()}
              {modalCar.discount > 0 && (
                <span className="text-gray-400 line-through ml-2">
                  ${modalCar.price.toLocaleString()}
                </span>
              )}
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
}
