import React from 'react'
import Navbar from './Navbar'
import Page1Content from './Page1Content'

const Section1 = () => {
  return (
    <div className='w-full h-screen overflow-y-hidden'>
        <Navbar/>
        <Page1Content/>
    </div>
  )
}

export default Section1