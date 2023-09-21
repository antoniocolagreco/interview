'use client'
import { Listbox, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { FC, Fragment, HTMLAttributes } from 'react'
import { LuCheck, LuChevronDown } from 'react-icons/lu'

export type ListBoxValue<K = string, N = string> = { key: K; name: N }

type ListBoxProps = Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'> & {
  selected: ListBoxValue
  onSelect: (value: ListBoxValue) => void
  values: ListBoxValue[]
}

const ListBox: FC<ListBoxProps> = (props) => {
  const { selected, onSelect, values, children, className, ...otherProps } = props

  return (
    <div className={clsx('relative w-full', className)} {...otherProps}>
      <Listbox value={selected} onChange={onSelect} by={'key'}>
        <div className='relative'>
          <Listbox.Button className='relative w-full cursor-pointer rounded-lg text-neutral-700 bg-white px-4 py-2 border-[1px] border-neutral-200 text-sm outline-none focus-visible:ring-2 ring-yellow-500'>
            <span className='block truncate'>{selected.name}</span>
            <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
              <LuChevronDown className='h-5 w-5 text-neutral-400' aria-hidden='true' />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            enter='transition ease-out'
            enterFrom='opacity-0'
            enterTo='opacity-1000'
            leave='transition ease-in'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='absolute mt-1 w-full overflow-auto rounded-lg text-neutral-700 cursor-pointer bg-white border-[1px] border-neutral-200 text-sm outline-none focus-visible:ring-2 ring-yellow-500'>
              {values.map((value) => (
                <Listbox.Option key={value.key} value={value}>
                  {({ active, selected }) => {
                    return (
                      <div
                        className={`flex gap-2 items-center w-full p-2 ${
                          active ? 'bg-yellow-100 text-amber-700' : 'bg-white'
                        }`}
                      >
                        <span className='text-amber-600 w-5 h-5 grid place-content-center'>
                          {selected && <LuCheck className='text-lg' />}
                        </span>
                        {value.name}
                      </div>
                    )
                  }}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default ListBox
