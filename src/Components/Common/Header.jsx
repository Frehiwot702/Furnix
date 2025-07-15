import React from 'react'

const Header = () => {
  return (
    <nav className='w-full mx-auto'>
      <ul className='w-full flex justify-center py-5 space-x-10 text-sm font-bold '>
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
  )
}

export default Header