import React, { useEffect, useState } from 'react'

const App = () => {

  const[a,setA] = useState(0)
  const[b,setB] = useState(0)

  useEffect(function(){
    console.log("A has changed")
  },[a])

  return (
    <div className='main'>
      <h1>A is {a}</h1>
      <button onClick={() => setA(prev => prev+1)}>Increase</button>
      <h1>B is {b}</h1>
      <button onClick={() => setB(prev => prev-1)} >Decrement</button>
    </div>
  )
}

export default App
