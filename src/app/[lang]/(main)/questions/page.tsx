import { FC, HTMLAttributes } from 'react'

type QuestionsPagesProps = HTMLAttributes<HTMLDivElement> & { searchParams: {} }

const QuestionsPages: FC<QuestionsPagesProps> = (props) => {
  const { searchParams, ...otherProps } = props
  return <div {...otherProps}>QuestionsPages</div>
}

export default QuestionsPages
