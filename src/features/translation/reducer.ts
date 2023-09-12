import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { DictionaryType } from '../../types/dictionary'

type TranslationState = {
  currentLanguage: string | undefined
  supportedLanguages: string | undefined
  dictionary: DictionaryType | undefined
}

const initialState: TranslationState = {
  currentLanguage: undefined,
  supportedLanguages: undefined,
  dictionary: undefined,
}

type SetTranslationPayload = { language: string }

type SetTranslationAction = PayloadAction<SetTranslationPayload>

const translationSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    set: (state: TranslationState, action: SetTranslationAction) => {
      state.currentLanguage = action.payload.language
    },
  },
})

export const {
  reducer: translationReducer,
  actions: { set: setLanguage },
} = translationSlice
