declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SUPPORTED_LANGUAGES: string
      NEXT_PUBLIC_DEFAULT_LANGUAGE: string
      PUBLIC_PAGES: string
      DATABASE_HOST: string
      DATABASE_NAME: string
      DATABASE_PORT: string
      DATABASE_USER: string
      DATABASE_PASSWORD: string
      DATABASE_URL: string
      NEXTAUTH_URL: string
      NEXTAUTH_SECRET: string
      GH_CLIENT_ID: string
      GH_SECRET: string
    }
  }
}

export { }

