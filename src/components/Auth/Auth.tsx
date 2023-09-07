'use client'
import Box from '@components/Box/Box'
import Button from '@components/Button/Button'
import { zodResolver } from '@hookform/resolvers/zod'
import { PrismaClient } from '@prisma/client'
import { Separator } from '@radix-ui/react-separator'
import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaGithub } from 'react-icons/fa6'
import { LuLogIn } from 'react-icons/lu'
import * as z from 'zod'
import { DictionaryType } from '../../types/dictionary'
import FormTextInput from '../FormTextInput/FormTextInput'

type AuthType = 'login' | 'signup' | 'reset'

type AuthProps = HTMLAttributes<HTMLDivElement> & { authType: AuthType; dictionary: DictionaryType }

const Auth: FC<AuthProps> = (props) => {
  const { authType, children, className, dictionary: d, ...otherProps } = props
  const prisma = new PrismaClient()

  const FormSchema = z.object({
    email: z
      .string({ required_error: d.validation.email_missing, invalid_type_error: d.validation.email_invalid })
      .min(6, { message: d.validation.email_short })
      .email(),
    password: z
      .string({ required_error: d.validation.password_missing, invalid_type_error: d.validation.password_invalid })
      .min(8, { message: d.validation.password_short })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+/, { message: d.validation.password_invalid }),
  })

  type FormSchemaType = z.infer<typeof FormSchema>

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({ resolver: zodResolver(FormSchema) })

  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    console.log(data)
  }

  return (
    <Box className={clsx(className, 'w-72')} {...otherProps}>
      <form className={clsx(className, 'flex flex-col gap-4 w-full')} onSubmit={handleSubmit(onSubmit)}>
        <FormTextInput
          errorMessage={errors.email?.message}
          label={d.email_address}
          register={register('email')}
          id='email'
        />
        <FormTextInput
          errorMessage={errors.password?.message}
          label={d.password}
          register={register('password')}
          id={authType === 'login' ? 'current-password' : 'new-password'}
        />
        {authType === 'login' && (
          <Button className='w-full' icon={<LuLogIn className='text-xl' />}>
            {d.login}
          </Button>
        )}
        {authType === 'signup' && (
          <Button className='w-full' icon={<LuLogIn className='text-xl' />}>
            {d.signup}
          </Button>
        )}
      </form>
      {authType === 'login' && (
        <>
          <Separator className='my-4 h-[1px] bg-neutral-200' />
          <Button variant='secondary' className='w-full' icon={<FaGithub className='text-2xl' />}>
            Github
          </Button>
        </>
      )}
    </Box>
  )
}

export default Auth
