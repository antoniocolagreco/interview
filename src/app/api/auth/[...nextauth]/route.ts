import { PrismaAdapter } from '@auth/prisma-adapter'
import prisma from '@db/prisma'
import Argon2 from '@lib/argon2'
import { getLanguageFromClient } from '@src/lib/httpRuquestUtils'
import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GitHubProvider from 'next-auth/providers/github'

const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  debug: process.env.NODE_ENV === 'production',
  session: { strategy: 'jwt' },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GitHubProvider({
      name: 'Github',
      clientId: process.env.GH_CLIENT_ID,
      clientSecret: process.env.GH_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: { email: { label: 'email', type: 'text' }, password: { label: 'password', type: 'password' } },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials.password) return null
        const user = await prisma.user.findUnique({ where: { email: credentials?.email } })
        if (!user || !user.password) return null
        const isPasswordRight = await Argon2.verifyPassword(user.password, credentials.password)
        if (!isPasswordRight) return null

        return user
      },
    }),
  ],
}

const auth = async (req: NextApiRequest, res: NextApiResponse) => {
  const lang = getLanguageFromClient(req.headers['accept-language'])
  authOptions.pages = {
    newUser: `/${lang}`,
    signIn: `/${lang}/login`,
    signOut: `/${lang}`,
    error: `/${lang}/login`,
    verifyRequest: `/${lang}/verify`,
  }
  return await NextAuth(req, res, authOptions)
}

export { auth as GET, auth as POST, authOptions }

