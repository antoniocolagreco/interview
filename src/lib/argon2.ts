import argon2 from 'argon2'

class Argon2 {
  constructor() {}

  static hashPassword = async (password: string) => {
    try {
      const hash = await argon2.hash(password, {})
      return hash
    } catch (error) {
      throw error
    }
  }

  static verifyPassword = async (hash: string, password: string) => {
    try {
      if (await argon2.verify(hash, password)) return true
      return false
    } catch (error) {
      throw error
    }
  }
}

export default Argon2
