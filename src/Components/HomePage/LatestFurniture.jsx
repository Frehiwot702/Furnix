import React, { useContext, useState } from 'react'
import {motion} from 'framer-motion'
import { furniture } from '../../Store/Data'
import { IoIosStar } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoMdHeart } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";
import { ProductContext } from '../../Store/context';

const LatestFurniture = () => {

    
    const {products, setProducts} = useContext(ProductContext);
    const handleLikes = (id) => (
        setProducts(
            products?.map((item) =>
              item.id === id ? { ...item, isLiked: !item.isLiked } : item
            )
        )
    )

    const handleCart = (id) => {
        setProducts(
            products?.map((item) =>
                item.id === id ? { ...item, addedToCart: !item.addedToCart } : item
            )
        )
    }
  
    const furnitures = products?.slice(0,4).map((item)=> {
        return (
            <div>
                <div className='relative group'>
                    <img src={item.image} className='w-full h-64 object-cover rounded-lg'/>
                    <div className='h-full w-full hidden group-hover:visible group-hover:flex flex-col justify-center items-center absolute bg-black/50 top-0 z-10 rounded-lg transition-all duration-200 delay-150 ease-in'>
                        
                           
                            <motion.div
                                initial={{ scale: 1 }}
                                animate={{ scale: item.isLiked? 1.5 : 1}}
                                transition={{ type: 'spring', stiffness: 300 }}
                                className="cursor-pointer"
                                onClick={() => handleLikes(item.id)}
                            >
                                <IoMdHeart className='hover:text-[#F0C445] cursor-pointer' size={25} fill={item.isLiked ? 'red' : 'white'}/> 
                            </motion.div>
                        
                        
                        <Link to='' className='text-white text-center  px-3 py-2 rounded-md hover:border-[#F0C445] hover:text-[#F0C445]'>
                            <IoEyeSharp className='hover:text-[#F0C445] cursor-pointer' size={25} fill='white'/>
                        </Link>
                    </div>
                </div>
                <div className='py-3 space-y-2'>
                    <h3 className='w-36 md:w-56 truncate text-sm'>{item.name}</h3>
                    <div className='flex'>
                        <IoIosStar fill='orange'/>
                        <IoIosStar fill='orange'/>
                        <IoIosStar fill='orange'/>
                        <IoIosStar fill='orange'/>
                        <IoIosStar fill='orange'/>
                    </div>
                    <h3 className='text-sm md:text-lg font-bold w-60 truncate'> {item.minPrice} - {item.maxPrice} ETB</h3>
                   {
                    item.addedToCart ?
                    <button
                        onClick={() => handleCart(item.id)}
                        className={`text-white border border-[#F0C445] bg-[#F0C445]  font-bold rounded-md w-full py-2 hover:bg-[#F0C445] hover:text-white text-sm` }>
                       Added to Cart
                    </button> :
                    <button
                        onClick={() => handleCart(item.id)}
                        className={`text-[#F0C445] border border-[#F0C445]  font-bold rounded-md w-full py-2 hover:bg-[#F0C445] hover:text-white text-sm` }>
                        Add to Cart
                    </button> 
                   }
                   
                  
                </div>
            </div>
        )
    })
    

  return (
    <div className='w-full p-5 md:px-16 my-24'>
        <div className='flex justify-between'>
            <div>
                <h3 className='text-3xl font-bold'>Latest Furnitures</h3>
                <h3>Our newest Products</h3>
            </div>
            <button className='underline hover:text-[#F0C445]'>View More</button>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-16 my-16'>
            {furnitures}
        </div>
    </div>
  )
}

export default LatestFurniture