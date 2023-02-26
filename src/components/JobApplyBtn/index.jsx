import React from 'react'
import "./style.scss"

export const JobApplyBtn = ({element}) => {
  return (
    <a href={element?.apply} className = "job-apply-btn">Apply Now</a>
  )
}
