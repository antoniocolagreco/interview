import { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import useDomReady from './useDomReady'

const useTeleportToNavBar = () => {
  let navBarPortal: HTMLElement | null
  const domReady = useDomReady()

  if (domReady) {
    navBarPortal = document.getElementById('nav-bar-portal')
  }

  const teleport = (content: ReactNode) => domReady && navBarPortal && createPortal(content, navBarPortal)

  return teleport
}

export default useTeleportToNavBar
