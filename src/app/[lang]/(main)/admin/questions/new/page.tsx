import NewQuestion from '@components/NewQuestion/NewQuestion'
import { Page } from '../../../../../../types/pages'

const NewPage: Page = (props) => {
  const { searchParams } = props
  return (
    <>
      <NewQuestion />
    </>
  )
}

export default NewPage
