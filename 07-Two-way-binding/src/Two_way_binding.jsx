import { useState } from 'react'

const Two_way_binding = () => {
  const[title,setTitle]=useState("")


  const submitHandler = (e) => {
    e.preventDefault()
    console.log(`Form Submitted by ${title}`)

    setTitle("")

  }

  return (
    <div>
      <form onSubmit={(e) => submitHandler(e)}>
        <input 
          type="text" 
          placeholder='Enter a text'
          value={title}
          onChange={(e) => 
          setTitle(e.target.value)} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Two-way-binding
