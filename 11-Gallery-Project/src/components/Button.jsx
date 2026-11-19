
import React from 'react'

const Button = ({ children, onClick, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className='bg-gray-600 text-black active:scale-95 cursor-pointer text-lg rounded px-4 py-1 disabled:opacity-40 disabled:cursor-not-allowed'
    >
      {children}
    </button>
  )
}

export default Button
