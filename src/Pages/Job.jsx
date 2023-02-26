import React from 'react'
import { useSelector } from 'react-redux';
import {useParams} from "react-router-dom"
import { Header } from '../components'
import { JobSlide } from '../components/JobSlide';


export const Job = ({ setClassNamed , classNamed}) => {
  const data = useSelector((state) => state.data.data)
  const { id } = useParams();
  const element = data.find((element) => element.id === +id);
  classNamed = false
  return (
    <>
      <Header setClassNamed = {setClassNamed} classNamed = {classNamed}/>
      <JobSlide element={element}  />
    </>
  )
}

