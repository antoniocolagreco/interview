import clsx from 'clsx'
import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

type BUTTON_VARIANT = 'default' | 'secondary' | 'cancel'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: BUTTON_VARIANT
  isLoading?: boolean
  icon?: ReactNode
}

const variants = {
  default: 'bg-yellow-500 hover:bg-yellow-400 border-yellow-500 hover:border-yellow-400',
  secondary: 'bg-neutral-200 hover:bg-neutral-100 border-neutral-200',
  cancel: 'bg-red-600 hover:bg-red-500 text-red-50',
}

const spinnerVariants = {
  default: 'bg-yellow-500 hover:bg-yellow-400',
  secondary: 'bg-neutral-30 hover:bg-neutral-200',
  cancel: 'bg-rose-500 hover:bg-rose-400',
}

const Button: FC<ButtonProps> = (props) => {
  const { icon, isLoading, disabled, variant = 'default', children, className, ...otherProps } = props

  return (
    <button
      disabled={isLoading || disabled}
      className={clsx(
        className,
        'px-4 py-2 transition rounded-lg text-sm focus-visible:ring-2 ring-neutral-500 outline-none font-medium flex justify-center items-center disabled:opacity-30 border-[1px]',
        variants[variant]
      )}
      {...otherProps}
    >
      {icon ? (
        <>
          {isLoading ? (
            <LoadingSpinner
              foregroundClassName='stroke-neutral-800 opacity-75'
              backgroundClassName='stroke-neutral-800 opacity-25'
            />
          ) : (
            icon
          )}
          <span className='grow'>{children}</span>
        </>
      ) : (
        children
      )}
    </button>
  )
}

export default Button
