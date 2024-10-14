import { IoSchoolOutline } from 'react-icons/io5'
import { defineField, defineType } from 'sanity'

export const educationType = defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  icon: IoSchoolOutline,
  fields: [
    defineField({
      name: 'institutionName',
      title: 'Name of Institution',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'startDate',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'endDate',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'attatchedDocument',
      type: 'file',
    }),
  ],
})
