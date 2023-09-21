import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'
import OpenMenuButton from './OpenMenuButton'

type NavBarProps = HTMLAttributes<HTMLElement> & {}

const NavBar: FC<NavBarProps> = async (props) => {
  const { title, children, className, ...otherProps } = props

  return (
    <nav
      className={clsx(
        'bg-gradient-to-tr from-amber-500 to-yellow-500 backdrop-blur-sm opacity-90 border-b-[1px] border-neutral-600 h-14 px-2 py-1 flex justify-between items-center',
        className
      )}
      {...otherProps}
    >
      <OpenMenuButton className='md:hidden mr-4' />
      <div className='flex grow justify-end' id='nav-bar-portal' />
    </nav>
  )
}

export default NavBar
