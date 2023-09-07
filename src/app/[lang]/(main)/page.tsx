import { FC, HTMLAttributes } from 'react'

type AppPageProps = HTMLAttributes<HTMLDivElement> & { searchParams: {} }

const AppPage: FC<AppPageProps> = (props) => {
  const { searchParams, ...otherProps } = props
  return <div {...otherProps}>AppPage</div>
}

export default AppPage

