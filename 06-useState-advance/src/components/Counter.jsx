import { useState } from 'react'

const Counter = () => {

  const [count, setCount] = useState(0)
  const status = count > 0 ? "Positive" : count < 0 ? "Negative" : "Zero"
  const evenOdd = count % 2 === 0 ? "Even" : "Odd" 

  return (
    <div className='h-screen flex flex-col justify-center items-center gap-5'>

      <h1 className='text-7xl font-bold'>
        {count}
      </h1>

      <div className='flex gap-3'>

        <button className='text-2xl bg-gray-500 text-black p-3 rounded-xl' onClick={() => setCount(prevCount => prevCount+1)}>
          Increment
        </button>

        <button className='text-2xl bg-gray-500 text-black p-3 rounded-xl disabled:opacity-30 disabled:cursor-not-allowed' disabled={count === 0} onClick={() => setCount(prevCount => Math.max(0, prevCount - 1))}>
          Decrement
        </button>

        <button className='text-2xl bg-gray-500 text-black p-3 rounded-xl' onClick={() => setCount(prevCount => prevCount+5)}>
          +5
        </button>

        <button className='text-2xl bg-gray-500 text-black p-3 rounded-xl' onDoubleClick={() => setCount(prevCount => prevCount*2)}>
          Double
        </button>

        <button className='text-2xl bg-gray-500 text-black p-3 rounded-xl' onClick={() => setCount(0)}>
          Reset
        </button>
      </div>

      <h1 className='text-7xl font-bold'>
        {status}
      </h1>

      <h2 className='text-5xl font-bold'>
        {evenOdd}
      </h2>

    </div>
  )
}

export default Counter