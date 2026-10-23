import {ArrowRight} from 'lucide-react'

const RightCardContent = (props) => {
    return (
        <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className='bg-white text-xl font-semibold rounded-full h-12 w-12 flex items-center justify-center'>{props.id+1}</h2>
            <div>
                <p className='text-lg leading-relaxed text-white mb-14'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, alias! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, eveniet.</p>
                <div className='flex justify-between'>
                    <button className='bg-white font-medium py-2 px-8 rounded-full'>{props.tag}</button>
                    <button className='bg-white font-medium py-2 px-3 rounded-full'><ArrowRight /></button>
                </div>
            </div>
        </div>
    )
}

export default RightCardContent
