import React from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <div className='text-center'>
      <div className='p-8'>

        <div className='rounded-lg md:flex mx-auto'>
            <div className='md:w-1/2 relative'>
              <div className='absolute p-10 text-start space-y-2 text-white'>
              
                  <Link
                    to='/'
                    className='text-xl uppercase'
                    >FURNIX</Link>
                    <p className='text-4xl font-bold'>The question of what you want to own is actually the question of how you want to live your life.</p>
                  <h3></h3>
              </div>
              <img src='./chair2.jpg' className='h-screen w-full rounded-3xl object-cover'/>
              
            </div>
            <div className='m-auto space-y-3 md:w-1/2'>
              <h3 className='text-7xl font-bold font-dancing'>Sign In</h3>
              <h3>Welcome back!</h3>
              <form
                className='grid w-2/3 mx-auto p-5 gap-4 text-start'
              >
                <label className='font-bold text-gray'>Email</label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  placeholder='example@gmail.com'
                  className='w-full focus:outline-none focus:ring-yellow border border-gray  px-4 py-2 rounded-md'
                />

                <label className='font-bold text-gray'>Password</label>
                <input
                  id='password'
                  name='password'
                  type='password'
                  placeholder='password'
                  inputMode='hidden'
                  className='w-full focus:outline-none focus:ring-yellow border border-gray px-4 py-2 rounded-md'
                />
                <h3 className='text-sm text-center'>Don't have an account? <span>Sign Up</span></h3>

                <button
                  className='bg-yellow font-bold md:w-1/2 mx-auto py-2 rounded-md hover:bg-yellow/20 hover:border hover:border-yellow'
                >
                  Sign In
                </button>
              </form>
            </div>
        </div>
      </div>
      {/* <div>
        <img 
          src='./furniture03.jpg'
          className='w-full h-screen rounded-full object-cover'
        />
      </div> */}
    </div>
  )
}

export default Signin