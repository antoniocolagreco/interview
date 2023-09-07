import clsx from 'clsx'
import { FC, InputHTMLAttributes, forwardRef } from 'react'

type TextInputType = 'date' | 'email' | 'file' | 'month' | 'number' | 'password' | 'tel' | 'text' | 'time' | 'url'

type TextInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  type?: TextInputType
  id?: string
}

const TextInput: FC<TextInputProps> = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  const { id, type = 'text', children, className, ...otherProps } = props
  return (
    <input
      {...(id ? { id, autoComplete: id, name: id } : {})}
      ref={ref}
      type={type}
      className={clsx(
        className,
        'px-4 py-2 transition rounded-lg text-sm focus:ring-2 ring-neutral-500 border-[1px] border-neutral-200 outline-none'
      )}
      {...otherProps}
    />
  )
})

export default TextInput
