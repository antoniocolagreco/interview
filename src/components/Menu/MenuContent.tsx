import { getLanguageFromUrl } from '@lib/httpRuquestUtils'
import { FC, HTMLAttributes } from 'react'
import {
  LuFileEdit,
  LuFileQuestion,
  LuFileText,
  LuLogOut,
  LuSettings,
  LuTags,
  LuUsers
} from 'react-icons/lu'
import getDictionary from '../../lib/dictionary'
import MenuHeader from './MenuHeader'
import MenuItem from './MenuItem'
import MenuSection from './MenuSection'
import NavBarUser from './NavBarUser'

type MenuContentProps = HTMLAttributes<HTMLElement> & {}

const MenuContent: FC<MenuContentProps> = async (props) => {
  const { children, className, ...otherProps } = props

  const lang = getLanguageFromUrl()
  const d = getDictionary()

  return (
    <nav className='pt-4 pb-2 h-full flex flex-col text-sm' {...otherProps}>
      <MenuHeader href={`/${lang}`} title={d.project_title} />
      <MenuSection>
        <ul className='space-y-1'>
          <li>
            <MenuItem
              icon={<LuFileQuestion className='text-2xl' />}
              title={d.routes.questions}
              href={`/${lang}/questions`}
            />
          </li>
          <li>
            <MenuItem
              icon={<LuFileText className='text-2xl' />}
              title={d.routes.solutions}
              href={`/${lang}/solutions`}
            />
          </li>
        </ul>
      </MenuSection>
      <MenuSection title='Admin'>
        <ul className='space-y-1'>
          <li>
            <MenuItem
              icon={<LuFileEdit className='text-xl' />}
              title={d.routes.admin_questions}
              href={`/${lang}/admin/questions`}
              matchUrlRoot
            />
          </li>
          <li>
            <MenuItem icon={<LuTags className='text-xl' />} title={d.routes.admin_tags} href={`/${lang}/admin/tags`} />
          </li>
          <li>
            <MenuItem
              icon={<LuUsers className='text-xl' />}
              title={d.routes.admin_users}
              href={`/${lang}/admin/users`}
            />
          </li>
        </ul>
      </MenuSection>
      <MenuSection className='grow flex flex-col justify-end'>
        <ul className='space-y-1'>
          <li>
            <NavBarUser />
          </li>
          <li>
            <MenuItem icon={<LuSettings className='text-xl' />} title={d.routes.settings} href={`/${lang}/settings`} />
          </li>
          <li>
            <MenuItem icon={<LuLogOut className='text-xl' />} title={d.logout} href={`/${lang}/logout`} />
          </li>
        </ul>
      </MenuSection>
    </nav>
  )
}

export default MenuContent
