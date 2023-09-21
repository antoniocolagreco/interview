import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'

type TagSelectorProps = HTMLAttributes<HTMLDivElement> & {}

const TagSelector: FC<TagSelectorProps> = (props) => {
  const { children, className, ...otherProps } = props
  return (
    <div className={clsx('', className)} {...otherProps}>
      TagSelector
    </div>
  )
}

export default TagSelector
