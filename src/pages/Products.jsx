import React from 'react'

export default function Products() {
  return (
    <div className='bg-gradient-to-b from-gray-900 to-black py-10 px-6 rounded-lg'>
        <h1 className='text-3xl text-center mb-10 font-bold text-white'>Cars for sale</h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-center justify-items-center'>

          {/* Product Car 1 */}
          <div className='max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 '>
            <img src="car/corolla.png" alt="" />
            <div className='p-5'>
              <h2 className='text-xl font-semibold text-gray-800 mb-8'>Toyota Corolla</h2>
              <p className='text-sm text-gray-800 mb-3'>2021 • Petrol • 25,000 km</p>
              <div className='flex justify-between items-center'>
                <span className='text-xl font-bold text-green-600'>$15,000</span>
                <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 mx-3 mt-3'>Buy Now</button>
              </div>
            </div>
          </div>
          {/* car 2*/}
          <div className='max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 '>
            <img src="car/corolla.png" alt="" />
            <div className='p-5'>
              <h2 className='text-xl font-semibold text-gray-800 mb-8'>Toyota Corolla</h2>
              <p className='text-sm text-gray-800 mb-3'>2021 • Petrol • 25,000 km</p>
              <div className='flex justify-between items-center'>
                <span className='text-xl font-bold text-green-600'>$15,000</span>
                <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 mx-3 mt-3'>Buy Now</button>
              </div>
            </div>
          </div>
          {/* car 3*/}
          <div className='max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 '>
            <img src="car/corolla.png" alt="" />
            <div className='p-5'>
              <h2 className='text-xl font-semibold text-gray-800 mb-8'>Toyota Corolla</h2>
              <p className='text-sm text-gray-800 mb-3'>2021 • Petrol • 25,000 km</p>
              <div className='flex justify-between items-center'>
                <span className='text-xl font-bold text-green-600'>$15,000</span>
                <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 mx-3 mt-3'>Buy Now</button>
              </div>
            </div>
          </div>
          {/* car 4*/}
          <div className='max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 '>
            <img src="car/corolla.png" alt="" />
            <div className='p-5'>
              <h2 className='text-xl font-semibold text-gray-800 mb-8'>Toyota Corolla</h2>
              <p className='text-sm text-gray-800 mb-3'>2021 • Petrol • 25,000 km</p>
              <div className='flex justify-between items-center'>
                <span className='text-xl font-bold text-green-600'>$15,000</span>
                <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 mx-3 mt-3'>Buy Now</button>
              </div>
            </div>
          </div>


        </div>
    </div>
  )
}
