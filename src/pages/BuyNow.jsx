import React, { useState } from "react";
import { useParams, useNavigate } from "react-router";

export default function BuyNow() {
  const { carName } = useParams();
  const navigate = useNavigate();

  const cars = [
    {
      name: "Toyota Corolla",
      img: "car/corolla.png",
      year: 2021,
      fuel: "Petrol",
      km: "25,000 km",
      price: 15000,
      description: {
        engine: "1.8L 4-Cylinder",
        horsepower: "139 hp",
        topSpeed: "180 km/h",
        features: ["Bluetooth", "Backup Camera", "Lane Assist"],
      },
    },
    {
      name: "McLaren 720S",
      img: "car/mcl720s.png",
      year: 2022,
      fuel: "Petrol",
      km: "5,000 km",
      price: 280000,
      description: {
        engine: "4.0L V8 Twin-Turbo",
        horsepower: "710 hp",
        topSpeed: "341 km/h",
        features: ["Carbon Fiber Body", "Active Aerodynamics", "Track Mode"],
      },
    },
    {
      name: "Nissan GTR R35",
      img: "car/GTR.png",
      year: 2021,
      fuel: "Petrol",
      km: "10,000 km",
      price: 120000,
      discount: 0.05,
      description: {
        engine: "3.8L V6 Twin-Turbo",
        horsepower: "565 hp",
        topSpeed: "315 km/h",
        features: ["All-Wheel Drive", "Launch Control", "Brembo Brakes"],
      },
    },
    {
      name: "Aston Martin DB11",
      img: "car/amt.png",
      year: 2020,
      fuel: "Petrol",
      km: "8,000 km",
      price: 200000,
      discount: 0.15,
      description: {
        engine: "5.2L V12 Twin-Turbo",
        horsepower: "600 hp",
        topSpeed: "322 km/h",
        features: [
          "Luxury Interior",
          "Adaptive Cruise",
          "Touchscreen Infotainment",
        ],
      },
    },
    {
      name: "Audi R8",
      img: "car/audir8.png",
      year: 2021,
      fuel: "Petrol",
      km: "12,000 km",
      price: 170000,
      description: {
        engine: "5.2L V10",
        horsepower: "562 hp",
        topSpeed: "330 km/h",
        features: ["Quattro AWD", "Virtual Cockpit", "Carbon Fiber"],
      },
    },
    {
      name: "BMW M4",
      img: "car/bmwm4-25.png",
      year: 2022,
      fuel: "Petrol",
      km: "9,000 km",
      price: 130000,
      discount: 0.1,
      description: {
        engine: "3.0L Twin-Turbo I6",
        horsepower: "503 hp",
        topSpeed: "290 km/h",
        features: ["Adaptive Suspension", "M Carbon Roof", "Track Mode"],
      },
    },
    {
      name: "Ferrari 812",
      img: "car/Far23.png",
      year: 2022,
      fuel: "Petrol",
      km: "3,500 km",
      price: 350000,
      description: {
        engine: "6.5L V12",
        horsepower: "789 hp",
        topSpeed: "340 km/h",
        features: ["Aerodynamic Body", "F1 Inspired Tech", "Luxury Interior"],
      },
    },
    {
      name: "Toyota GR Supra",
      img: "car/grsupra.png",
      year: 2023,
      fuel: "Petrol",
      km: "2,000 km",
      price: 60000,
      discount: 0.08,
      description: {
        engine: "3.0L Turbo I6",
        horsepower: "382 hp",
        topSpeed: "250 km/h",
        features: ["Sport Seats", "Launch Control", "Adaptive Suspension"],
      },
    },
    {
      name: "Lamborghini Huracán",
      img: "car/Lambo.png",
      year: 2021,
      fuel: "Petrol",
      km: "4,000 km",
      price: 280000,
      discount: 0.05,
      description: {
        engine: "5.2L V10",
        horsepower: "631 hp",
        topSpeed: "325 km/h",
        features: ["All-Wheel Drive", "Sport Exhaust", "Carbon Fiber Interior"],
      },
    },
    {
      name: "Ford Mustang GT",
      img: "car/mustang25.png",
      year: 2020,
      fuel: "Petrol",
      km: "15,000 km",
      price: 55000,
      discount: 0.12,
      description: {
        engine: "5.0L V8",
        horsepower: "450 hp",
        topSpeed: "250 km/h",
        features: ["Rear-Wheel Drive", "Sport Mode", "Track Apps"],
      },
    },
    {
      name: "Tesla Model S",
      img: "car/tesla.png",
      year: 2023,
      fuel: "Electric",
      km: "1,000 km",
      price: 90000,
      description: {
        engine: "Electric Dual Motor",
        horsepower: "670 hp",
        topSpeed: "261 km/h",
        features: ["Autopilot", "Full Self-Driving", "Touchscreen Display"],
      },
    },
    {
      name: "Porsche 911 GT3",
      img: "car/porches911gt3.png",
      year: 2022,
      fuel: "Petrol",
      km: "6,000 km",
      price: 220000,
      discount: 0.1,
      description: {
        engine: "4.0L Flat-6",
        horsepower: "502 hp",
        topSpeed: "320 km/h",
        features: ["Rear-Wheel Drive", "Sport Chrono Package", "Track-Focused"],
      },
    },
    {
      name: "Ferrari SF90 Stradale",
      img: "car/feature.png",
      year: 2024,
      fuel: "Hybrid",
      km: "5,000 km",
      price: 520000,
      description: {
        engine: "4.0L V8 Plug-in Hybrid",
        horsepower: "986 hp",
        topSpeed: "340 km/h",
        features: [
          "Electric Drive Mode",
          "F1 Traction",
          "Carbon Fiber Chassis",
        ],
      },
    },
    {
      name: "Lamborghini Aventador SVJ",
      img: "car/lamborghini.png",
      year: 2023,
      fuel: "Petrol",
      km: "3,500 km",
      price: 620000,
      description: {
        engine: "6.5L V12",
        horsepower: "759 hp",
        topSpeed: "350 km/h",
        features: ["Carbon Fiber Body", "Active Aero", "Track Mode"],
      },
    },
    {
      name: "Porsche 911 Turbo S Limited",
      img: "car/porsche.png",
      year: 2024,
      fuel: "Petrol",
      km: "2,000 km",
      price: 380000,
      description: {
        engine: "3.8L Twin-Turbo Flat-6",
        horsepower: "640 hp",
        topSpeed: "330 km/h",
        features: ["PDK Transmission", "AWD", "Lightweight Build"],
      },
    },
    {
      name: "Bugatti Chiron Pur Sport",
      img: "car/bugati.png",
      year: 2024,
      fuel: "Petrol",
      km: "1,200 km",
      price: 3500000,
      description: {
        engine: "8.0L Quad-Turbo W16",
        horsepower: "1,479 hp",
        topSpeed: "350 km/h",
        features: [
          "Aerodynamic Enhancements",
          "Lightweight Chassis",
          "Luxury Interior",
        ],
      },
    },
    {
      name: "McLaren Speedtail",
      img: "car/mclaren.png",
      year: 2023,
      fuel: "Hybrid",
      km: "800 km",
      price: 2200000,
      description: {
        engine: "4.0L Twin-Turbo V8 + Electric Motor",
        horsepower: "1,036 hp",
        topSpeed: "402 km/h",
        features: [
          "Three-Seat Layout",
          "Carbon Fiber Body",
          "Advanced Aerodynamics",
        ],
      },
    },
    {
      name: "Aston Martin Valkyrie",
      img: "car/aston.png",
      year: 2024,
      fuel: "Hybrid",
      km: "500 km",
      price: 3000000,
      description: {
        engine: "6.5L Naturally Aspirated V12 + Hybrid",
        horsepower: "1,160 hp",
        topSpeed: "402 km/h",
        features: [
          "F1-Inspired Aerodynamics",
          "Carbon-Fiber Chassis",
          "Track-Focused Suspension",
        ],
      },
    },
  ];

  const car = cars.find((c) => c.name === decodeURIComponent(carName));
  const [quantity, setQuantity] = useState(1);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    license: "",
    deliveryDate: "",
    payment: "",
    notes: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [selectedColor, setSelectedColor] = useState("Red");
  const [addons, setAddons] = useState({ warranty: false, insurance: false });

  if (!car)
    return (
      <div className="text-white text-center mt-20 text-xl">
        Car not found 😢
      </div>
    );

  const discountedPrice = car.price * (1 - (car.discount || 0));
  const colorPrices = { Red: 0, Blue: 500, Black: 1000, White: 0 };
  const addonPrice =
    (addons.warranty ? 1000 : 0) + (addons.insurance ? 500 : 0);
  const totalPrice =
    (discountedPrice + (colorPrices[selectedColor] || 0) + addonPrice) *
    quantity;

  const suggestedCars = cars.filter((c) => c.name !== car.name).slice(0, 4);
  const colors = ["Red", "Blue", "Black", "White"];

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center py-8 px-6 md:px-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center mt-20">
        Purchase Car
      </h1>

      <div className="w-full max-w-7xl grid md:grid-cols-2 gap-10 bg-gray-950/40 rounded-2xl shadow-2xl p-6 md:p-10">
        {/* Car Image & Color */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <img
            src={`/${car.img}`}
            alt={car.name}
            className="w-full h-full max-h-[500px] object-contain rounded-xl shadow-lg transition-transform duration-500 hover:scale-105"
          />
          <div className="flex gap-2 mt-2">
            {colors.map((color) => (
              <button
                key={color}
                style={{ backgroundColor: color.toLowerCase() }}
                className={`w-6 h-6 rounded-full border-2 ${
                  selectedColor === color ? "border-white" : "border-gray-700"
                } transition-all duration-300`}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </div>
        </div>

        {/* Car Info & Form */}
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">{car.name}</h2>
            <p className="text-gray-400 mb-2">
              {car.year} • {car.fuel} • {car.km}
            </p>
            {car.discount && (
              <div className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold mb-2">
                {Math.round(car.discount * 100)}% OFF
              </div>
            )}

            <div className="bg-gray-800/60 p-4 rounded-lg mb-4 text-gray-300 space-y-1">
              <p>
                <span className="font-semibold">Engine:</span>{" "}
                {car.description.engine}
              </p>
              <p>
                <span className="font-semibold">Horsepower:</span>{" "}
                {car.description.horsepower}
              </p>
              <p>
                <span className="font-semibold">Top Speed:</span>{" "}
                {car.description.topSpeed}
              </p>
              <p>
                <span className="font-semibold">Features:</span>{" "}
                {car.description.features.join(", ")}
              </p>
            </div>

            <p className="text-gray-400 line-through">
              ${car.price.toLocaleString()}
            </p>
            <p className="text-2xl text-green-400 font-bold mb-1 transition-transform duration-300 hover:scale-105">
              Total: ${totalPrice.toLocaleString()}
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {["name", "phone", "email", "address", "license"].map(
              (field, i) => (
                <input
                  key={i}
                  type={field === "email" ? "email" : "text"}
                  placeholder={
                    field.charAt(0).toUpperCase() +
                    field.slice(1) +
                    (field === "license" ? " (optional)" : "")
                  }
                  value={form[field] || ""}
                  onChange={(e) =>
                    setForm({ ...form, [field]: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                  required={field !== "license"}
                />
              )
            )}

            <input
              type="date"
              value={form.deliveryDate || ""}
              onChange={(e) =>
                setForm({ ...form, deliveryDate: e.target.value })
              }
              className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />

            <select
              value={form.payment || ""}
              onChange={(e) => setForm({ ...form, payment: e.target.value })}
              className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none"
              required
            >
              <option value="">Select Payment Method</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Bank Transfer">Bank Transfer</option>
              <option value="Cash">Cash</option>
              <option value="PayPal">PayPal</option>
            </select>

            <textarea
              placeholder="Notes / Special Requests"
              value={form.notes || ""}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none"
              rows={3}
            />

            {/* Add-ons */}
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={addons.warranty}
                  onChange={() =>
                    setAddons({ ...addons, warranty: !addons.warranty })
                  }
                />{" "}
                Extended Warranty (+$1,000)
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={addons.insurance}
                  onChange={() =>
                    setAddons({ ...addons, insurance: !addons.insurance })
                  }
                />{" "}
                Insurance (+$500)
              </label>
            </div>

            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full rounded-xl border border-blue-500 bg-gray-800 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Quantity"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Confirm Purchase
            </button>
          </form>

          <button
            onClick={() => navigate(-1)}
            className="w-full bg-gray-700 hover:bg-gray-600 py-3 rounded-lg text-lg font-semibold transition-all duration-300 mt-4"
          >
            Back
          </button>
        </div>
      </div>

      {/* Suggested Cars */}
      <div className="w-full max-w-7xl mt-10">
        <h3 className="text-2xl font-bold mb-4">You may also like</h3>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {suggestedCars.map((c) => (
            <div
              key={c.name}
              className="min-w-[200px] cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => navigate(`/buy/${encodeURIComponent(c.name)}`)}
            >
              <img
                src={`/${c.img}`}
                alt={c.name}
                className="rounded-lg mb-2 object-contain h-32 w-full shadow-lg"
              />
              <p className="font-semibold">{c.name}</p>
              <p className="text-gray-400">${c.price.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-gray-900 p-6 rounded-xl w-96 text-white space-y-2">
            <h2 className="text-xl font-bold mb-2">Purchase Confirmed!</h2>
            <p>
              <span className="font-semibold">Car:</span> {car.name}
            </p>
            <p>
              <span className="font-semibold">Quantity:</span> {quantity}
            </p>
            <p>
              <span className="font-semibold">Color:</span> {selectedColor}
            </p>
            <p>
              <span className="font-semibold">Add-ons:</span>{" "}
              {Object.entries(addons)
                .filter(([k, v]) => v)
                .map(([k]) => k)
                .join(", ") || "None"}
            </p>
            <p>
              <span className="font-semibold">Total:</span> $
              {totalPrice.toLocaleString()}
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
