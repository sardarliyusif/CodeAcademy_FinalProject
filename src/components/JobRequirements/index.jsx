import React from "react";
import "./style.scss";
import "../JobDescription/style.scss";
import { useSelector } from "react-redux";

export const JobRequirements = ({ element  }) => {
  const darkMode = useSelector((state) => state.dark.darkMode)
  return (
    <div>
      <div className={`${darkMode ? "job-title-color-dark" : "job-title-color-light"}`}>Requirements</div>
      <span className={`${darkMode ? "job-color-dark" : "job-color-light"}`}>{element?.requirements.content}</span>
      <ul className={`${darkMode ? "job-color-dark" : "job-color-light"}`} style={{paddingLeft : "1rem" , marginTop : "24px"}}>
        {element?.requirements.items.map(item => <li key={item} style={{listStyle : "disc" , paddingLeft : "1rem"}}>{item}</li>)}
      </ul>
    </div>
  );
};
