import React from "react";
import { useSelector } from "react-redux";
import { FilterByLoc } from "../FilterByLoc";
import { FilterByTitle } from "../FilterByTitle";
import { SearchRight } from "../SearchRight";
import "./style.scss";

export const Search = ({  setTime , setFilterTitle , setLoc}) => {
  const darkMode = useSelector((state) => state.dark.darkMode)
  return (
    <div className={`search ${darkMode ? "dark" : "light"}`}>
      <FilterByTitle setFilterTitle={setFilterTitle} />
      <FilterByLoc setLoc={setLoc}/>
      <SearchRight setTime={setTime} />
    </div>
  );
};
