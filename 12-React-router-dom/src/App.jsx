import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import AboutUs from './pages/AboutUs'
import Product from './pages/Product'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='text-red-500'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />  
        <Route path='/about' element={<AboutUs/>}/> 
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product' element={<Product/>}/>
      </Routes>
    </div>
  )
}

export default App
