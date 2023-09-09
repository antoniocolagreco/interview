class MissingPasswordError extends Error {
  constructor(message: string) {
    super()
    this.message = message ?? 'Missing password'
    this.name = 'MissingPasswordError'
  }
}

export default MissingPasswordError
