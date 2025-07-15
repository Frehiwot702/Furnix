import React from 'react'

const Source = () => {
  return (
    <div className='grid md:grid-cols-2 gap-5 p-5 md:p-10  font-Roboto'>
        
        <div className='md:px-16 space-y-4 my-auto'>
            <h3 className='text-5xl font-bold'>Sourced From Sustainable Forests .</h3>
            <p className='text-justify'>We care about the origin of the wood. The wood we use comes from responsibility managed forests, including forests we manage under accredited international certificate.
            </p>
        </div>
        <div>
            <img src='./wood.jpg' className='w-full h-96 object-cover rounded-xl'/>
        </div>
    </div>
  )
}

export default Source