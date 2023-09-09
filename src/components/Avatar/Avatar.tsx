import clsx from 'clsx';
import Image from 'next/image';
import { FC, HTMLAttributes } from 'react';

type AvatarProps = HTMLAttributes<HTMLDivElement> & { size?: number; src: string | undefined | null; alt: string }

const Avatar: FC<AvatarProps> = async (props) => {
  const { src, alt, children, className, size = 32, ...otherProps } = props

  return (
    <div className={clsx('', className)} {...otherProps}>
      <Image
        className='rounded-full overflow-hidden'
        width={size}
        height={size}
        src={src ?? '/images/user.svg'}
        alt={alt}
      />
    </div>
  )
}

export default Avatar
