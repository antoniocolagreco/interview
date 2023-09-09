class EmailAlreadyInUseError extends Error {
  constructor(message: string) {
    super()
    this.message = message ?? 'Email already in use'
    this.name = 'EmailAlreadyInUseError'
  }
}

export default EmailAlreadyInUseError
