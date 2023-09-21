import { FC } from 'react'
import { RenderElementProps } from 'slate-react'

const RichInputElement: FC<RenderElementProps> = (props) => {
  const { children, attributes, element } = props
  switch (element.type) {
    case 'code':
      return (
        <pre>
          <code {...attributes}>{children}</code>
        </pre>
      )
    default:
      return <p {...attributes}>{children}</p>
  }
}

export default RichInputElement
