import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-white items-center p-6'>
      <h1 className='text-black'>Growww</h1>
      <div className='flex items-center gap-4 text-xl p-2'>
        <NavLink to='/' 
        className={({ isActive }) =>isActive ? "text-red-500" : "text-black"}>
          Home
        </NavLink> 
        <NavLink to='/about' 
        className={({ isActive }) =>isActive ? "text-red-500" : "text-black"}>
          About
        </NavLink> 
        <NavLink to='/course' 
        className={({ isActive }) =>isActive ? "text-red-500" : "text-black"}
        >
          Course
        </NavLink>
        <NavLink to='/product' 
        className={({ isActive }) =>isActive ? "text-red-500" : "text-black"}
        >
          Product
        </NavLink> 
      </div>
    </div>
  )
}

export default Navbar
