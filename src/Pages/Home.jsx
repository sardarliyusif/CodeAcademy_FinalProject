import {React, useState} from "react";
import { useSelector } from "react-redux";
import { Header, Main, Footer } from "../components";

export const Home = ({
  
  jobCardNum,
  setJobCardNum,
  setClassNamed,
  classNamed,
  setFullTime,
  fullTime
}) => {
  const [filterTitle, setFilterTitle] = useState("")
  const [loc , setLoc] = useState("")
  const data = useSelector((state) => state.data.data)
  classNamed = true
  return (
    <>
      <Header setFilterTitle = {setFilterTitle} setTime = {setFullTime} setLoc = {setLoc}  setClassNamed = {setClassNamed} classNamed = {classNamed} />
      <Main num={jobCardNum} setClassNamed = {setClassNamed} fullTime={fullTime} filterTitle ={filterTitle} loc = {loc}/>
      <Footer
        setJobCardNum={setJobCardNum}
        num={jobCardNum}
        data={data.length}
      />
    </>
  );
};
