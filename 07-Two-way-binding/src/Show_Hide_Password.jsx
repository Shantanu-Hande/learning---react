import React, { useState } from 'react'

const Show_Hide_Password = () => {

  const[password,setPassword]=useState("")
  const[show,setShow]=useState(false)

  const state = show ? "Hide" : "Show"
  const type = show ? "text" : "password"

  const toggle = () =>{
    setShow(prev => !prev)
  }

  const updatePassword = (e) =>{
    setPassword(e.target.value)
  }

  const reset = () => {
    setPassword("")
    setShow(false)
  }

  return (
    <form className='p-5 border-1 border-white flex gap-3'>
      <input 
        type={type} 
        placeholder='Password' 
        className='border-1 border-black text-white p-2 rounded-3xl'
        value={password}
        onChange={updatePassword}
        required
        />
      <button 
        type="button"
        disabled = {password.length === 0}
        className='border-1 border-black bg-black text-white p-3 rounded-3xl cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed' 
        onClick={toggle}>{state}</button>
        <button 
        type="button"
        disabled = {password.length === 0}
        className='border-1 border-black bg-black text-white p-3 rounded-3xl' 
        onClick={reset}>Reset</button>
    </form>
  )
}

export default Show_Hide_Password
