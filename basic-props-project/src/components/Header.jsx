import React from 'react'

const Header = () => {
  return (
    <div className='h-[15vh] w-full bg-gray-600 flex items-center justify-between !px-10 '>
      <h1 className=''>LOGO</h1>
      <ul className='flex items-center gap-10'>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT US</li>
      </ul>
    </div>
  )
}

export default Header
