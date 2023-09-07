import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'

type NavBarProps = HTMLAttributes<HTMLElement> & {}

const NavBar: FC<NavBarProps> = (props) => {
  const { children, className, ...otherProps } = props
  return (
    <nav className={(clsx(className), 'bg-yellow-500')} {...otherProps}>
      {children}sad
    </nav>
  )
}

export default NavBar
