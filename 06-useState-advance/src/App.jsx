import React, { useState } from 'react'
// import Counter from './components/Counter'

const App = () => {

  const[count,setCount]=useState(0)

  return (
    <div className='main'>
      {/* <Counter/> */}
      <div className="counter">{count}</div>
      <div className="options">
        <button className='increment'>Increment</button>
        <button className='decrement'>Decrement</button>
        <button className='reset'>Reset</button>
      </div>
    </div>
  )
}

export default App
