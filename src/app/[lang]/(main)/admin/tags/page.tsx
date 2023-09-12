import { FC, HTMLAttributes } from 'react'

type TagsPageProps = HTMLAttributes<HTMLDivElement> & { searchParams: {} }

const AdminTagsPage: FC<TagsPageProps> = (props) => {
  const { searchParams, ...otherProps } = props
  return <div {...otherProps}>AdminTagsPage</div>
}

export default AdminTagsPage
