import React from "react";
import { FooterBtn } from "../FooterBtn";
import "./style.scss";

export const Footer = ({setJobCardNum , data , num }) => {
  return (
    <div className="footer">
      <FooterBtn setJobCardNum = {setJobCardNum} num = {num} data = {data}/>
    </div>
  );
};
