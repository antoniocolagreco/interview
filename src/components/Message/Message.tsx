import clsx from 'clsx';
import { FC, HTMLAttributes, ReactNode } from 'react';
import { MdCheckCircleOutline, MdErrorOutline, MdInfoOutline, MdOutlineWarningAmber } from 'react-icons/md';

type MessageProps = HTMLAttributes<HTMLDivElement> & { icon?: ReactNode; visible?: any }

const Message: FC<MessageProps> = (props) => {
  const { visible, icon, children, className, ...otherProps } = props

  if (!Boolean(visible)) return <></>

  return (
    <div className={clsx(className, 'text-sm p-2 flex gap-4 border-[1px] rounded-lg ')} {...otherProps}>
      {icon}
      <span className='grow'>{children}</span>
    </div>
  )
}

export const ErrorMessage: FC<MessageProps> = (props) => {
  const { children, icon = <MdErrorOutline className='text-2xl text-red-500' />, className, ...otherProps } = props
  return (
    <Message className={clsx(className, 'border-red-500 bg-red-50')} icon={icon} {...otherProps}>
      {children}
    </Message>
  )
}

export const WarningMessage: FC<MessageProps> = (props) => {
  const {
    children,
    icon = <MdOutlineWarningAmber className='text-2xl text-orange-500' />,
    className,
    ...otherProps
  } = props
  return (
    <Message className={clsx(className, 'border-orange-500 bg-orange-50')} icon={icon} {...otherProps}>
      {children}
    </Message>
  )
}

export const OkMessage: FC<MessageProps> = (props) => {
  const {
    children,
    icon = <MdCheckCircleOutline className='text-2xl text-green-500' />,
    className,
    ...otherProps
  } = props
  return (
    <Message className={clsx(className, 'border-green-500 bg-green-50')} icon={icon} {...otherProps}>
      {children}
    </Message>
  )
}

export const InfoMessage: FC<MessageProps> = (props) => {
  const { children, icon = <MdInfoOutline className='text-2xl text-blue-500' />, className, ...otherProps } = props
  return (
    <Message className={clsx(className, 'border-blue-500 bg-blue-50')} icon={icon} {...otherProps}>
      {children}
    </Message>
  )
}
