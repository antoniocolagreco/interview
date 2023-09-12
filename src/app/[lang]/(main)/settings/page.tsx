import { FC, HTMLAttributes } from 'react'

type SettingsPageProps = HTMLAttributes<HTMLDivElement> & { searchParams: {} }

const SettingsPage: FC<SettingsPageProps> = (props) => {
  const { searchParams, ...otherProps } = props
  return <div {...otherProps}>SettingsPage</div>
}

export default SettingsPage
