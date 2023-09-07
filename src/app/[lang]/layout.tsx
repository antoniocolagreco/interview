import '@app/globals.css'
import clsx from 'clsx'
import { Inter } from 'next/font/google'
import { FC, HTMLAttributes } from 'react'
import getDictionary from '../../lib/dictionary'
import { LayoutMetaDataType } from '../../types/next'

const inter = Inter({ subsets: ['latin'] })

type Params = { params: { lang: string } }

export const generateMetadata: LayoutMetaDataType<Params> = async (props) => {
  const d = await getDictionary(props.params.lang)
  return { title: d.title }
}

type RootLayoutProps = HTMLAttributes<HTMLElement> & { params: { lang: string } }

const RootLayout: FC<RootLayoutProps> = (props) => {
  const {
    children,
    params: { lang },
  } = props

  return (
    <html lang={lang} className='min-h-screen'>
      <body className={clsx(inter.className, 'min-h-screen text-neutral-800')}>{children}</body>
    </html>
  )
}

export default RootLayout

