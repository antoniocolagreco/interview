import { useLayoutEffect, useState } from 'react'

const useDomReady = () => {
  const [isDomReady, setDomReady] = useState(false)

  useLayoutEffect(() => {
    setDomReady(true)
  }, [])

  return isDomReady
}

export default useDomReady
