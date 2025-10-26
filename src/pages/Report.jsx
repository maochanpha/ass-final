import React, { useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { TypeAnimation } from "react-type-animation";

export default function MessageReport() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-8 mt-20 text-center text-blue-400"
      >
        <TypeAnimation
          sequence={[
            "Message to CarDealership",
            2000,
            "Send Us Your Thoughts",
            2000,
            "We Value Your Feedback",
            2000,
          ]}
          speed={50}
          repeat={Infinity}
        />
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-800 rounded-2xl shadow-xl p-8 w-full max-w-lg"
      >
        <div className="relative mb-5">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="peer w-full bg-transparent border-b-2 border-gray-600 text-white focus:border-blue-400 outline-none py-2"
            required
          />
          <label className="absolute left-0 top-2 text-gray-400 text-sm transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-400 peer-valid:-top-3 peer-valid:text-xs">
            Your Name
          </label>
        </div>

        <div className="relative mb-5">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="peer w-full bg-transparent border-b-2 border-gray-600 text-white focus:border-blue-400 outline-none py-2"
            required
          />
          <label className="absolute left-0 top-2 text-gray-400 text-sm transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-400 peer-valid:-top-3 peer-valid:text-xs">
            Your Email
          </label>
        </div>

        <div className="relative mb-5">
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="4"
            className="peer w-full bg-transparent border-b-2 border-gray-600 text-white focus:border-blue-400 outline-none py-2 resize-none"
            required
          />
          <label className="absolute left-0 top-2 text-gray-400 text-sm transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-400 peer-valid:-top-3 peer-valid:text-xs">
            Message / Feedback
          </label>
        </div>
        <select name="type" className="w-full mb-5 bg-gray-700 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option value="">Select Message Type</option>
          <option value="feedback">Feedback</option>
          <option value="inquiry">Inquiry</option>
          <option value="complaint">Complaint</option>
        </select>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition"
        >
          Send Message
        </motion.button>
      </motion.form>

      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-6 bg-green-600/20 border border-green-500/40 text-green-300 px-6 py-3 rounded-xl text-center max-w-lg"
        >
          ✅ Thank you for your feedback! Apex Auto appreciates your message.
        </motion.div>
      )}
    </div>
  );
}
