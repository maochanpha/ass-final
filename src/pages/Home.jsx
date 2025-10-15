import React from 'react'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-gradient-to from-gray-700 to-gray-900 text-white">
      {/* Hero Banner */}
      <div className="relative w-full rounded-lg overflow-hidden">
        <img src="/car/banner.png" alt="Car Banner" className="w-full h-[508px] object-cover opacity-90" />
        {/* Overlay text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
          <h1 className="text-5xl font-bold mb-4">Drive Your Dream Car</h1>
          <p className="text-lg max-w-2xl mb-6">Find the perfect car that matches your lifestyle and budget at Apex Auto.</p>
          <a href="/products" className="bg-white hover:bg-black text-black hover:text-white px-6 py-3 rounded-lg font-semibold transition">Shop Now</a>
        </div>

        <div>

        </div>
      </div>
    </div>
  )
}
