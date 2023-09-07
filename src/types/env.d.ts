declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_HOST: string
      DB_NAME: string
      DB_PORT: string
      DB_USER: string
      DB_PASSWORD: string
      SUPPORTED_LANGUAGES: string
      DEFAULT_LANGUAGE: string
      NEXTAUTH_URL: string
      GH_CLIENT_ID: string
      GH_SECRET: string
      PUBLIC_PAGES: string
    }
  }
}

export { }

