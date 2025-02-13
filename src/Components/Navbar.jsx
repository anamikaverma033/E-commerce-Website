import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoMenuOutline } from "react-icons/io5";
import { RiArrowLeftSLine } from "react-icons/ri";
import { ShopContext } from '../Context/ShopContext';
const Navbar = () => {
    const [visible,setVisible] = useState(false);
    const {showSearch,setShowSearch} = useContext(ShopContext);

  return (
    <div className='flex items-center justify-between py-5 font-medium bg-black-500'>
      <Link className='cursor-pointer' to='/'><img src='/logo.png' alt='' width={50} /></Link>
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1'>
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
            <p>COLLECTION</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
      </ul>
      <div  className='flex items-center gap-6'>
        <IoSearch className='cursor-pointer' onClick={()=>setShowSearch(true)}/>
        <div className='group relative'>
            <FaRegUser />
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                    <p className='cursor-pointer hover:text-black'>My Profile</p>
                    <p className='cursor-pointer hover:text-black'>Orders</p>
                    <p className='cursor-pointer hover:text-black'>Logout</p>
                </div>
            </div>
        </div>
            
        <Link to='/cart' className='relative'>
            <p className='absolute right-[-2px] bottom-[15px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[10px]'>10</p>
            <FiShoppingCart />
        </Link>
        <IoMenuOutline onClick={()=>setVisible(true)} className='w-5 cursor-pointer sm:hidden' />
      </div>
      {/* sidebar menu for small screen */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600'>
            <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                <RiArrowLeftSLine />
                <p>Back</p>
            </div>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
 