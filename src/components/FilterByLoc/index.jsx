import { FilterByLocFilter } from "../FilterByLocFilter"
import { FilterByLocIcon } from "../FilterByLocIcon"
import "./style.scss"

export const FilterByLoc = ({setLoc}) => {
  
  return (
    <div className="filter-by-loc">
        <FilterByLocIcon/>
        <FilterByLocFilter setLoc={setLoc}/>
    </div>
  )
}