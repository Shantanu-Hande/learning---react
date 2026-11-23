import React from 'react'
import { useNavigate } from 'react-router-dom'

const AboutUs = () => {

  let navigate = useNavigate()


  return (
    <div className='flex flex-col items-center'>
      <div className='flex gap-5 m-2 text-lg'>
        <button 
      onClick={() => {
        navigate('/')
      }}
      className='rounded p-2 bg-gray-600  text-black active:scale-95'>
        Return Home Page
      </button>
      <button 
      onClick={() => {
        navigate(-1)
      }}
      className='rounded p-2 bg-gray-600 text-black active:scale-95'>
        Back
      </button>
      <button 
      onClick={() => {
        navigate(1)
      }}
      className='rounded p-2 bg-gray-600 text-black active:scale-95'>
        Next
      </button>
      </div>
      About Page
    </div>
  )
}

export default AboutUs
