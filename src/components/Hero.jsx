import React from 'react'
import Search from './Search'
function Hero() {
  return (
    <div>
        <div className='flex flex-col items-center p-10 py-20 gap-10 h-[650px] w-full bg-[#82c1d4]'>
            <h2 className='text-lg '>Find cars for sale for rent near you</h2>
            <h2 className='text-[60px] font-bold'>Find Your Dream Car</h2>

            <Search/>
            <img src='/3d-car.png' height={200}className='mt-0'/>
        </div>
    </div>
  )
}

export default Hero