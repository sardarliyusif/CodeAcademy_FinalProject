import React from "react";
import { useSelector } from "react-redux";
import { JobApplyBtn } from "../JobApplyBtn";
import { JobConPost } from "../JobCon&Post";
import { JobDescriptionContent } from "../JobDescriptionContent";
import { JobLocation } from "../JobLocation";
import { JobPosition } from "../JobPosition";
import { JobRequirements } from "../JobRequirements";
import { JobRole } from "../JobRole";
import "./style.scss";

export const JobDescription = ({ element  }) => {
  const darkMode = useSelector((state) => state.dark.darkMode)
  return (
    <div className={`job-description ${darkMode ? "dark" : "light"}`}>
      <div className="nameless" style={{display : "flex" , justifyContent : "space-between" , alignItems : "center"}}>
        <div>
        <JobConPost element={element} />
        <JobPosition element = {element}/>
        <JobLocation element = {element}/>
        </div>
        <JobApplyBtn element={element}/>
      </div>
      <JobDescriptionContent element={element}/>
      <JobRequirements element={element}/>
      <JobRole element={element}/>
    </div>
  );
};
