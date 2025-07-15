import React from 'react'

const Features = () => {
  return (
    <div className='grid md:grid-cols-2 gap-10 p-10 font-Roboto'>
        <div>
            <img src='./sofa2.jpeg' className='w-full h-96 object-cover rounded-xl'/>
        </div>
        <div className='md:px-8 w-full space-y-4 my-auto'>
            <h3 className='text-5xl font-bold'>Quality Keeps Us Moving Forward.</h3>
            <p className='text-justify'>We have more than 10 years of exerience producing and exploring furniture for clients locally and internationally. More than
                10 million pieces of furniture have been delivered to families and businesses around the world.
            </p>
        </div>
    </div>
  )
}

export default Features