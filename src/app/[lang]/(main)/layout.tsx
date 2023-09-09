import NavBar from '@src/components/NavBar/NavBar'
import { FC, Fragment, HTMLAttributes } from 'react'
import getDictionary from '../../../lib/dictionary'

type MainLayoutProps = HTMLAttributes<HTMLElement> & { params: { lang: string } }

const MainLayout: FC<MainLayoutProps> = async (props) => {
  const {
    params: { lang },
    children,
  } = props

  const d = await getDictionary(lang)

  return (
    <Fragment>
      <NavBar title={d.title} />
      {children}
    </Fragment>
  )
}

export default MainLayout

