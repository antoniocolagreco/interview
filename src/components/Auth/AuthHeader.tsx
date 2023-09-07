import clsx from 'clsx'
import Image from 'next/image'
import { FC, HTMLAttributes } from 'react'
import { DictionaryType } from '../../types/dictionary'
import Link from '../Link/Link'

type AuthHeaderProps = HTMLAttributes<HTMLDivElement> & { dictionary: DictionaryType }

const AuthHeader: FC<AuthHeaderProps> = (props) => {
  const { dictionary: d, children, className, ...otherProps } = props
  return (
    <div className={clsx('flex flex-col items-center gap-4 mb-4', className)} {...otherProps}>
      <Link href={`/${d.locale}`}>
        <Image src='/images/logo.svg' width={64} height={64} alt='Logo' />
      </Link>
      <h1 className='text-xl'>{`${d.signup}`}</h1>
    </div>
  )
}

export default AuthHeader
