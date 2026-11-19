import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './components/Card'
import Button from './components/Button'

const App = () => {

  const[userData,setUserData] = useState( JSON.parse(localStorage.getItem("res")) || [])
  const[index,setIndex] = useState( Number(localStorage.getItem("page")) || 3)


  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=24`)
    setUserData(response.data)
    localStorage.setItem("res",JSON.stringify(response.data))
    localStorage.setItem("page",index)
    console.log(response.data)
  }

  useEffect(function(){
    getData()
  },[index])

  let printUserData = <h3 className='text-gray-400 font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs'>Loading</h3>

  if(userData.length>0){
    printUserData = userData.map(function(elem,idx){
      return <div key={idx}>
        <Card elem={elem}/>
      </div>
    })
  }

  return (
    <div className='h-screen bg-black overflow-auto text-white p-4'>

      <div className='flex flex-wrap mt-4 p-5 gap-4'>
        {printUserData}
      </div>

      <div className='flex justify-evenly p-4 items-center'>
        <Button
          disabled = {index === 1}
          onClick={() => {
            setIndex(prev => prev - 1)
            setUserData([])
          }}
        >
        Prev
        </Button>

        <h4 className='text-lg font-bold'>Page {index}</h4>

        <Button
          onClick={() => {
            setIndex(prev => prev + 1)
            setUserData([])
          }}
        >
        Next
        </Button>
      </div>
    </div>
  )
}

export default App
