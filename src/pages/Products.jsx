import React, { useState } from "react";

export default function Products() {
  const [search, setSearch] = useState("");
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

  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black py-10 px-6 rounded-lg">
      <h1 className="text-3xl text-center mb-10 font-bold text-white">
        Cars for Sale
      </h1>

      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search cars..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-80 px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-center justify-items-center">
        {filteredCars.length > 0 ? (
          filteredCars.map((car, index) => (
            <div
              key={index}
              className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img
                src={car.img}
                alt={car.name}
                className="w-full h-56 object-cover object-center"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  {car.name}
                </h2>
                <p className="text-sm text-gray-800 mb-3">
                  {car.year} • {car.fuel} • {car.km}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-green-600">
                    {car.price}
                  </span>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white text-center col-span-full">No cars found</p>
        )}
      </div>
    </div>
  );
}
