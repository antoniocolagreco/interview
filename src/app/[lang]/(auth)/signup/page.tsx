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
      <Auth dictionary={d} authType='signup' />
      <Box className='mt-4 w-72'>
        <h3 className='font-bold text-neutral-600'>{d.note}</h3>
        <p className='text-sm text-neutral-500 mt-1'>{d.sign_up_note}</p>
      </Box>
      <Box className='mt-4 flex justify-center'>
        <Link href={`/${lang}/login`}>{`${d.login}`}</Link>
        &nbsp;
        <span className='text-sm'>{`${d.to_title}`}</span>
      </Box>
    </div>
  )
}

export default LoginPage
