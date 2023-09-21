'use client'

import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { AnchorHTMLAttributes, FC, ReactNode, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { hideMobileMenu } from '../../features/ui/reducer'

type MenuItemProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  LinkProps & { icon: ReactNode; activeIcon?: ReactNode; matchUrlRoot?: boolean }

const MenuItem: FC<MenuItemProps> = (props) => {
  const { icon, matchUrlRoot = false, onClick, activeIcon, href, title, children, className, ...otherProps } = props
  const pathname = usePathname()
  const isActive = useMemo(() => (matchUrlRoot ? pathname.startsWith(href) : pathname === href), [href, pathname])
  const dispatch = useDispatch()
  const displayIcon = isActive && activeIcon ? activeIcon : icon

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    dispatch(hideMobileMenu())
    if (onClick) onClick(e)
  }

  return (
    <Link
      className={clsx(
        className,
        'flex gap-2 items-center w-full font-medium text-neutral-200 px-2 py-1 rounded-lg transition group hover:bg-neutral-500',
        isActive ? 'bg-gradient-to-tr from-amber-500 to-yellow-500' : ''
      )}
      href={href}
      onClick={handleClick}
      {...otherProps}
    >
      <span
        className={clsx(
          'h-8 w-8 grid place-content-center',
          isActive ? 'text-neutral-600' : 'group-hover:text-yellow-500'
        )}
      >
        {displayIcon}
      </span>
      <span className={clsx('grow', isActive ? 'text-neutral-600' : 'group-hover:text-neutral-100')}>{title}</span>
    </Link>
  )
}

export default MenuItem
