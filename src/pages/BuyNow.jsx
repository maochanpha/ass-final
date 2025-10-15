import React from "react";
import { useParams, useNavigate } from "react-router";

export default function BuyNow() {
  const { carName } = useParams();
  const navigate = useNavigate();

  // Same car data as in Products.jsx
  const cars = [
    {
      name: "Toyota Corolla",
      img: "car/corolla.png",
      year: 2021,
      fuel: "Petrol",
      km: "25,000 km",
      price: "$15,000",
    },
    {
      name: "McLaren 720S",
      img: "car/mcl720s.png",
      year: 2022,
      fuel: "Petrol",
      km: "5,000 km",
      price: "$280,000",
    },
    {
      name: "Nissan GTR R35",
      img: "car/GTR.png",
      year: 2021,
      fuel: "Petrol",
      km: "10,000 km",
      price: "$120,000",
    },
    {
      name: "Aston Martin DB11",
      img: "car/amt.png",
      year: 2020,
      fuel: "Petrol",
      km: "8,000 km",
      price: "$200,000",
    },
    {
      name: "Audi R8",
      img: "car/audir8.png",
      year: 2021,
      fuel: "Petrol",
      km: "12,000 km",
      price: "$170,000",
    },
    {
      name: "BMW M4",
      img: "car/bmwm4-25.png",
      year: 2022,
      fuel: "Petrol",
      km: "9,000 km",
      price: "$130,000",
    },
    {
      name: "Ferrari 812",
      img: "car/Far23.png",
      year: 2022,
      fuel: "Petrol",
      km: "3,500 km",
      price: "$350,000",
    },
    {
      name: "Toyota GR Supra",
      img: "car/grsupra.png",
      year: 2023,
      fuel: "Petrol",
      km: "2,000 km",
      price: "$60,000",
    },
    {
      name: "Lamborghini Huracán",
      img: "car/Lambo.png",
      year: 2021,
      fuel: "Petrol",
      km: "4,000 km",
      price: "$280,000",
    },
    {
      name: "Ford Mustang GT",
      img: "car/mustang25.png",
      year: 2020,
      fuel: "Petrol",
      km: "15,000 km",
      price: "$55,000",
    },
    {
      name: "Tesla Model S",
      img: "car/tesla.png",
      year: 2023,
      fuel: "Electric",
      km: "1,000 km",
      price: "$90,000",
    },
    {
      name: "Porsche 911 GT3",
      img: "car/porches911gt3.png",
      year: 2022,
      fuel: "Petrol",
      km: "6,000 km",
      price: "$220,000",
    },
  ];

  const car = cars.find((c) => c.name === decodeURIComponent(carName));

  if (!car) {
    return (
      <div className="text-white text-center mt-20 text-xl">
        Car not found 😢
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-32 px-6">
        <h1 className="text-3xl text-center py-3 font-bold">Payments</h1>
      <div className="max-w-5xl mx-auto bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Left side - Car image */}
          <div>
            <img
              src={`/${car.img}`}
              alt={car.name}
              className="w-full mt-48 py-2 px-3 m-2 object-cover"
            />
          </div>

          {/* Right side - Details and form */}
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-2">{car.name}</h1>
            <p className="text-gray-400 mb-4">
              {car.year} • {car.fuel} • {car.km}
            </p>
            <p className="text-2xl text-blue-400 font-semibold mb-6">
              {car.price}
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-1">Phone</label>
                <input
                  type="text"
                  placeholder="Enter your phone"
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-1">Quantity</label>
                <input
                  type="number"
                  defaultValue="1"
                  min="1"
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg text-lg font-semibold"
              >
                Confirm Purchase
              </button>
            </form>

            <button
              onClick={() => navigate(-1)}
              className="mt-4 w-full bg-gray-700 hover:bg-gray-600 py-3 rounded-lg text-lg font-semibold"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
