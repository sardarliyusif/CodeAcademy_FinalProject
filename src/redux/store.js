import { configureStore } from "@reduxjs/toolkit";
import darkModeSlicer from "./features/darkMode/darkSlice";
import dataSlice from "./features/data/dataSlice";

export const store = configureStore({
  reducer: {
    dark: darkModeSlicer,
    data: dataSlice,
  },
});
