'use client'

import { hideMobileMenu } from '@features/ui/reducer'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { FC, HTMLAttributes } from 'react'
import { useDispatch } from 'react-redux'
import CloseMenuButton from './CloseMenuButton'

type MenuHeaderProps = HTMLAttributes<HTMLDivElement> & { href: string }

const MenuHeader: FC<MenuHeaderProps> = (props) => {
  const { href, title, children, className, ...otherProps } = props
  const dispatch = useDispatch()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    dispatch(hideMobileMenu())
  }

  return (
    <div className={clsx('mb-2 flex justify-between', className)} {...otherProps}>
      <Link className='flex items-center gap-2 pl-2' href={href} onClick={handleClick}>
        <Image src='/images/logo.svg' width={36} height={36} alt='logo' />
        <h1 className='truncate font-medium text-neutral-50 text-md text grow'>{title}</h1>
      </Link>
      <CloseMenuButton />
    </div>
  )
}

export default MenuHeader
