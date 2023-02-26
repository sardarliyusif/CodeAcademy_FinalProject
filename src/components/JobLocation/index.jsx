import React from 'react'
import "./style.scss"

export const JobLocation = ({element}) => {
  return (
    <div className='job-location'>{element?.location}</div>
  )
}
