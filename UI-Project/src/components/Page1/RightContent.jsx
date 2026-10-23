import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id="right" className='h-full flex rounded-4xl overflow-x-auto flex-nowrap gap-15 p-6 w-2/3'>
      {props.users.map(function(el,idx){
        return <RightCard key={idx} id={idx} img={el.img} tag={el.tag}  />
      })}
    </div>
  )
}

export default RightContent
