import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white min-h-screen flex flex-col items-center py-16 px-6 relative">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
      >
        Get In Touch
      </motion.h1>

      {/* Glassmorphic Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl w-full grid md:grid-cols-2 gap-10 p-10 rounded-3xl shadow-2xl border border-gray-700
                   bg-white/10 backdrop-blur-md"
      >
        {/* Left Info Panel */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-3xl font-semibold text-blue-400">
            Contact Information
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Have questions about our cars or services? Reach out — we’d love to
            hear from you.
          </p>
        </div>

        {/* Right Form Panel */}
        <div className="space-y-6 text-gray-300">
          <div className="flex flex-col gap-3 text-blue-400">
            <span>123 Modern Street, Phnom Penh, Cambodia.</span>
            <span>Phone number: +855 96 33 99 779</span>
            <span>Email: support@cardealership.com</span>
          </div>

          {/* Form */}
          <motion.form
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col space-y-5"
          >
            {/* Name Input */}
            <div className="relative p-0.5 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500">
              <div className="bg-gray-900/70 rounded-2xl p-3 shadow-lg">
                <input
                  type="text"
                  required
                  placeholder=" "
                  className="peer w-full bg-transparent text-white outline-none placeholder-transparent"
                />
                <label
                  className="absolute left-3 top-3 text-gray-400 text-sm transition-all
                                   peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400
                                   peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-400"
                >
                  Your Name
                </label>
              </div>
            </div>

            {/* Email Input */}
            <div className="relative p-0.5 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500">
              <div className="bg-gray-900/70 rounded-2xl p-3 shadow-lg">
                <input
                  type="email"
                  required
                  placeholder=" "
                  className="peer w-full bg-transparent text-white outline-none placeholder-transparent"
                />
                <label
                  className="absolute left-3 top-3 text-gray-400 text-sm transition-all
                                   peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400
                                   peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-400"
                >
                  Your Email
                </label>
              </div>
            </div>

            {/* Message Textarea */}
            <div className="relative p-0.5 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500">
              <div className="bg-gray-900/70 rounded-2xl p-3 shadow-lg">
                <textarea
                  required
                  rows={4}
                  placeholder=" "
                  className="peer w-full bg-transparent text-white outline-none placeholder-transparent resize-none"
                />
                <label
                  className="absolute left-3 top-3 text-gray-400 text-sm transition-all
                                   peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400
                                   peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-400"
                >
                  Your Message
                </label>
              </div>
            </div>
          </motion.form>

          {/* Send Button */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px #3b82f6" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 py-3 w-[50%] rounded-lg font-semibold text-white shadow-xl"
          >
            Send Message
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
