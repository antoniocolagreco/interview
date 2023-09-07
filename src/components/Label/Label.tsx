import clsx from 'clsx'
import { FC, LabelHTMLAttributes } from 'react'

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {}

const Label: FC<LabelProps> = (props) => {
  const { children, className, ...otherProps } = props
  return (
    <label className={clsx(className, 'text-sm')} {...otherProps}>
      {children}
    </label>
  )
}

export default Label
