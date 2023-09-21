import clsx from 'clsx'
import { FC, HTMLAttributes, InputHTMLAttributes } from 'react'
import { LuSearch } from 'react-icons/lu'

type InputTextProps = InputHTMLAttributes<HTMLInputElement> & {
  containerClassName?: HTMLAttributes<HTMLDivElement>['className']
}

const InputText: FC<InputTextProps> = (props) => {
  const { children, className, containerClassName, ...otherProps } = props

  return (
    <div className={clsx('relative', containerClassName)}>
      <input
        className={clsx(
          'w-full border-neutral-300 border-[1px] px-4 py-2 rounded-lg outline-none focus-visible:ring-2 ring-yellow-500 transition pr-10 text-neutral-700 text-sm',
          className
        )}
        {...otherProps}
      />
      <button className='absolute right-2 top-2 hover:text-yellow-500 text-neutral-400 outline-none focus-visible:ring-2 ring-yellow-500 transition rounded ring-offset-2'>
        <LuSearch className='text-xl' />
      </button>
    </div>
  )
}

export default InputText
