import clsx from 'clsx'
import { ButtonHTMLAttributes, FC } from 'react'

type RichInputButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { active: boolean }

const RichInputButton: FC<RichInputButtonProps> = (props) => {
  const { children, active, className, ...otherProps } = props

  return (
    <button
      type='button'
      className={clsx(
        'h-8 w-8 border-[1px] transition outline-none focus-visible:ring-2 ring-yellow-500 rounded-md grid place-content-center',
        className,
        active
          ? 'bg-neutral-200 hover:bg-neutral-100 border-neutral-300 shadow-inner text-neutral-700'
          : 'bg-neutral-100 hover:bg-neutral-50 border-neutral-200 text-neutral-400'
      )}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default RichInputButton
