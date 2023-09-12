import clsx from 'clsx'
import { ButtonHTMLAttributes, FC, ReactNode } from 'react'

export type ButtonIconProps = ButtonHTMLAttributes<HTMLButtonElement> & { icon: ReactNode }

const ButtonIcon: FC<ButtonIconProps> = (props) => {
  const { icon, children, className, ...otherProps } = props
  return (
    <button className={clsx(className, 'rounded grid place-items-center')} {...otherProps}>
      {icon}
    </button>
  )
}

export default ButtonIcon
