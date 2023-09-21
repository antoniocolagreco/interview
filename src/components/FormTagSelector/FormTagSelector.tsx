import Label from '@components/Label/Label'
import clsx from 'clsx'
import { FC, HTMLAttributes, forwardRef } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import TagSelector from '../TagSelector/TagSelector'

type FormTagSelectorProps = HTMLAttributes<HTMLDivElement> & {
  register?: UseFormRegisterReturn
  label: string | undefined
  errorMessage?: string | undefined
}

const FormTagSelector: FC<FormTagSelectorProps> = forwardRef<HTMLInputElement, FormTagSelectorProps>((props, ref) => {
  const { label, id, register, errorMessage, children, className, ...otherProps } = props
  return (
    <div className={clsx(className, 'flex flex-col gap-1 text-sm')} ref={ref} {...otherProps}>
      <div className='flex justify-between'>
        <div className='flex gap-1 items-center'>
          <Label className='truncate' htmlFor={id}>
            {label}
          </Label>
        </div>
        {errorMessage && <span className='text-red-500'>{errorMessage}</span>}
      </div>
      <TagSelector {...register} id={id} />
    </div>
  )
})

export default FormTagSelector
