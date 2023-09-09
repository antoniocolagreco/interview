import clsx from 'clsx'
import Image from 'next/image'
import { FC, HTMLAttributes } from 'react'
import { LuMenu } from 'react-icons/lu'
import ButtonIcon from '../ButtonIcon/ButtonIcon'
import MobileMenu from '../MobileMenu/MobileMenu'

type NavBarProps = HTMLAttributes<HTMLElement> & {}

const NavBar: FC<NavBarProps> = async (props) => {
  const { title, children, className, ...otherProps } = props
  // const [isShowing, setIsShowing] = useState(false)

  return (
    <nav
      className={
        (clsx(className),
        'bg-gradient-to-tr from-yellow-500  to-yellow-400 p-2 flex justify-between gap-2 items-center')
      }
      {...otherProps}
    >
      <Image src='/images/simpleLogo.svg' width={32} height={32} alt='logo' />
      <h1 className='grow truncate font-medium text-neutral-600'>{title}</h1>
      <ButtonIcon className="h-8 w-8'" icon={<LuMenu className='text-2xl' />} />
      <MobileMenu />
    </nav>
  )
}

export default NavBar
