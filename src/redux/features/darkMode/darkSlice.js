import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  darkMode: false,
}

export const darkModeSlicer = createSlice({
  name: 'darkmode',
  initialState,
  reducers: {
    setDarkMode: (state) => {
      state.darkMode = !state.darkMode
    }
  },
})

export const { setDarkMode } = darkModeSlicer.actions

export default darkModeSlicer.reducer