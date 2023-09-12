import { FC, HTMLAttributes } from 'react'

type UsersPageProps = HTMLAttributes<HTMLDivElement> & { searchParams: {} }

const AdminUsersPage: FC<UsersPageProps> = (props) => {
  const { searchParams, ...otherProps } = props
  return <div {...otherProps}>AdminUsersPage</div>
}

export default AdminUsersPage
