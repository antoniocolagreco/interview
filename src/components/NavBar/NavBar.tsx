import clsx from 'clsx'
import Image from 'next/image'
import { FC, HTMLAttributes } from 'react'
import getDictionary from '../../lib/dictionary'
import OpenMenuButton from './OpenMenuButton'

type NavBarProps = HTMLAttributes<HTMLElement> & {}

const NavBar: FC<NavBarProps> = async (props) => {
  const { title, children, className, ...otherProps } = props

  const d = getDictionary()

  return (
    <nav
      className={clsx(
        'bg-gradient-to-tr from-amber-500 to-yellow-500 backdrop-blur-sm opacity-90 flex justify-center p-4 border-b-[1px] border-neutral-600',
        className
      )}
      {...otherProps}
    >
      <OpenMenuButton className='md:hidden mr-4' />
      <div className='grow flex items-end justify-center'>
        <h1 className='truncate font-bold text-neutral-600 text-xl'>{d.title}</h1>
        <Image src='/images/simpleLogo.svg' width={32} height={32} alt='logo' className='ml-2' />
      </div>
    </nav>
  )
}

export default NavBar
