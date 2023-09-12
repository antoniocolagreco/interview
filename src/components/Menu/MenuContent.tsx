import { getLanguageFromUrl } from '@lib/httpRuquestUtils'
import { FC, HTMLAttributes } from 'react'
import { LuFileEdit, LuFileQuestion, LuFileText, LuLogOut, LuSettings, LuTags, LuUsers } from 'react-icons/lu'
import getDictionary from '../../lib/dictionary'
import Separator from '../Separator/Separator'
import MenuItem from './MenuItem'
import NavBarUser from './NavBarUser'

type MenuContentProps = HTMLAttributes<HTMLElement> & {}

const MenuContent: FC<MenuContentProps> = async (props) => {
  const { children, className, ...otherProps } = props

  const lang = getLanguageFromUrl()
  const d = getDictionary()

  return (
    <nav className='pt-4 pb-2 h-full flex flex-col text-sm' {...otherProps}>
      <NavBarUser />
      <Separator className='bg-neutral-500 my-4' />
      <ul className='space-y-1'>
        <li>
          <MenuItem icon={<LuFileQuestion className='text-2xl' />} title='Questions' href={`/${lang}/questions`} />
        </li>
        <li>
          <MenuItem icon={<LuFileText className='text-2xl' />} title='Solutions' href={`/${lang}/solutions`} />
        </li>
      </ul>
      <Separator className='bg-neutral-500 my-4' />
      <ul className='space-y-1'>
        <li>
          <MenuItem
            icon={<LuFileEdit className='text-xl' />}
            title='Edit Questions'
            href={`/${lang}/admin/questions`}
          />
        </li>
        <li>
          <MenuItem icon={<LuTags className='text-xl' />} title='Edit Tags' href={`/${lang}/admin/tags`} />
        </li>
        <li>
          <MenuItem icon={<LuUsers className='text-xl' />} title='Edit Users' href={`/${lang}/admin/users`} />
        </li>
      </ul>
      <div className='grow' />
      <Separator className='bg-neutral-500 my-4' />
      <ul className='space-y-1'>
        <li>
          <MenuItem icon={<LuSettings className='text-xl' />} title='Settings' href={`/${lang}/settings`} />
        </li>
        <li>
          <MenuItem icon={<LuLogOut className='text-xl' />} title='Logout' href={`/${lang}/logout`} />
        </li>
      </ul>
    </nav>
  )
}

export default MenuContent
