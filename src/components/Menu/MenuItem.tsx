import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { AnchorHTMLAttributes, FC, ReactNode } from 'react'

type MenuItemProps = AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps & { icon: ReactNode }

const MenuItem: FC<MenuItemProps> = (props) => {
  const { icon, title, children, className, ...otherProps } = props
  return (
    <Link
      className={clsx(
        className,
        'flex gap-4 w-full font-medium text-neutral-200 hover:bg-neutral-500 p-2 rounded-lg transition group'
      )}
      {...otherProps}
    >
      <span className='group-hover:text-yellow-500'>{icon}</span>
      <span className='group-hover:text-neutral-50 grow'>{title}</span>
    </Link>
  )
}

export default MenuItem
