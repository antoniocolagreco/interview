import { default as defaultDictionary } from '@translations/en.json'
import { useEffect, useState } from 'react'
import { DictionaryType } from '../types/dictionary'
import useCurrentLanguage from './useCurrentLanguage'

const DEFAULT_LANGUAGE = process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE
const SUPPORTED_LANGUAGES = process.env.NEXT_PUBLIC_SUPPORTED_LANGUAGES.split(',')

const useDictionary = () => {
  const language = useCurrentLanguage()
  const [dictionary, setDictionary] = useState<DictionaryType>(defaultDictionary)

  useEffect(() => {
    import(`./../../translations/${DEFAULT_LANGUAGE}.json`)
      .then((res) => {
        const loadedDictionary = res.json() as unknown as DictionaryType
        setDictionary(loadedDictionary)
      })
      .catch((err) => {
        setDictionary(defaultDictionary)
      })
  }, [language])

  return dictionary
}

export default useDictionary
