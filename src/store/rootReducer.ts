import { combineReducers } from '@reduxjs/toolkit'
import { languageReducer } from '../slices/language/reducer'

const allReducers = { language: languageReducer }

export type RootState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers(allReducers)

export default rootReducer
