import { headers } from 'next/headers'
import 'server-only'

const SUPPORTED_LANGUAGES = process.env.SUPPORTED_LANGUAGES.split(',')
const DEFAULT_LANGUAGE = process.env.DEFAULT_LANGUAGE

type HeadersKeys =
  | 'host'
  | 'connection'
  | 'cache-control'
  | 'user-agent'
  | 'accept'
  | 'accept-language'
  | 'referer'
  | 'next-url'
  | 'dnt'
  | 'cookie'
  | 'sec-fetch-dest'
  | 'sec-fetch-mode'
  | 'sec-fetch-site'
  | 'date'
  | 'x-middleware-invoke'
  | 'x-invoke-path'
  | 'x-invoke-query'
  | 'x-invoke-output'
  | 'accept-encoding'

const getHeaders = (key: HeadersKeys) => {
  const value = headers().get(key)
  return value
}

export const getLanguageFromClient = (acceptedLanguages?: string | null | undefined) => {
  if (!acceptedLanguages) acceptedLanguages = getHeaders('accept-language')
  if (!acceptedLanguages) return DEFAULT_LANGUAGE
  const clientLanguages = acceptedLanguages.split(',').map((l) => l.split(';')[0])
  for (let lang of clientLanguages) {
    if (SUPPORTED_LANGUAGES.includes(lang)) {
      return lang
    }
  }
  return DEFAULT_LANGUAGE
}

export const getLanguageFromUrl = () => {
  const url = getHeaders('accept-language')
  if (!url) return DEFAULT_LANGUAGE
  const urlLanguage = url.split('/').filter((el) => el !== '')[0]
  if (SUPPORTED_LANGUAGES.includes(urlLanguage)) {
    return urlLanguage
  }
  return getLanguageFromClient()
}
