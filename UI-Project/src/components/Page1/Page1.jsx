import React from 'react'
import Navbar from './Navbar'
import LeftText from './LeftText'
import Center from './Center'
import ImageContainer from './ImageContainer'

const Page1 = () => {
  return (
    <div className='h-screen w-full'>
      <Navbar/>
      <LeftText/>
      <Center/>
      <ImageContainer/>
    </div>
  )
}

export default Page1
