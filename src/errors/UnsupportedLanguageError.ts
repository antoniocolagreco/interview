class UnsupportedLanguageError extends Error {
  constructor(message?: string) {
    super()
    this.message = 'Language not supported'
  }
  name = 'UnsupportedLanguageError'
}
