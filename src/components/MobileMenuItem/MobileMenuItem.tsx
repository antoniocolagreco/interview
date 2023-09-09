import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { AnchorHTMLAttributes, FC, ReactNode } from 'react'

type MobileMenuItemProps = AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps & { icon: ReactNode }

const MobileMenuItem: FC<MobileMenuItemProps> = (props) => {
  const { icon, title, children, className, ...otherProps } = props
  return (
    <Link className={clsx(className, 'flex gap-4 w-full hover:bg-neutral-500 px-4 py-2 rounded-xl')} {...otherProps}>
      {icon}
      <span className='grow'>{title}</span>
    </Link>
  )
}

export default MobileMenuItem
