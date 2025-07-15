import React, { useContext, useEffect, useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { MdPerson } from "react-icons/md";
import { furniture } from '../../Store/Data'
import { PiGlobe } from "react-icons/pi";
import { HiShoppingCart } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { IoHeart } from "react-icons/io5";
import { ProductContext } from '../../Store/context';
import { GiHamburgerMenu } from "react-icons/gi";

const Topbar = () => {

    
    const [menuOpen, setMenuOpen] = useState(false)

    const {products} = useContext(ProductContext)

    const likedCount = products.filter((item) => item.isLiked == true).length
    const cartCount = products.filter((item) => item.addedToCart == true).length

    const handleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    
  
  return (
    <div className='w-full grid grid-cols-3 md:grid-cols-3 md:px-16 py-2 md:py-5 border-b-2 border-gray-100 items-center fixed z-40 bg-white '>
        <div>
            <h3 className='text-2xl font-bold font-Roboto text-[#2F5266]'>FURNX</h3>
        </div>

        {/* desktop view menu */}
        <nav className='hidden md:flex w-full mx-auto'>
            <ul className='w-full flex justify-center space-x-10 text-sm font-bold '>
                <li className='active:text-[#F0C445]'>
                    <Link to ='/'> HOME</Link></li>
                <li className='active:text-[#F0C445]'>
                    <Link to='/'>ABOUT</Link></li>
                <li className='active:text-[#F0C445]'>
                    <Link to='/'>SHOP</Link></li>
                <li className='active:text-[#F0C445]'> 
                    <Link to='/'>CONTACT</Link></li>
            </ul>
        </nav>

        {/* Mobile view menu */}
        <nav className='md:hidden w-full mx-auto'>
            <button 
                onClick={handleMenu}
                className='mx-auto'>
                    <GiHamburgerMenu size={25}/>
                </button>
            {
                menuOpen ?  <ul className='w-full absolute bg-white justify-center text-sm font-bold'>
                <li className='active:text-[#F0C445]'>
                    <Link to ='/'> HOME</Link></li>
                <li className='active:text-[#F0C445]'>
                    <Link to='/'>ABOUT</Link></li>
                <li className='active:text-[#F0C445]'>
                    <Link to='/'>SHOP</Link></li>
                <li className='active:text-[#F0C445]'> 
                    <Link to='/'>CONTACT</Link></li>
            </ul> : <></>
            }
           
        </nav>
        {/* <div className='flex items-center justify-between w-full space-x-3'>
            <div className='w-full '>
                <input 
                    type='text' 
                    placeholder='Search for Product'
                    className='border border-[#2F5266]/5 rounded-full px-4 py-2 text-sm w-full'/>
                    
            </div>
            <FiSearch size={20} className=''/>
        </div> */}
        <div className='flex items-center justify-end space-x-5'>
            <PiGlobe size={20} className='hidden md:visible'/>
            <div className='relative'>
                <div className='absolute w-5 h-5 text-sm text-center font-bold text-white justify-end ml-5 bg-red-400 rounded-full'>{cartCount}</div>
                <HiShoppingCart size={28}/>
            </div>
            <div className='relative'>
                <div className='absolute w-5 h-5 text-sm text-center font-bold text-white justify-end ml-5 bg-red-400 rounded-full'>{likedCount}</div>
                <IoHeart size={28}/>
            </div>
            
            <img
                className='w-8 h-8 object-cover rounded-full border border-yellow' 
                src='./avatar.jpg'/>
            <button className='hidden md:visible bg-[#2F5266] text-white rounded-full px-4 py-2 items-center text-sm font-bold'>Sign up</button>
            {/* <MdPerson/> */}
        </div>
    </div>
  )
}

export default Topbar