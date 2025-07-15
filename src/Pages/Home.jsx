import React from 'react'
import About from '../Components/HomePage/About'
import Features from '../Components/HomePage/Features'
import LatestFurniture from '../Components/HomePage/LatestFurniture'
import Source from '../Components/HomePage/Source'
import Herosection from '../Components/Common/Herosection'

const Home = () => {
  return (
    <div className='font-Roboto'>
        <Herosection/>
        <About/>
        <Features/>
        <LatestFurniture/>
        <Source/>
    </div>
  )
}

export default Home