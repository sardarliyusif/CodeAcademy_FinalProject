import React from 'react'
import "./style.scss"

export const JobContract = ({element}) => {
  return (
    <div className='job-contract'>{element?.contract}</div>
  )
}

