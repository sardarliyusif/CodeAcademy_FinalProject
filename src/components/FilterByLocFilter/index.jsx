import { useSelector } from "react-redux"
import "./style.scss"
export const FilterByLocFilter = ({ setLoc}) => {
  const darkMode = useSelector((state) => state.dark.darkMode)
  const handleLoc = (param) => {
    setLoc(param)
  }
  return (
    
    <select onChange={(e) => {handleLoc(e.target.value)}} className={`filter-by-loc-filter ${darkMode ? "dark dark-text-color dark-mode-select-focus" : "light light-text-color"} `} name="filter" id="filter">
      <option value="FilterBy">Filter By Location..</option>
      <option value="Germany">Germany</option>
      <option value="Japan">Japan</option>
      <option value="New Zealand">New Zealand</option>
      <option value="Russia">Russia</option>
      <option value="Singapore">Singapore</option>
      <option value="United Kingdom">United Kingdom</option>
      <option value="United States">United States</option>
    </select>
  )
}

