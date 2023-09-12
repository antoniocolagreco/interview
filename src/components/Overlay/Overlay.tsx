'use client'
import { Transition, TransitionClasses, TransitionEvents } from '@headlessui/react'
import { FC, HTMLAttributes } from 'react'

type OverlayProps = HTMLAttributes<HTMLDivElement> &
  TransitionClasses &
  TransitionEvents & {
    show?: boolean
    appear?: boolean
  }

const Overlay: FC<OverlayProps> = (props) => {
  const { className, ...otherProps } = props
  return (
    <Transition
      className='absolute inset-0 bg-black'
      enter='transition-all'
      enterFrom='opacity-0'
      enterTo='opacity-20 backdrop-blur-sm'
      leave='transition-all'
      leaveFrom='opacity-20 backdrop-blur-sm'
      leaveTo='opacity-0'
      {...otherProps}
    />
  )
}

export default Overlay
