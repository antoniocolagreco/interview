'use client'
import { switchMobileMenuState } from '@features/ui/reducer'
import clsx from 'clsx'
import { FC } from 'react'
import { LuMenu } from 'react-icons/lu'
import { useDispatch } from 'react-redux'
import ButtonIcon, { ButtonIconProps } from '../ButtonIcon/ButtonIcon'

type OpenMenuButtonProps = Omit<ButtonIconProps, 'icon'> & {}

const OpenMenuButton: FC<OpenMenuButtonProps> = (props) => {
  const { children, className, ...otherProps } = props
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(switchMobileMenuState())
  }

  return (
    <>
      <ButtonIcon
        className={clsx('border-[1px] border-neutral-500 h-8 w-8', className)}
        icon={<LuMenu className='text-3xl text-neutral-600' />}
        onClick={handleClick}
        {...otherProps}
      />
    </>
  )
}

export default OpenMenuButton
