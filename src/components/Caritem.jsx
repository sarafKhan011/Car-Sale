import React from 'react'
import { LuFuel } from "react-icons/lu"
import { IoSpeedometerOutline, IoOpenOutline } from "react-icons/io5"
import { TbManualGearbox } from "react-icons/tb"
import { Separator } from '@/components/ui/separator' // fixed import

function Caritem({ car }) {
  return (
    <div className='rounded-xl bg-white border hover:shadow-md cursor-pointer relative'>
      <h2 className='absolute m-2 bg-green-500 px-2 rounded-full text-sm text-white'>New</h2>

      <img
        src={car?.images?.[0]?.imageUrl || '/placeholder.jpg'} // fallback image
        alt={car?.name || 'Car Image'}
        width="100%"
        height={250}
        className='rounded-t-xl object-cover h-64 w-full'
      />

      <div className='p-4'>
        <h2 className='font-bold text-black text-lg mb-2'>{car?.name || 'Unnamed Car'}</h2>

        <Separator className='my-2' />

        <div className='grid grid-cols-3 gap-2 mb-4'>
          <div className='flex flex-col items-center'>
            <LuFuel className='text-lg mb-1' />
            <h2 className='text-sm'>{car?.miles || 'N/A'}</h2>
          </div>
          <div className='flex flex-col items-center'>
            <IoSpeedometerOutline className='text-lg mb-1' />
            <h2 className='text-sm'>{car?.fuelType || 'N/A'}</h2>
          </div>
          <div className='flex flex-col items-center'>
            <TbManualGearbox className='text-lg mb-1' />
            <h2 className='text-sm'>{car?.gearType || 'N/A'}</h2>
          </div>
        </div>

        <Separator className='my-2' />

        <div className='flex items-center justify-between mt-2'>
          <h2 className='font-bold text-xl text-black'>${car?.price || '0'}</h2>
          <h2 className='text-blue-600 text-sm flex items-center gap-2'>
            View Details <IoOpenOutline />
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Caritem
