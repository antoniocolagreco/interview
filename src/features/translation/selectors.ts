import { RootState } from '../../store/rootReducer'

export const selectLanguage = (state: RootState) => state.language.currentLanguage

export const selectSupportedLanguages = (state: RootState) => state.language.supportedLanguages
