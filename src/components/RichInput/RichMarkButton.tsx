import { ButtonHTMLAttributes, FC } from 'react'
import { Editor } from 'slate'
import { useSlate } from 'slate-react'
import RichInputButton from './RichInputButton'
import { Formats } from './types'

type RichMarkButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { format: Formats }

const RichMarkButton: FC<RichMarkButtonProps> = (props) => {
  const { children, format, className, ...otherProps } = props
  const editor = useSlate()
  const active = isMarkActive(editor, format)

  const handleOnMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    toggleMark(editor, format)
  }

  return (
    <RichInputButton active={active} onMouseDown={handleOnMouseDown}>
      {children}
    </RichInputButton>
  )
}

const isMarkActive = (editor: Editor, format: Formats) => {
  const marks = Editor.marks(editor)
  return marks ? marks[format] === true : false
}

const toggleMark = (editor: Editor, format: Formats) => {
  if (isMarkActive(editor, format)) {
    Editor.removeMark(editor, format)
  } else {
    Editor.addMark(editor, format, true)
  }
}

export default RichMarkButton
