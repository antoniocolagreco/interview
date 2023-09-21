import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const DEFAULT_LANGUAGE = process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE
const SUPPORTED_LANGUAGES = process.env.NEXT_PUBLIC_SUPPORTED_LANGUAGES.split(',')

const useCurrentLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState<string>()
  const pathname = usePathname()

  useEffect(() => {
    const language = pathname ? pathname.split('/').filter((el) => el !== '')[0] : undefined
    if (language && SUPPORTED_LANGUAGES.includes(language)) {
      setCurrentLanguage(language)
    } else {
      setCurrentLanguage(DEFAULT_LANGUAGE)
    }
  }, [pathname])

  return currentLanguage
}

export default useCurrentLanguage
