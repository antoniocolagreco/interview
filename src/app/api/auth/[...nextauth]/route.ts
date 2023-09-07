import { PrismaAdapter } from '@auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import NextAuth, { AuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'

const prisma = new PrismaClient()

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  debug: process.env.NODE_ENV === 'production',
  session: { strategy: 'jwt' },
  pages: { newUser: '', signIn: '', signOut: '', error: '', verifyRequest: '' },
  providers: [
    GitHubProvider({
      name: 'Github',
      clientId: process.env.GH_CLIENT_ID,
      clientSecret: process.env.GH_SECRET,
    }),
    // CredentialsProvider({
    //   name: 'Credentials',
    //   credentials: { email: { label: 'email', type: 'text' }, password: { label: 'password', type: 'password' } },
    //   authorize(credentials, req) {

    //   },
    // }),
  ],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

