import React from 'react'
import { JobCardConPostPoint } from '../JobCardConPostPoint'
import { JobCardContract } from '../JobCardContract'
import { JobCardPostedAt } from '../JobCardPostedAt'

export const JobCardConPost = ({postedAt , contract}) => {
  return (
    <div style={{display : "flex" , alignItems : "flex-end"}}>
        <JobCardPostedAt postedAt = {postedAt} />
        <JobCardConPostPoint/>
        <JobCardContract contract = {contract} />
    </div>
  )
}
