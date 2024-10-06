'use client'
import Button from '@/components/elements/Button'
import InputField from '@/components/elements/InputField'
import type { FC } from 'react'
import { useForm } from 'react-hook-form'

interface ContactFormProps {}

const ContactForm: FC<ContactFormProps> = ({}) => {
  const formHandler = useForm()
  const handleSubmit = (data) => console.log(data)
  return (
    <form
      action='#'
      className='space-y-3 '
      onSubmit={formHandler.handleSubmit(handleSubmit)}
      noValidate
    >
      <div className='grid md:grid-cols-2 gap-4'>
        <InputField
          isName
          type='text'
          register={formHandler.register('firstName', {
            required: 'First name is required',
          })}
          errorMessage={formHandler.formState.errors.firstName?.message}
          label='First Name'
          isRequired
        />

        <InputField
          isName
          type='text'
          label='Last Name'
          isRequired
          register={formHandler.register('lastName', {
            required: 'Last name is required',
          })}
          errorMessage={formHandler.formState.errors.lastName?.message}
        />
        <InputField
          type='email'
          label='Email Address'
          register={formHandler.register('email', {
            required: 'Email address is required',
          })}
          errorMessage={formHandler.formState.errors.email?.message}
          isRequired
          className='md:col-span-2'
        />
        <InputField
          type='textarea'
          label='Message'
          register={formHandler.register('message', {
            required: 'Message is required',
          })}
          errorMessage={formHandler.formState.errors.message?.message}
          isRequired
          className='md:col-span-2'
        />
      </div>
      <div className='flex justify-end'>
        <Button type='submit'>Submit</Button>
      </div>
    </form>
  )
}
export default ContactForm
