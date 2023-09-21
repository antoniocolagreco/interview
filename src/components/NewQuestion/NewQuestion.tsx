'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { FC, useCallback, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { LuCheck, LuX } from 'react-icons/lu'
import { Descendant } from 'slate'
import { z } from 'zod'
import useDictionary from '../../hooks/useDictionary'
import Box, { BoxProps } from '../Box/Box'
import Button from '../Button/Button'
import FormRichInput from '../FormRichInput/FormRichInput'
import FormTagSelector from '../FormTagSelector/FormTagSelector'
import FormTextInput from '../FormTextInput/FormTextInput'

type NewQuestionProps = BoxProps & {}

const NewQuestion: FC<NewQuestionProps> = (props) => {
  const { children, className, ...otherProps } = props
  const d = useDictionary()
  const [description, setDescription] = useState<Descendant[]>()

  const FormSchema = z.object({
    title: z.string().nonempty({ message: d.validation.required }),
  })

  type FormSchemaType = z.infer<typeof FormSchema> & { description: string }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({ resolver: zodResolver(FormSchema) })

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    const serializedDescription = JSON.stringify(description)
    data.description = serializedDescription
    console.log(data)
  }

  const handleRichInputChange = useCallback((value: Descendant[]) => {
    console.log(value)
    setDescription(value)
  }, [])

  return (
    <Box className={clsx('w-full', className)} {...otherProps}>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 '>
        <FormTextInput
          id='title'
          type='text'
          register={register('title')}
          label={d.title}
          errorMessage={errors.title?.message}
          autoFocus
        />
        <FormRichInput id='description' label={d.description} onChange={handleRichInputChange} />
        <FormTagSelector id='tags' label={d.tags} />
        <div className='flex gap-4'>
          <Button type='submit' className='flex-1' icon={<LuCheck className='text-xl' />}>
            {d.ok}
          </Button>
          <Button type='button' variant='light' className='flex-1' icon={<LuX className='text-xl' />}>
            {d.cancel}
          </Button>
        </div>
      </form>
    </Box>
  )
}

export default NewQuestion
