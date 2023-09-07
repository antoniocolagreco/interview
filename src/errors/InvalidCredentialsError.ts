class InvalidCredentialsError extends Error {
  constructor(message: string) {
    super()
    this.message = message ?? 'Invalid credentials'
    this.name = 'InvalidCredentialsError'
  }
}

export default InvalidCredentialsError
