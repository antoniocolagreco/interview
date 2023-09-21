import Label from '@components/Label/Label'
import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'
import { Descendant } from 'slate'
import RichInput from '../RichInput/RichInput'

type FormRichInputProps = Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> & {
  label: string | undefined
  errorMessage?: string | undefined
  onChange?: ((value: Descendant[]) => void) | undefined
}

const FormRichInput: FC<FormRichInputProps> = (props) => {
  const { label, onChange, id, errorMessage, children, className, ...otherProps } = props

  return (
    <div className={clsx(className, 'flex flex-col gap-1 text-sm')}>
      <div className='flex justify-between'>
        <div className='flex gap-1 items-center'>
          <Label className='truncate' htmlFor={id}>
            {label}
          </Label>
        </div>
        {errorMessage && <span className='text-red-500'>{errorMessage}</span>}
      </div>
      <RichInput onChange={onChange} {...otherProps} id={id} />
    </div>
  )
}

export default FormRichInput
