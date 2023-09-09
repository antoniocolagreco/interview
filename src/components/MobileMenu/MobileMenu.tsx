import { getLanguageFromUrl } from '@lib/httpRuquestUtils'
import clsx from 'clsx'
import { getServerSession } from 'next-auth'
import { FC, HTMLAttributes } from 'react'
import { LuFileCheck, LuFileEdit, LuFileQuestion, LuLogOut, LuSettings, LuTags, LuUsers, LuX } from 'react-icons/lu'
import { authOptions } from '../../app/api/auth/[...nextauth]/route'
import getDictionary from '../../lib/dictionary'
import Avatar from '../Avatar/Avatar'
import ButtonIcon from '../ButtonIcon/ButtonIcon'
import MobileMenuItem from '../MobileMenuItem/MobileMenuItem'
import Separator from '../Separator/Separator'

type MobileMenuProps = HTMLAttributes<HTMLDivElement> & {}

const MobileMenu: FC<MobileMenuProps> = async (props) => {
  const { children, className, ...otherProps } = props

  const lang = getLanguageFromUrl()
  const session = await getServerSession(authOptions)
  const d = getDictionary()

  return (
    <div
      className={clsx(
        className,
        'absolute right-0 top-0 bottom-0 bg-neutral-700 rounded-l-lg text-neutral-50 opacity-90'
      )}
      {...otherProps}
    >
      <nav className='px-4 py-4'>
        <div className='flex pl-4 gap-2 items-center mb-4'>
          <Avatar src={session?.user?.image} alt={d.user_photo} />
          <div className='flex flex-col'>
            <span className='grow'>{session?.user?.name}</span>
            <span className='grow text-xs text-neutral-300'>{session?.user?.email}</span>
          </div>
          <ButtonIcon className='hover:bg-neutral-500' icon={<LuX className='text-xl' />} />
        </div>
        <Separator className='bg-neutral-400' />
        <ul className='flex flex-col gap-2 text-sm'>
          <li></li>
          <li>
            <MobileMenuItem
              icon={<LuFileQuestion className='text-xl' />}
              title='Questions'
              href={`/${lang}/questions`}
            />
          </li>
          <li>
            <MobileMenuItem icon={<LuFileCheck className='text-xl' />} title='Solutions' href={`/${lang}/solutions`} />
          </li>
          <li>
            <MobileMenuItem
              icon={<LuFileEdit className='text-xl' />}
              title='Edit Questions'
              href={`/${lang}/edit/questions`}
            />
          </li>
          <li>
            <MobileMenuItem icon={<LuTags className='text-xl' />} title='Edit Tags' href={`/${lang}/edit/tags`} />
          </li>
          <li>
            <MobileMenuItem icon={<LuUsers className='text-xl' />} title='Edit Users' href={`/${lang}/edit/users`} />
          </li>
          <li>
            <MobileMenuItem icon={<LuSettings className='text-xl' />} title='Settings' href={`/${lang}/setting`} />
          </li>
          <li>
            <MobileMenuItem icon={<LuLogOut className='text-xl' />} title='Logout' href={`/${lang}/logout`} />
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default MobileMenu
