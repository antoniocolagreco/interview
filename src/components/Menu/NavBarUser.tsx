import { authOptions } from '@app/api/auth/[...nextauth]/route'
import getDictionary from '@lib/dictionary'
import clsx from 'clsx'
import { getServerSession } from 'next-auth'
import { FC, HTMLAttributes } from 'react'
import Avatar from '../Avatar/Avatar'
import CloseMenuButton from './CloseMenuButton'

type NavBarUserProps = HTMLAttributes<HTMLDivElement> & {}

const NavBarUser: FC<NavBarUserProps> = async (props) => {
  const { children, className, ...otherProps } = props

  const session = await getServerSession(authOptions)
  const d = getDictionary()

  return (
    <div className={clsx('flex gap-2 pl-2 items-center', className)} {...otherProps}>
      <Avatar src={session?.user?.image} alt={d.user_photo} />
      <div className='flex flex-col text-neutral-200 grow'>
        <span className='grow text-sm font-semibold'>{session?.user?.name ?? session?.user?.email}</span>
      </div>
      <CloseMenuButton />
    </div>
  )
}

export default NavBarUser
