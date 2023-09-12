'use client'
import { FC } from 'react'
import { LuX } from 'react-icons/lu'
import { useDispatch } from 'react-redux'
import { switchMobileMenuState } from '../../features/ui/reducer'
import ButtonIcon, { ButtonIconProps } from '../ButtonIcon/ButtonIcon'

type CloseMenuButtonProps = Omit<ButtonIconProps, 'icon'> & {}

const CloseMenuButton: FC<CloseMenuButtonProps> = (props) => {
  const { children, className, ...otherProps } = props
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(switchMobileMenuState())
  }

  return (
    <ButtonIcon
      className='hover:bg-neutral-500 text-neutral-50 border-[1px] border-neutral-400 p-1 rounded-lg md:hidden'
      icon={<LuX className='text-2xl' />}
      onClick={handleClick}
      {...otherProps}
    />
  )
}

export default CloseMenuButton
