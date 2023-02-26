import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode } from "../../redux/features/darkMode/darkSlice";
import "./style.scss";

export const Switch = () => {
  const isDark = useSelector((state) => state.dark.darkMode)
  const dispatch = useDispatch()
  return (
    <div
      className="switch"
      onClick={() => {
        // setIsDark((prev) => !prev);
        dispatch(setDarkMode())
      }}
    >
      <img
        className="switch__sun"
        src="./assets/desktop/icon-sun.svg"
        alt="sun"
      />
      <div className={`switch__root ${isDark ? "switch__root--active" : ""}`}>
        <div className="switch__root__circle" />
      </div>
      <img
        className="switch__moon"
        src="./assets/desktop/icon-moon.svg"
        alt="moon"
      />
    </div>
  )
};
