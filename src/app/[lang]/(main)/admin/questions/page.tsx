import { FC, HTMLAttributes } from 'react'

type QuestionsPagesProps = HTMLAttributes<HTMLDivElement> & { searchParams: {} }

const AdminQuestionsPages: FC<QuestionsPagesProps> = (props) => {
  const { searchParams, ...otherProps } = props
  return <div {...otherProps}>AdminQuestionsPages</div>
}

export default AdminQuestionsPages
