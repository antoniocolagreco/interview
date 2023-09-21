'use client'
import { LinkButton } from '@components/Button/Button'
import useCurrentLanguage from '@hooks/useCurrentLanguage'
import useDictionary from '@hooks/useDictionary'
import useTeleportToNavBar from '@hooks/useTeleportToNavBar'
import QuestionSearchForm from '@src/components/QuestionSearchForm/QuestionSearchForm'
import { Fragment } from 'react'
import { LuPlus } from 'react-icons/lu'
import { Page } from '../../../../../types/pages'

const AdminQuestionsPages: Page = (props) => {
  const { searchParams } = props

  const toNavBar = useTeleportToNavBar()
  const lang = useCurrentLanguage()
  const d = useDictionary()

  return (
    <Fragment>
      <QuestionSearchForm />
      {toNavBar(
        <LinkButton
          type='button'
          className='w-56'
          icon={<LuPlus className='text-lg' />}
          variant='dark'
          href={`/${lang}/admin/questions/new`}
        >
          {d.add_new_question}
        </LinkButton>
      )}
    </Fragment>
  )
}

export default AdminQuestionsPages
