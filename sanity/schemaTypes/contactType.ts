import { BiSolidContact } from 'react-icons/bi'
import { defineField, defineType } from 'sanity'

export const contactType = defineType({
  name: 'contact',
  title: 'Contact Information',
  type: 'document',
  icon: BiSolidContact,
  fields: [
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'phoneNumber',
      type: 'string',
    }),
    defineField({
      name: 'linkedinProfile',
      description: 'URL to linkedin profile',
      type: 'string',
    }),
    defineField({
      name: 'instagramProfile',
      description: 'URL to instagram profile',
      type: 'string',
    }),
    defineField({
      name: 'xProfile',
      description: 'URL to x(twitter) profile',
      type: 'string',
    }),
    defineField({
      name: 'facebookProfile',
      description: 'URL to facebook profile',
      type: 'string',
    }),
  ],
})
