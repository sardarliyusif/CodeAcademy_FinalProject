import React from "react";

import "./style.scss";
import { JobCard } from "../JobCard";
import { useSelector } from "react-redux";

export const Main = ({ num, setClassNamed, fullTime , filterTitle , loc}) => {
  const data = useSelector((state) => state.data.data)
  return (
    <main className="main">
      {data
        .filter((item) => {
          return(
            item.position.toUpperCase().includes(filterTitle) || item.company.toUpperCase().includes(filterTitle) 
          )
        })
        .filter((item) => item.location.includes(loc) || loc === "FilterBy" )
        .filter((item) => fullTime ? item.contract === "Full Time" : item)
        .filter((_, i) => i < num)
        .map((element) => {
          return (
            <JobCard
              data={element}
              key={element.id}
              logo={element.logo}
              logoBackground={element.logoBackground}
              postedAt={element.postedAt}
              contract={element.contract}
              position={element.position}
              company={element.company}
              setClassNamed={setClassNamed}
              location={element.location}
            />
          );
        })}
    </main>
  );
};
