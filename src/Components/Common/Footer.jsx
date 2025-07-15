import React from 'react'

const Footer = () => {
  return (
    <div className='w-full grid md:grid-cols-4 gap-5 bg-[#2B2F2E] px-8 py-16 text-white'>
      <div className='md:col-span-2 px-3 space-y-5'>
        <h3 className='font-bold text-3xl'>Contact Us</h3>
        <input 
          id='email'
          name='email'
          type='email'
          className='px-3 py-1 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow text-black'
          placeholder='example@gmail.com'
        />
        <textarea 
          id='message'
          name='message' 
          className='px-3 h-[12em] py-1 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow text-black'
          placeholder='Message us'
        />
        <button
          className='bg-yellow px-4 py-1 rounded-md font-bold'
        >
          Send Message
        </button>
      </div>

      <div className='md:col-span-2 flex flex-col items-center text-center my-auto'>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d135121.244291044!2d38.69558078046013!3d8.964400010888893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1743447428464!5m2!1sen!2set"  height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        <h3 className='text-center font-bold font-dancing text-5xl text-yellow'>Dont forget to Visit Us!</h3>
        <ul className='text-center pt-5 font-semibold'>
          <li> Location: In Addis Ababa, Ethiopia</li>
          <li> Phone: +251 978445412 / 978665412</li>
          <li> Email: furnxInfo@gmail.com</li>
        </ul>
        
      </div>
      
    </div>
  )
}

export default Footer