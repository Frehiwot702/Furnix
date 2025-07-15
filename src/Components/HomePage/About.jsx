import React from 'react'

const About = () => {
  return (
    <div className='my-24 space-y-16'>
        <div className='w-full grid md:grid-cols-3 p-5 space-y-5 md:px-16'>
            <div className='col-span-1 my-auto'>
                <h3 className='flex items-center gap-3 text-md uppercase font-bold text-[#2F5266]'>About Us </h3>
                <h3 className='text-5xl font-bold'>For Urban <br/> Living</h3>
            </div>
            <div className='col-span-2 md:px-5 text-gray-600 '>
                <p className='text-justify'>What makes us different is that my wife and I are obsessive about human beings making things by hand. Of course we prize good design, and skilled craftsmanship, and beautiful materials, but we have an added thing here which is the human sense, the feeling you get when you walk up to piece of furniture that somebody made. You can see that it’s handmade, and you can feel the difference.
                I think about every tree that is cut down, and the power and privilege we have to extend its life and to display its beauty in the furniture we make.
                </p>
            </div>
        </div>
        <div className='w-full grid grid-cols-3'>
            <div className='text-center space-y-3'>
                <h3 className='text-lg md:text-7xl font-semibold text-[#F0C445]'>900+</h3>
                <p className='text-gray-700 font-semibold'>Products built and sold</p>
            </div>
            <div className='text-center space-y-3'>
                <h3 className='text-lg md:text-7xl font-semibold text-[#F0C445]'>100+</h3>
                <p className='text-gray-700 font-semibold'>Happy & Loyal Customers</p>
            </div>
            <div className='text-center space-y-3'>
                <h3 className='text-lg md:text-7xl font-semibold text-[#F0C445]'>10+</h3>
                <p className='text-gray-700 font-semibold'>Years of production</p>
            </div>
        </div>
    </div>
  )
}

export default About