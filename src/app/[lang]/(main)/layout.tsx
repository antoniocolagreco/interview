import NavBar from '@src/components/NavBar/NavBar'
import { FC, Fragment, HTMLAttributes } from 'react'

type MainLayoutProps = HTMLAttributes<HTMLElement> & { params: { lang: string } }

const MainLayout: FC<MainLayoutProps> = (props) => {
  const { children } = props

  return (
    <Fragment>
      <NavBar></NavBar>
      {children}
    </Fragment>
  )
}

export default MainLayout

