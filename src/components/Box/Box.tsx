import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'

export type BoxProps = HTMLAttributes<HTMLDivElement> & {}

const Box: FC<BoxProps> = (props) => {
  const { children, className, ...otherProps } = props
  return (
    <div className={clsx(className, 'p-4 border-[1px] border-neutral-200 bg-neutral-50 rounded-lg')} {...otherProps}>
      {children}
    </div>
  )
}

export default Box
