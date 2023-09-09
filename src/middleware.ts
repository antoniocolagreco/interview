import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

const SUPPORTED_LANGUAGES = process.env.SUPPORTED_LANGUAGES.split(',')
const DEFAULT_LANGUAGE = process.env.DEFAULT_LANGUAGE
const PUBLIC_PAGES = process.env.PUBLIC_PAGES.split(',')

const middleware = async (req: NextRequest) => {
  const [pathname, requestedLanguage] = splitUrlFromLang(req.nextUrl.pathname)

  const token = await getToken({ req })

  const language = SUPPORTED_LANGUAGES.includes(requestedLanguage) ? requestedLanguage : getBestClientLanguage(req)

  if (!token && !PUBLIC_PAGES.includes(pathname)) {
    return NextResponse.redirect(new URL(`/${language}/login`, req.nextUrl))
  }

  if (!SUPPORTED_LANGUAGES.includes(requestedLanguage)) {
    return NextResponse.redirect(new URL(`/${language}${pathname}`, req.nextUrl))
  }

  return NextResponse.next()
}

export default middleware

export const config = {
  matcher: ['/((?!_next|favicon\\.ico|images|api\\/auth).*)'],
  // matcher: [],
}

const splitUrlFromLang = (value: string): [pathName: string, language: string] => {
  const pathParts = value.split('/').filter((p) => p !== '')
  const language = pathParts[0]
  const pathName = `/${pathParts.slice(1).join('/')}`
  return [pathName, language]
}

const getBestClientLanguage = (request: NextRequest) => {
  const acceptedLanguages = request.headers.get('accept-language')
  if (!acceptedLanguages) return DEFAULT_LANGUAGE
  const clientLanguages = acceptedLanguages.split(',').map((l) => l.split(';')[0])

  for (let lang of clientLanguages) {
    if (SUPPORTED_LANGUAGES.includes(lang)) {
      return lang
    }
  }

  return DEFAULT_LANGUAGE
}
