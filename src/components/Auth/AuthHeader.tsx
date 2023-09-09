import clsx from 'clsx'
import Image from 'next/image'
import { FC, HTMLAttributes } from 'react'
import Link from '../Link/Link'

type AuthHeaderProps = Omit<HTMLAttributes<HTMLDivElement>, 'title'> & { link: string; title: string }

const AuthHeader: FC<AuthHeaderProps> = (props) => {
  const { children, title, link, className, ...otherProps } = props
  return (
    <div className={clsx('flex flex-col items-center gap-4 mb-4', className)} {...otherProps}>
      <Link href={link}>
        <Image src='/images/logo.svg' width={64} height={64} alt='Logo' />
      </Link>
      <h1 className='text-xl'>{title}</h1>
    </div>
  )
}

export default AuthHeader
