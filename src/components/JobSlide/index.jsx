import React from "react";
import { JobDescription } from "../JobDescription";
import { JobFooter } from "../JobFooter";
import { JobTitle } from "../JobTitle";
import "./style.scss";

export const JobSlide = ({ element }) => {
  return (
    <div className="job-slide">
      
      <JobTitle element={element} />
      <JobDescription  element={element} />
      <JobFooter element={element} />
    </div>
  );
};
