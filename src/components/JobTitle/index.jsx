import React from 'react'
import "./style.scss"
import "../../styles/variable.scss"
import { useSelector } from 'react-redux'


export const JobTitle = ({element}) => {
  const darkMode = useSelector((state) => state.dark.darkMode)
  return (
    <div className='job-title'>
        <div className='job-title-left' style={{backgroundColor : element?.logoBackground}}>{element.company}</div>
        <div className={`job-title-right ${darkMode ? "dark" : "light"}`} >
          <div className='company-site-name'>
            <p className={`company-name ${darkMode ? "dark-color" : "light-color"}`}>{element?.company}</p>
            <p className='company-website-name'>{element?.website.replace("https://","")}</p>
          </div>
          <div className='company-site-link'>
            <a href={`${element?.website}`} className = {darkMode ? "link-dark" : "link-light"} style = {{width : "100%" , height : "100%"}} >Company Site</a>
          </div>
        </div>
    </div>
  )
}
