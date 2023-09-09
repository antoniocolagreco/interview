class MissingEmailError extends Error {
  constructor(message: string) {
    super()
    this.message = message ?? 'Missing email'
    this.name = 'MissingEmailError'
  }
}

export default MissingEmailError
