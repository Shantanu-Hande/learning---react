import React from 'react'
import Men from './Men'
import Women from './Women'
import { NavLink, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div className='flex flex-col items-center gap-5'>
      <div className='flex items-center gap-5'>
        <NavLink to='/product/men'
        className={({isActive}) => isActive ? "text-red-500" : "text-white"}
        >
          Men
        </NavLink>
        <NavLink to='/product/women'
        className={({isActive}) => isActive ? "text-red-500" : "text-white"}
        >
          Women
        </NavLink>    
      </div>
      <Outlet/>
    </div>
  )
}

export default Product
