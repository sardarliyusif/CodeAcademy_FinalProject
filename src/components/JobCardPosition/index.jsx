import React from 'react'
import { useSelector } from 'react-redux'
import "./style.scss"

export const JobCardPosition = ({ position}) => {
  const darkMode = useSelector((state) => state.dark.darkMode)
  return (
    <div className={`job-card-position ${darkMode ? "dark-color" : "white-color"}`}>{position}</div>
  )
}
