import Label from '@components/Label/Label'
import TextInput from '@components/TextInput/TextInput'
import clsx from 'clsx'
import { FC, InputHTMLAttributes, forwardRef } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

type FormTextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  register?: UseFormRegisterReturn
  label: string | undefined
  errorMessage?: string | undefined
}

const FormTextInput: FC<FormTextInputProps> = forwardRef<HTMLInputElement, FormTextInputProps>((props, ref) => {
  const { label, id, register, errorMessage, children, className, ...otherProps } = props
  return (
    <div className={clsx(className, 'flex flex-col gap-1 text-sm')} ref={ref}>
      <div className='flex justify-between'>
        <div className='flex gap-1 items-center'>
          <Label className='truncate' htmlFor={id}>
            {label}
          </Label>
        </div>
        {errorMessage && <span className='text-red-500'>{errorMessage}</span>}
      </div>
      <TextInput {...register} id={id} {...otherProps} />
    </div>
  )
})

export default FormTextInput
