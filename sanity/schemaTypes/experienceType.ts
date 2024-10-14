import { Briefcase } from 'react-feather'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const experienceType = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  icon: Briefcase,
  fields: [
    defineField({
      name: 'companyName',
      title: 'Name of Company',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tools',
      type: 'array',
      description: 'Tools you used in this role',
      of: [{ type: 'reference', to: [{ type: 'tools' }] }],
      //   options: {
      //     layout: 'tags', // This ensures the input looks like a tag editor
      //   },
      validation: (rule) => rule.unique().error('Tools must be unique'),
    }),
    defineField({
      name: 'visiblity',
      description: 'Do you want this experience to be visible on the site?',
      type: 'boolean',
      initialValue: true,
    }),

    defineField({
      name: 'role',
      description: 'Your role in this company',
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
      name: 'keyPoints',
      type: 'array',
      description:
        'What key points can you highlight from your experience working here?',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        }),
      ],
    }),
  ],
})
