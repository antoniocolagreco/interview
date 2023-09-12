import { FC, HTMLAttributes } from 'react'

type AppPageProps = HTMLAttributes<HTMLDivElement> & { searchParams: {} }

const AppPage: FC<AppPageProps> = (props) => {
  const { searchParams, ...otherProps } = props
  return (
    <div className='relative' {...otherProps}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sunt, dolorem aspernatur unde autem nihil
      mollitia iure, excepturi nostrum quo suscipit aliquid. At dicta libero commodi beatae rerum vitae obcaecati.
    </div>
  )
}

export default AppPage

