
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full w-80 relative shrink-0 overflow-hidden rounded-4xl'>
        <img className='h-full w-full object-[65%_center] object-cover' src={props.img} alt="" />
        <RightCardContent id={props.id} tag={props.tag}/>
    </div>
  )
}

export default RightCard
