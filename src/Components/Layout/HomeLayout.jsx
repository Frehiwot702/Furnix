import React from 'react'
import Topbar from '../Common/Topbar'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import { Outlet } from 'react-router-dom'
import Herosection from '../Common/Herosection'

const HomeLayout = () => {
  return (
    <>
        <Topbar/>
        {/* <Header/> */}
        <Outlet/>
        <Footer/>
    </>
  )
}

export default HomeLayout