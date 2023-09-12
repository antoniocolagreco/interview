import { createSlice } from '@reduxjs/toolkit'

type UIInitialStateType = {
  isMobileMenuOpen: boolean
  isOverlayShown: boolean
}

const initialState: UIInitialStateType = {
  isMobileMenuOpen: false,
  isOverlayShown: false,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    switchMobileMenuState: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen
      console.log(state.isMobileMenuOpen)
    },
  },
})

export const {
  actions: { switchMobileMenuState },
  reducer: uiReducer,
} = uiSlice
