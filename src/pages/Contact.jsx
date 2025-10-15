import React from 'react'
import { motion } from 'framer-motion'
export default function Contact() {
  return (
   <div className="bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white min-h-screen flex flex-col items-center py-16 px-6">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
      >
        Get In Touch
      </motion.h1>
      
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="max-w-5xl w-full grid md:grid-cols-2 gap-10 bg-gradient-to-br from-gray-800/70 to-gray-900/90 p-10 rounded-2xl shadow-2xl border border-gray-700">
        <div className='flex flex-col justify-center space-y-6'>
          <h2 className=' text-3xl font-semibold text-blue-400'>Contact Information</h2>
          <p className='text-gray-300 leading-relaxed'>Have questions about our cars or services? Reach out — we’d love to hear from you.</p>
        </div>

        <div className='space-y-4 text-gray-300'>
          <div className='flex items-center gap-3'>
            <span className='text-blue-400'>123 Modern Street, Phnom Penh, Cambodia.</span>
          </div>
          <div className='flex items-center gap-3'>
            <span className='text-blue-400'>Phone number: +855 96 33 99 779</span>
          </div>
          <div className=''>
            <span className='text-blue-400'>Email: support@apexauto.com</span>
          </div>

          <motion.form whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} className="flex flex-col space-y-5"> 
            <input type="text" placeholder='Your Name' className='p-3 rounded-lg bg-gray-800/70 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline' />
            <input type="email" placeholder='Your Email' className='p-3 rounded-lg bg-gray-800/70 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline' />
            <textarea placeholder='Your Message' rows={4} className='p-3 rounded-lg bg-gray-800/70 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline resize-none' />
          </motion.form>
          <motion.button whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px #3b82f6" }}whileTap={{ scale: 0.95 }}className="bg-gradient-to-r from-blue-600 to-purple-600 py-3 w-[50%] rounded-lg font-semibold text-white shadow-lg">Send Message </motion.button>
        </div>
      </motion.div>

      
    </div>
  )
}
