import Auth from '@components/Auth/Auth'
import Box from '@components/Box/Box'
import Link from '@components/Link/Link'
import getDictionary from '@lib/dictionary'
import { HTMLAttributes } from 'react'
import AuthHeader from '../../../../components/Auth/AuthHeader'
import { DynamicPageType } from '../../../../types/next'

type LoginPageProps = HTMLAttributes<HTMLDivElement> & { searchParams: {}; params: { lang: string } }

const LoginPage: DynamicPageType<LoginPageProps> = async (props) => {
  const {
    searchParams,
    params: { lang },
    ...otherProps
  } = props

  const d = await getDictionary(lang)

  return (
    <div className='mt-8' {...otherProps}>
      <AuthHeader dictionary={d} />
      <Auth dictionary={d} authType='login' />
      <Box className='mt-4 flex justify-center'>
        <Link href={`/${lang}/signup`}>{d.create_account}</Link>
      </Box>
    </div>
  )
}

export default LoginPage
