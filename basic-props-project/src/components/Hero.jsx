import React from 'react'
import Card from './Card'

const Hero = (props) => {
  return (
    <div className='h-[70vh] w-full bg-gray-400 !p-10 flex items-center justify-around gap-10 '>
      {props.cars.map((el,idx) => {
        return <Card key={idx} img={el.src} name={el.name} price={el.price}/>
      })}
    </div>
  )
}

export default Hero
