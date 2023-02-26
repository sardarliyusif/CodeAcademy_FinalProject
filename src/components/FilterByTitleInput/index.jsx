import React from "react";
import "./style.scss"
import "../../styles/variable.scss"
import { useSelector } from "react-redux";

export const FilterByTitleInput = ({ setFilterTitle}) => {
  const darkMode = useSelector((state) => state.dark.darkMode)
  const handleFilter = (param) => {
    setFilterTitle(param.toUpperCase())
  }
  return (
    <input 
      className={`filter-by-title-input ${darkMode ? "dark dark-mode-input-color" : "light"}`}
      type="text" 
      placeholder="Filter by title,companies..."
      onChange={(e) => {handleFilter(e.target.value)}}

    />
  );
};
