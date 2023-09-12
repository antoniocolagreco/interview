import { combineReducers } from '@reduxjs/toolkit'
import { translationReducer } from '../features/translation/reducer'
import { uiReducer } from '../features/ui/reducer'

const allReducers = { language: translationReducer, ui: uiReducer }

export type RootState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers(allReducers)

export default rootReducer
