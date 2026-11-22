import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-8 bg-gray-400'>
        <h1 className='text-black font-bold text-2xl'>Growww</h1>
        <div className='flex items-center gap-4'>
            <NavLink to="/" 
            className={({ isActive }) =>isActive ? "text-red-500" : "text-black"}
            >
              Home
            </NavLink>
            <NavLink to="/about" 
            className={({ isActive }) =>isActive ? "text-red-500" : "text-black"}
            >
              About Us
            </NavLink>
            <NavLink to="/contact" 
            className={({ isActive }) =>isActive ? "text-red-500" : "text-black"}
            >
              Contact
            </NavLink>
            <NavLink to="/product" 
            className={({ isActive }) =>isActive ? "text-red-500" : "text-black"}
            >
              Product
            </NavLink>
        </div>
      
    </div>
  )
}

export default Navbar
