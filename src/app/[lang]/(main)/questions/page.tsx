import { HTMLAttributes } from 'react'
import { Page } from '../../../../types/pages'

type QuestionsPagesProps = HTMLAttributes<HTMLDivElement> & {}

const QuestionsPages: Page<QuestionsPagesProps> = (props) => {
  const { searchParams, ...otherProps } = props
  return <div {...otherProps}></div>
}

export default QuestionsPages
