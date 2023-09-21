import Auth from '@components/Auth/Auth'
import AuthHeader from '@components/Auth/AuthHeader'
import Box from '@components/Box/Box'
import Link from '@components/Link/Link'
import SessionProvider from '@components/SessionProvider/SessionProvider'
import getDictionary from '@lib/dictionary'
import { HTMLAttributes } from 'react'
import { DynamicPage } from '../../../../types/pages'

type LoginPageProps = HTMLAttributes<HTMLDivElement> & { searchParams: {}; params: { lang: string } }

const LoginPage: DynamicPage<LoginPageProps> = async (props) => {
  const {
    searchParams,
    params: { lang },
    ...otherProps
  } = props

  const d = getDictionary()

  return (
    <div className='mt-8' {...otherProps}>
      <SessionProvider>
        <AuthHeader link={`/${d.locale}`} title={d.login} />
        <Auth dictionary={d} authType='login' />
        <Box className='mt-4 flex justify-center'>
          <Link href={`/${lang}/signup`}>{d.create_account}</Link>
        </Box>
      </SessionProvider>
    </div>
  )
}

export default LoginPage
