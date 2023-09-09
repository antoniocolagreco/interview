'use client'
import Box from '@components/Box/Box'
import Button from '@components/Button/Button'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { signIn, signOut, useSession } from 'next-auth/react'
import { FC, HTMLAttributes, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaGithub } from 'react-icons/fa6'
import { LuLogIn } from 'react-icons/lu'
import * as z from 'zod'
import { DictionaryType } from '../../types/dictionary'
import FormTextInput from '../FormTextInput/FormTextInput'
import { ErrorMessage, OkMessage } from '../Message/Message'
import Separator from '../Separator/Separator'

type AuthType = 'login' | 'signup' | 'reset'

type AuthProps = HTMLAttributes<HTMLDivElement> & { authType: AuthType; dictionary: DictionaryType }

const Auth: FC<AuthProps> = (props) => {
  const { authType, children, className, dictionary: d, ...otherProps } = props
  const [isLoading, setLoading] = useState<'credentials' | 'github' | null>()
  const [serverError, setServerError] = useState<string | null>()
  const session = useSession()

  const FormSchema = z.object({
    email: z.string({ required_error: d.validation.email_missing }).email({ message: d.validation.email_invalid }),
    password: z
      .string({ required_error: d.validation.password_missing })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+/, { message: d.validation.password_invalid })
      .min(8, { message: d.validation.password_short }),
  })

  type FormSchemaType = z.infer<typeof FormSchema>

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({ resolver: zodResolver(FormSchema) })

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    switch (authType) {
      case 'signup':
        try {
          const options: RequestInit = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          }
          setLoading('credentials')
          fetch('/api/auth/signup', options)
            .then(async (res) => {
              if (!res.ok) {
                return res.text().then((errorMessage) => {
                  throw new Error(errorMessage)
                })
              }
              session.update()
              setServerError(undefined)
            })
            .catch((err) => {
              const error = err as Error
              setServerError(error.message)
            })
            .finally(() => {
              setLoading(null)
            })
        } catch (error) {
          throw error
        }
        break

      case 'login':
        try {
          setLoading('credentials')
          const user = await signIn('credentials', { ...data, redirect: false }).finally(() => {
            setLoading(null)
            setServerError(null)
          })
          if (!user) {
            setServerError(d.invalid_credentials)
          }
        } catch (error) {
          throw error
        }
        break

      case 'reset':
        break
    }
  }

  const handleGitHubClick = async () => {
    try {
      setLoading('github')
      await signIn('github')
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.error(err)
        })
        .finally(() => {
          setLoading(null)
        })
    } catch (error) {
      throw error
    }
  }

  return (
    <Box className={clsx(className, 'w-72')} {...otherProps}>
      <form className={clsx(className, 'flex flex-col gap-4 w-full')} onSubmit={handleSubmit(onSubmit)}>
        <ErrorMessage visible={serverError}>{serverError}</ErrorMessage>
        <OkMessage visible={session.data?.user}>{session.data?.user?.email}</OkMessage>
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
        {authType === 'login' && session.status === 'unauthenticated' && (
          <Button className='w-full' icon={<LuLogIn className='text-xl' />} isLoading={isLoading === 'credentials'}>
            {d.login}
          </Button>
        )}
        {authType === 'signup' && (
          <Button className='w-full' icon={<LuLogIn className='text-xl' />} isLoading={isLoading === 'credentials'}>
            {d.signup}
          </Button>
        )}
        {authType === 'login' && session.status === 'authenticated' && (
          <Button
            className='w-full'
            icon={<LuLogIn className='text-xl' />}
            isLoading={isLoading === 'credentials'}
            variant='cancel'
            type='button'
            onClick={() => signOut({ redirect: false })}
          >
            {d.logout}
          </Button>
        )}
      </form>
      {authType === 'login' && (
        <>
          <Separator className='my-4' />
          <Button
            variant='secondary'
            className='w-full'
            icon={<FaGithub className='text-2xl' />}
            isLoading={isLoading === 'github'}
            onClick={handleGitHubClick}
          >
            Github
          </Button>
        </>
      )}
    </Box>
  )
}

export default Auth
