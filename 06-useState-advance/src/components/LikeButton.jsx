import { Heart } from 'lucide-react';
import { useState } from 'react';

const LikeButton = () => {

  
  const [isLiked, setIsLiked] = useState(false)
  const count = isLiked ? 1 : 0
  const status = isLiked ? "Unlike" : "Like"


  return (
    <div className='h-100 w-100 bg-white/10 text-white flex flex-col gap-10 items-center justify-center'>
      <Heart className={`w-20 h-20 transition-all duration-100 ${isLiked ? 'scale-125' : 'scale-100'} ${isLiked ? 'fill-red-500 text-red-500' : 'text-white'}`} />
      <h1 className='text-3xl'>{count}  Likes</h1>
      <button className=' w-40 h-20 flex items-center border-2 rounded-[50px] justify-center gap-3 ' onClick={() => setIsLiked(prev=>!prev)}>
        <Heart className={`w-9 h-9 ${isLiked ? 'fill-red-500 text-red-500' : 'text-white'}`} />
        <h1 className='text-xl'>{status}</h1>
      </button>
    </div>
  )
}

export default LikeButton
