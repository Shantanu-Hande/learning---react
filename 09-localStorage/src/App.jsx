import React from 'react'

const App = () => {

  const user = {
    userName : "Shantanu",
    age : 22,
    city : "Ulhasnagar"
  }

  localStorage.setItem("user",(JSON.stringify(user)))
  let val = JSON.parse(localStorage.getItem("user"))
  console.log(val)

  return (
    <div className='text-white'>
      Hey
    </div>
  )
}

export default App
