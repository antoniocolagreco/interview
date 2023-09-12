'use client'
import { isMobileMenuOpen } from '@features/ui/selectors'
import { Transition } from '@headlessui/react'
import { FC, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import { switchMobileMenuState } from '../../features/ui/reducer'
import Overlay from '../Overlay/Overlay'

type MenuContainerProps = { children: ReactNode }

const MenuContainer: FC<MenuContainerProps> = (props) => {
  const isOpen = useSelector(isMobileMenuOpen)
  const dispath = useDispatch()

  return (
    <>
      <div className='hidden w-64 shrink-0 md:block pr-8 pl-2 bg-neutral-600'>{props.children}</div>
      {typeof window === 'object' &&
        createPortal(
          <>
            <Overlay show={isOpen} onClick={() => dispath(switchMobileMenuState())} />
            <Transition
              show={isOpen}
              enter='transition-transform duration-300'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transition-transform duration-300'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'
              className='absolute left-0 top-0 bottom-0 w-64 shrink-0 md:hidden pr-4 pl-2 bg-neutral-600'
              style={{ backdropFilter: 'blur(10px)' }}
            >
              {props.children}
            </Transition>
          </>,
          document.body
        )}
    </>
  )
}

export default MenuContainer
