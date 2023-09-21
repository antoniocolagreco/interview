'use client'
import { ButtonHTMLAttributes, FC } from 'react'
import { useSlate } from 'slate-react'
import RichInputButton from './RichInputButton'

type RichBlockButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {}

const RichBlockButton: FC<RichBlockButtonProps> = (props) => {
  const { children, className, ...otherProps } = props
  const slate = useSlate()

  return <RichInputButton active />
}

export default RichBlockButton
