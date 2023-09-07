import clsx from 'clsx'
import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

type BUTTON_VARIANT = 'default' | 'secondary' | 'cancel'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: BUTTON_VARIANT
  loading?: boolean
  icon?: ReactNode
}

const variants = {
  default: 'bg-yellow-500 hover:bg-yellow-400',
  secondary: 'bg-neutral-300 hover:bg-neutral-200',
  cancel: 'bg-red-500 hover:bg-red-400',
}

const spinnerVariants = {
  default: 'bg-yellow-500 hover:bg-yellow-400',
  secondary: 'bg-neutral-30 hover:bg-neutral-200',
  cancel: 'bg-red-500 hover:bg-red-400',
}

const Button: FC<ButtonProps> = (props) => {
  const { icon, loading, variant = 'default', children, className, ...otherProps } = props

  return (
    <button
      className={clsx(
        className,
        'px-4 py-2 transition rounded-lg text-sm focus-visible:ring-2 ring-neutral-500 outline-none font-medium flex justify-center items-center',
        variants[variant]
      )}
      {...otherProps}
    >
      {icon ? (
        <>
          {loading ? (
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
