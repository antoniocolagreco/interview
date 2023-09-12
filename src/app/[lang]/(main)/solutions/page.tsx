import { FC, HTMLAttributes } from 'react'

type SolutionsPageProps = HTMLAttributes<HTMLDivElement> & { searchParams: {} }

const SolutionsPage: FC<SolutionsPageProps> = (props) => {
  const { searchParams, ...otherProps } = props
  return <div {...otherProps}>SolutionsPage</div>
}

export default SolutionsPage
