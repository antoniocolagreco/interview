import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'
import Separator from '../Separator/Separator'

type MenuSectionProps = HTMLAttributes<HTMLElement> & {}

const MenuSection: FC<MenuSectionProps> = (props) => {
  const { title, children, className, ...otherProps } = props
  return (
    <section className={clsx('', className)} {...otherProps}>
      <Separator className='bg-neutral-500 my-2' />
      <h3 className='text-base text-neutral-400 ml-2 mb-2'>{title}</h3>
      {children}
    </section>
  )
}

export default MenuSection
