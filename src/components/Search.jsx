import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { Separator } from "@/components/ui/separator"
  import { BsSearch } from "react-icons/bs";
  import Data from '@/Shared/Data';

function Search() {
  return (
    <div className='p-2 md:p-5 bg-white rounded-md md:rounded-full flex-col md:flex md:flex-row gap-10 px-5 items-center
     w-[60%]'>
        <Select>
        <SelectTrigger className='w-[180px]outline-none md:border-none w-full shadow-none'>
            <SelectValue placeholder="Cars" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="New">New</SelectItem>
            <SelectItem value="Old">Old</SelectItem>
           
        </SelectContent>
        </Select>
        <Separator orientation="vertical" className='hidden md:block'/>

        <Select>
        <SelectTrigger className='w-[180px]outline-none md:border-none w-full shadow-none'>
            <SelectValue placeholder="Car Makes" />
        </SelectTrigger>
        <SelectContent>
            {Data.Carmakes.map((marker,index)=>(
                <SelectItem value={marker.name}>{marker.name}</SelectItem>
            ))}
            
        </SelectContent>
        </Select>
        <Separator orientation="vertical" className='hidden md:block'/>
        <Select>
        <SelectTrigger className='w-[180px]outline-none md:border-none w-full shadow-none'>
            <SelectValue placeholder="Pricing" />
        </SelectTrigger>
        <SelectContent>
            {Data.Pricing.map((price,index)=>(
                <SelectItem value={price.amount}>{price.amount}</SelectItem>
            ))}
            
        </SelectContent>
        </Select>
        <Separator orientation="vertical" className='hidden md:block'/>
        <div>
        <BsSearch className='text-[50px] bg-[#177496] rounded-full p-3 text-white hover:scale-105 
        transition-all cursor-pointer'/>
        </div>
    </div>
  )
}

export default Search