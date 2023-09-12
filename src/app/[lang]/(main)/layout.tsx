import MenuContent from '@components/Menu/MenuContent'
import NavBar from '@src/components/NavBar/NavBar'
import { FC, Fragment, HTMLAttributes } from 'react'
import MenuContainer from '../../../components/Menu/MenuContainer'

type MainLayoutProps = HTMLAttributes<HTMLElement> & { params: { lang: string } }

const MainLayout: FC<MainLayoutProps> = async (props) => {
  const {
    params: { lang },
    children,
  } = props

  return (
    <Fragment>
      <div className='flex w-full grow'>
        <MenuContainer>
          <MenuContent />
        </MenuContainer>
        <div className='w-full'>
          <NavBar />
          <div className='flex-1 max-w-screen-lg w-full mx-auto p-4 text-lg'>{children}</div>
        </div>
      </div>
    </Fragment>
  )
}

export default MainLayout

