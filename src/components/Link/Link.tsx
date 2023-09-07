import clsx from 'clsx'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { AnchorHTMLAttributes, FC } from 'react'

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & NextLinkProps & {}

const Link: FC<LinkProps> = (props) => {
  const { children, className, ...otherProps } = props
  return (
    <NextLink
    className={clsx(className, 'text-sm text-yellow-700 hover:underline hover:text-yellow-600 outline-neutral-500 focus-visible:outline outline-2 rounded outline-offset-4')}
      {...otherProps}
    >
      {children}
    </NextLink>
  )
}

export default Link
