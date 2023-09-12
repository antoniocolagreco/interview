'use client'
import { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'
import store from '../../store/store'

const Providers: FC<{ children: ReactNode }> = (props) => {
  return (
    <>
      <Provider store={store}>{props.children}</Provider>
    </>
  )
}

export default Providers
