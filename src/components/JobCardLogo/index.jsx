import React from "react";
import "./style.scss";

export const JobCardLogo = ({ logo, logoBackground }) => {
  return (
    <div
    className="job-card-logo"
    style={{backgroundColor : logoBackground}}
    >
      <img 
        className="job-card-logo-img" 
        src={logo} 
        alt="logo" 
      />
    </div>
  );
};
