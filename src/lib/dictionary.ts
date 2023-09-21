import 'server-only'
import { DictionaryType } from '../types/dictionary'
import { getLanguageFromUrl } from './httpRuquestUtils'

const DEFAULT_LANGUAGE = process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE

const dictionaries = new Map<string, DictionaryType>()

const defaultDictionary = await import(`./../../translations/${DEFAULT_LANGUAGE}.json`).then((module) => module.default)

dictionaries.set(DEFAULT_LANGUAGE, defaultDictionary)

const getDictionary = (locale?: string | undefined) => {
  if (!locale) {
    locale = getLanguageFromUrl()
  }
  if (locale && dictionaries.has(locale)) return dictionaries.get(locale)!
  return dictionaries.get(DEFAULT_LANGUAGE)!
}

export default getDictionary
