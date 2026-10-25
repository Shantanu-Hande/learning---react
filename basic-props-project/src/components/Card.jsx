import React from 'react'

const Card = (props) => {
  return (
   <div className="flex-1 min-w-0 flex flex-col items-center bg-white border-2 !p-5 rounded-2xl">
      <img className="w-full h-[40vh] object-cover" src={props.img} alt="" />
      <h2>{props.name}</h2>
      <h2>Rs.{props.price}Cr</h2>
    </div>
  )
}

export default Card
