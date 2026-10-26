import { useState } from "react"

const App = () => {

  let[count,setCount] = useState(20)
  
  return (
    <div className='h-screen w-full flex flex-col items-center justify-center text-4xl'>
      <h1>{count}</h1>
      <button className="border-2 p-4" onClick={() => setCount(--count)}>Decrement</button>
    </div>
  )
}

export default App
