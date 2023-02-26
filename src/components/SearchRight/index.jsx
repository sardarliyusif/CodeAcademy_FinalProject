import "./style.scss"


import React from 'react'
import { SearchButton } from "../SearchButton"
import { SearchFullTime } from "../SearchFullTime"

export const SearchRight = ({setTime}) => {
  return (
    <div className="search-right">
        
        <SearchFullTime setTime = {setTime}/>
        <SearchButton/>
    </div>
  )
}