import { createSlice } from '@reduxjs/toolkit'

type UIStateType = {
  isMobileMenuOpen: boolean
}

const initialState: UIStateType = {
  isMobileMenuOpen: false,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    switchMobileMenu: (state: UIStateType) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen
    },
    showMobileMenu: (state: UIStateType) => {
      state.isMobileMenuOpen = true
    },
    hideMobileMenu: (state: UIStateType) => {
      state.isMobileMenuOpen = false
    },
  },
})

export const {
  actions: { switchMobileMenu, hideMobileMenu, showMobileMenu },
  reducer: uiReducer,
} = uiSlice
