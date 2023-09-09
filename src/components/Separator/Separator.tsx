import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'

type SeparatorProps = HTMLAttributes<HTMLDivElement> & {}

const Separator: FC<SeparatorProps> = (props) => {
  const { children, className, ...otherProps } = props
  return <div className={clsx('h-[1px] bg-neutral-200', className)} {...otherProps} />
}

export default Separator
