import React from 'react'
import "./style.scss"
import "../../styles/variable.scss"
import { useSelector } from 'react-redux'

export const JobPosition = ({element}) => {
  const darkMode = useSelector((state) => state.dark.darkMode)
  return (
    <div className={`job-position ${darkMode ? "dark-color" : "light-color"}`}>{element?.position}</div>
  )
}

