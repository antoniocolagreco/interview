import clsx from 'clsx'
import { FC, InputHTMLAttributes, forwardRef } from 'react'

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  id?: string
}

const TextInput: FC<TextInputProps> = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  const { id, children, className, ...otherProps } = props
  return (
    <input
      {...(id ? { id, autoComplete: id, name: id } : {})}
      ref={ref}
      className={clsx(
        className,
        'px-4 py-2 transition rounded-lg text-sm focus:ring-2 ring-yellow-500 border-[1px] border-neutral-200 outline-none'
      )}
      {...otherProps}
    />
  )
})

export default TextInput
