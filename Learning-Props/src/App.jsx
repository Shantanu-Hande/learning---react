import React from 'react'
import Card from './components/Card'
import MsgBox from './components/MsgBox'

const App = () => {
  return (
    <div className='parent'>
      <Card title="Iphone" price="Rs.1,00,000" image={"https://images.unsplash.com/photo-1758186338446-27257a6f9831?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"}/>
      <Card title="Laptop" price="Rs.50,000" image={"https://images.unsplash.com/photo-1650265424401-9d34eecae180?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"}/>
      <Card title="TV" price="Rs.75,000" image={"https://plus.unsplash.com/premium_photo-1681236323432-3df82be0c1b0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"}/>
      <MsgBox userName="Shantanu" textColor="yellow"/>
      <MsgBox userName="Yash" textColor="Blue"/>
    </div>
  )
}

export default App
