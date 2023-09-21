import clsx from 'clsx'
import Link, { LinkProps as NextLinkProps } from 'next/link'
import { AnchorHTMLAttributes, ButtonHTMLAttributes, FC, HTMLAttributes, ReactNode } from 'react'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

type BUTTON_VARIANT = 'default' | 'light' | 'dark' | 'safe' | 'danger'

type CommonProps = { variant?: BUTTON_VARIANT; isLoading?: boolean; icon?: ReactNode }
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & CommonProps
type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & NextLinkProps & CommonProps

const variants = {
  default: 'bg-yellow-500 hover:bg-yellow-400 ring-neutral-500',
  light: 'bg-neutral-300 hover:bg-neutral-200 ring-neutral-500',
  dark: 'bg-neutral-600 hover:bg-neutral-500 text-neutral-50 ring-yellow-500',
  safe: 'bg-green-600 hover:bg-green-500 text-green-50',
  danger: 'bg-red-600 hover:bg-red-500 text-red-50',
}

const spinnerVariants = {
  default: 'bg-yellow-500 hover:bg-yellow-400',
  light: 'bg-neutral-300 hover:bg-neutral-200',
  dark: 'bg-neutral-600 hover:bg-neutral-500 text-neutral-50',
  safe: 'bg-green-500 hover:bg-green-400',
  danger: 'bg-red-500 hover:bg-red-400',
}

const commonStyle: HTMLAttributes<HTMLElement>['className'] =
  'px-4 py-2 transition rounded-lg text-sm outline-none focus-visible:ring-2 font-medium flex justify-center items-center disabled:opacity-30 gap-2'

const Button: FC<ButtonProps> = (props) => {
  const { icon, isLoading, disabled, variant = 'default', children, className, ...otherProps } = props

  return (
    <button
      disabled={isLoading || disabled}
      className={clsx(className, commonStyle, variants[variant])}
      {...otherProps}
    >
      {icon ? (
        <>
          {isLoading ? (
            <LoadingSpinner
              className={spinnerVariants[variant]}
              foregroundClassName='stroke-neutral-800 opacity-75'
              backgroundClassName='stroke-neutral-800 opacity-25'
            />
          ) : (
            icon
          )}
          <span className='grow text-center'>{children}</span>
        </>
      ) : (
        children
      )}
    </button>
  )
}

export default Button

export const LinkButton: FC<LinkButtonProps> = (props) => {
  const { icon, variant = 'default', children, className, ...otherProps } = props

  return (
    <Link className={clsx(className, commonStyle, variants[variant])} {...otherProps}>
      {icon ? (
        <>
          {icon}
          <span className='grow text-center'>{children}</span>
        </>
      ) : (
        children
      )}
    </Link>
  )
}
