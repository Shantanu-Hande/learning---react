import { useEffect, useState } from "react"

const App = () => {

  let[count1,setCount1] = useState(0)
  let[count2,setCount2] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setCount1(++count1)
      console.log("Count1 is Rendered")
    },2000)
  },[count2])


  return (
    <div className='h-screen w-full flex flex-col items-center gap-10 justify-center text-4xl text-white'>
      <h1>{count1}</h1>
      <button className="border-2 p-4" onClick={() => setCount1(++count1)}>Increment</button>
      <h1>{count2}</h1>
      <button className="border-2 p-4" onClick={() => setCount2(++count2)}>Increment</button>
    </div>
  )
}

export default App
