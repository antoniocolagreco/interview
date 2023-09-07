import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type LanguageState = {
  currentLanguage: string
  supportedLanguages: string
}

const initialState: LanguageState = {
  currentLanguage: process.env.DEFAULT_LANGUAGE,
  supportedLanguages: process.env.SUPPORTED_LANGUAGES,
}

type SetLanguagePayload = { language: string }

type SetLanguageAction = PayloadAction<SetLanguagePayload>

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    set: (state: LanguageState, action: SetLanguageAction) => {
      state.currentLanguage = action.payload.language
    },
  },
})

export const {
  reducer: languageReducer,
  actions: { set: setLanguage },
} = languageSlice
