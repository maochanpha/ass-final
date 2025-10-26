import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white min-h-screen flex flex-col items-center py-16 px-6 relative">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold mb-16 text-center bg-clip-text mt-40 text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
      >
        Get In Touch
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl w-full grid md:grid-cols-2 gap-12 p-10 rounded-3xl shadow-2xl border border-gray-700
                   bg-white/10 backdrop-blur-md"
      >
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-3xl font-semibold text-blue-400">Contact Info</h2>
          <p className="text-gray-300 leading-relaxed">
            Have questions about our cars or services? Reach out — we’d love to hear from you. 
          </p>

          <div className="flex flex-col gap-3 text-blue-300">
            <span>🏠 123 Modern Street, Phnom Penh, Cambodia</span>
            <span>📞 +855 96 33 99 779</span>
            <span>📧 support@cardealership.com</span>
          </div>
        </div>

        <motion.form
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col space-y-5  "
        >
         <input type="text" placeholder="Name" className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-3 border border-black" />
         <input type="email" placeholder="Email" className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-3 border border-black" />
         <textarea name="message" placeholder="Message" className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-3 border-black" />
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px #6366f1" }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-purple-600 py-3 w-full rounded-xl font-semibold text-white shadow-lg"
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
}

function InputField({ label, type = "text", textarea = false }) {
  return (
    <div className="relative p-0.5 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-gray-900/70 rounded-2xl p-3 shadow-md">
        {textarea ? (
          <textarea
            required
            rows={4}
            placeholder=" "
            className="peer w-full bg-transparent text-white outline-none placeholder-transparent resize-none focus:ring-2 focus:ring-blue-400 rounded-lg p-2"
          />
        ) : (
          <input
            type={type}
            required
            placeholder=" "
            className="peer w-full bg-transparent text-white outline-none placeholder-transparent focus:ring-2 focus:ring-blue-400 rounded-lg p-2"
          />
        )}
        <label
          className="absolute left-3 top-3 text-gray-400 text-sm transition-all
                     peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400
                     peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-400"
        >
          {label}
        </label>
      </div>
    </div>
  );
}
