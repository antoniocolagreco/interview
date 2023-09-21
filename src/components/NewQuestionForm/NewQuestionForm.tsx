import clsx from 'clsx'
import { FC, FormHTMLAttributes } from 'react'
import InputText from '../InputText/InputText'

type NewQuestionFormProps = FormHTMLAttributes<HTMLFormElement> & {}

const NewQuestionForm: FC<NewQuestionFormProps> = (props) => {
  const { children, className, ...otherProps } = props
  return (
    <form className={clsx('', className)} {...otherProps}>
      <InputText></InputText>
    </form>
  )
}

export default NewQuestionForm
