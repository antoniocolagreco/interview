import { FC, HTMLAttributes } from 'react'

type LoginLayoutProps = HTMLAttributes<HTMLElement> & { params: { lang: string } }

const LoginLayout: FC<LoginLayoutProps> = (props) => {
  const { lang, children } = props

  return <div className='min-h-screen grid justify-center'>{children}</div>
}

export default LoginLayout

