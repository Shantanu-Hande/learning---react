import React from 'react'
import { jobs } from './data/jobs'
import Card from './components/Card'


const App = () => {
  return (
    <div className='parent'>
      {jobs.map((jobs) => {
        return <Card  key={jobs.id} prop={jobs}/>
      })}
    </div>
  )
}

export default App
