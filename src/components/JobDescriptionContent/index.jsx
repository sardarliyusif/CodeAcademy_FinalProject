import React from 'react'
import "./style.scss"
import "../JobDescription/style.scss"
import { useSelector } from 'react-redux'

export const JobDescriptionContent = ({element }) => {
  const darkMode = useSelector((state) => state.dark.darkMode)
  return (
    <div className={`${darkMode ? "job-color-dark" : "job-color-light"}`}>{element?.description}</div>
  )
}

