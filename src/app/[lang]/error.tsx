'use client'
import { FC, HTMLAttributes } from 'react';

type ErrorProps = HTMLAttributes<HTMLDivElement> & { error: Error; reset: () => void }

const Error: FC<ErrorProps> = (props) => {
  const { error, reset, ...otherProps } = props

  return (
    <div {...otherProps}>
      <div>{`${error.name} | ${error.message}`}</div>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Error
