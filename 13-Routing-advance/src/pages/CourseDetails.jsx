import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {

  const param = useParams()

  return (
    <div className='flex items-center'>
      Course Details {param.id}
    </div>
  )
}

export default CourseDetails
