import React from 'react'
import "./style.scss"

export const FooterBtn = ({setJobCardNum , data , num}) => {
  return (
    <>
      { data > num   && <button className="footer-btn" onClick={ () => {setJobCardNum( (prev) => prev+3 )}}>Load More</button> }
    </>
  )
}

