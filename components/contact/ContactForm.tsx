'use client'
import Button from '@/components/elements/Button'
import InputField from '@/components/elements/InputField'
import type { FC } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'
import { toast } from 'react-toastify'
import { Contact } from '@/sanity.types'

interface ContactFormProps {
  contact: Contact
}

const ContactForm: FC<ContactFormProps> = ({ contact }) => {
  const formHandler = useForm()

  //   eslint-disable-next-line
  const handleSubmit = async (data: any) => {
    try {
      data.toName = 'Mercy'
      data.fromEmail = contact.email
      data.toEmail = contact.email
      data.replyTo = data.email
      const result = await emailjs.send(
        String(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID),
        String(process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID),
        data,
        String(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY),
      )
      console.log(data)
      console.log(result)
      toast.success('Email sent successfully.')
      formHandler.reset()
    } catch (error) {
      console.error(error)
      toast.error(
        `Oops something went wrong. Please try again later or try contacting me directly through ${contact.email}`,
      )
    }
  }
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
        <Button type='submit' isLoading={formHandler.formState.isSubmitting}>
          Submit
        </Button>
      </div>
    </form>
  )
}
export default ContactForm
