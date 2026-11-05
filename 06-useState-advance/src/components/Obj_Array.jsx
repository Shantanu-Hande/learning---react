import React, { useState } from 'react'

const Obj_Array = () => {

    const[user,setUser]=useState({name:"Shantanu",age:22})
    const[arr,setArr] = useState([10,20,30])

    const ObjClicked = () => {
        const newUser = {...user}
        newUser.name = "Yash"
        newUser.age = 23
        setUser(newUser)
    }

    const ArrClicked = () => {
        const newArr = [...arr,99]
        setArr(newArr) 
    }

  return (
    <div className='h-screen flex flex-col justify-center items-center gap-10'>
      {/* <h1 className='text-7xl text-white'>{user.name}, {user.age}</h1>
      <button className='w-full text-7xl text-white bg-gray-500 border-2 p-5 rounded-3xl' onClick={ObjClicked}>Click</button> */}
      {arr.map((num, index) => {
          return <h1 key={index} className='text-7xl text-white'>{num}</h1>
      })}
      <button className='w-full text-7xl text-white bg-gray-500 border-2 p-5 rounded-3xl' onClick={ArrClicked}>Click</button>
    </div>
  )
}

export default Obj_Array
