import React from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

const Herosection = () => {
  return (
    <div className='relative h-screen w-full justify-center text-center text-white'>
      <div className='absolute top-0 h-screen w-full'>
        <motion.img
          initial={{height:0}}
          animate={{height: '100%'}}
          transition={{duration:1,}}
          className='h-screen w-full object-cover object-bottom' 
          src='./furniture04.jpg'/>
      </div>
      <div className='relative top-0 py-28 z-30 m-auto space-y-4 w-full h-screen bg-gradient-to-b from-black/50 to-black/20'>
        <h3 className='text-md  font-bold uppercase'>Top Trending</h3>
        <motion.h3 
          initial={{y: -80}}
          animate={{y:0}}
          transition={{duration: 1, delay: 0.2, ease: 'easeIn'}}
          className='text-[4em] md:text-[6em] font-greatVibes'>
            Save <span className='text-[#F0C445]'>Money</span>.<br/> <span className='text-[#F0C445]'>Live</span> Better
        </motion.h3>
        <p className='md:w-1/3 mx-auto text-center text-sm md:text-md font-semibold'>The question of what you want to own is actually the question of  how you want to live your life.</p>
        <Link to='/sign-in' className='text-yellow underline font-bold text-xl'>
          Sign In & Get your Now!
        </Link>
      </div>
    </div>
  )
}

export default Herosection