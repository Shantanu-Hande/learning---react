import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'

const App = () => {

const cars = [
  {
    src: "https://images.unsplash.com/photo-1612956946912-b2d8e5fd65a8?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    name: "Audi",
    price: 1.25
  },
  {
    src : "https://images.unsplash.com/photo-1647524233188-24655c0ce197?q=80&w=875&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    name: "Lamborgini",
    price: 3.5 
  },
  {
    src: "https://images.unsplash.com/photo-1690506918773-af0e0a655549?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", 
    name: "Supra",
    price: 2.75
  }
]

  return (
    <div>
      <Header/>
      <Hero cars={cars}/>
      <Footer/>
    </div>
  )
}

export default App
