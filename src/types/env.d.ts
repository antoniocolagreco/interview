declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SUPPORTED_LANGUAGES: string
      DEFAULT_LANGUAGE: string
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

