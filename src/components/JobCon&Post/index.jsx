import React from 'react'
import { JobCardConPostPoint } from '../JobCardConPostPoint'
import { JobContract } from '../JobContract'
import { JobPostedAt } from '../JobPostedAt'

export const JobConPost = ({element}) => {
  return (
    <div style={{display : "flex" , alignItems : "flex-end"}}>
        <JobPostedAt element = {element} />
        <JobCardConPostPoint/>
        <JobContract element = {element} />
    </div>
  )
}
