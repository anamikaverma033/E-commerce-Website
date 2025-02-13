import React from 'react'
import { RiExchangeFundsFill } from "react-icons/ri";
import { BiBadgeCheck } from "react-icons/bi";
import { BiSupport } from "react-icons/bi";
const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div className=''>
        <RiExchangeFundsFill className='w-[250px] h-9 text-gray-950' />
        <p className='font-semibold'>Easy Exchange Policy</p>
        <p className='text-gray-400'>We offer hassle free exchange policy</p>
        </div>
        <div className=''>
        <BiBadgeCheck className='w-[250px] h-9 text-gray-950' />
        <p className='font-semibold'>7 Days Return Policy</p>
        <p className='text-gray-400'>We privide 7 days free return policy</p>
        </div>
        <div className=''>
        <BiSupport className='w-[250px] h-9 text-gray-950' />
        <p className='font-semibold'>Best customers support</p>
        <p className='text-gray-400'>We provide 24/7 customer support</p>
        </div>
    </div>
  )
}

export default OurPolicy
