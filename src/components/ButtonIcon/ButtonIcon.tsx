import clsx from 'clsx'
import { ButtonHTMLAttributes, FC, ReactNode } from 'react'

type ButtonIconProps = ButtonHTMLAttributes<HTMLButtonElement> & { icon: ReactNode }

const ButtonIcon: FC<ButtonIconProps> = (props) => {
  const { icon, children, className, ...otherProps } = props
  return (
    <button className={clsx(className, 'rounded-xl grid place-items-center p-2')} {...otherProps}>
      {icon}
    </button>
  )
}

export default ButtonIcon
