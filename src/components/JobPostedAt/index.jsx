import React from 'react'
import "./style.scss"

export const JobPostedAt = ({element}) => {
  return (
    <div className='job-posted-at'>{element?.postedAt}</div>
  )
}

