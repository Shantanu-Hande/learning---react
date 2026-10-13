import React from 'react'

const Card = ({title,price,image}) => {
  return (
    <div>
      <div className="card">
        <img src={image} />
        <h1>{title}</h1>
        <p>{price}</p>
        <button>Buy Now</button>
      </div>
    </div>
  )
}

export default Card
