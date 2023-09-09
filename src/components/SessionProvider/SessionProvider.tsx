'use client'
import { SessionProvider as NextAuthSessionProvider, SessionProviderProps } from 'next-auth/react'
import { FC } from 'react'

const SessionProvider: FC<SessionProviderProps> = (props) => {
  return <NextAuthSessionProvider {...props} />
}

export default SessionProvider
