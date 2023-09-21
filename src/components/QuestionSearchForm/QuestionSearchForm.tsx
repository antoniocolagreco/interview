'use client'
import clsx from 'clsx'
import { FC, FormHTMLAttributes, useState } from 'react'
import { LuSearch } from 'react-icons/lu'
import useDictionary from '../../hooks/useDictionary'
import Button from '../Button/Button'
import InputText from '../InputText/InputText'
import ListBox, { ListBoxValue } from '../ListBox/ListBox'

type QuestionSearchFormProps = FormHTMLAttributes<HTMLFormElement> & {}

type SortType = 'newest' | 'oldest' | 'name' | 'reverse'

const QuestionSearchForm: FC<QuestionSearchFormProps> = (props) => {
  const { children, className, ...otherProps } = props
  const [searchText, setSearchText] = useState('')
  const d = useDictionary()
  const sortTypesList: ListBoxValue<SortType, string>[] = [
    { key: 'newest', name: d.sort_by_newest },
    { key: 'oldest', name: d.sort_by_oldest },
    { key: 'name', name: d.sort_by_name },
    { key: 'reverse', name: d.sort_by_name_reverse },
  ]
  const [selectedSortType, setSelectedSortType] = useState<ListBoxValue>(sortTypesList[0])

  const handleSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }

  const handleSortTypeChange = (value: ListBoxValue) => {
    setSelectedSortType(value)
  }

  const handleSubmit = () => {}

  return (
    <form className={clsx('flex flex-col gap-2', className)} onSubmit={handleSubmit} {...otherProps}>
      <InputText value={searchText} onChange={handleSearchTextChange} placeholder={d.search_filter} />
      <div className='flex gap-2 flex-wrap'>
        <ListBox
          className='flex-grow flex-shrink basis-56'
          selected={selectedSortType}
          onSelect={handleSortTypeChange}
          values={sortTypesList}
        />
        <ListBox
          className='flex-grow flex-shrink basis-56'
          selected={selectedSortType}
          onSelect={handleSortTypeChange}
          values={sortTypesList}
        />
      </div>
      <Button className='w-56 self-center' icon={<LuSearch className='text-lg' />}>
        {d.search}
      </Button>
    </form>
  )
}

export default QuestionSearchForm
