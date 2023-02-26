import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Job } from "./Pages/Job";
import { useSelector } from "react-redux";
import "./app.scss";

function App() {
  const [jobCardNum, setJobCardNum] = useState(12);
  const [classNamed , setClassNamed] = useState(true);
  const [fullTime, setFullTime] = useState(false)
  const darkMode = useSelector((state) => state.dark.darkMode)
  return (
    <div className={`app ${darkMode ? "dark" : "milk"}`}>
      <Routes>
        <Route
          path="/"
          index
          element={
            <Home
              setFullTime = {setFullTime}
              fullTime = {fullTime}
              jobCardNum={jobCardNum}
              setJobCardNum={setJobCardNum}
              setClassNamed = {setClassNamed}
              classNamed = {classNamed}
            />
          }
        ></Route>
        <Route
          path="/:id"
          element={<Job  setClassNamed = {setClassNamed} classNamed = {classNamed}/>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
