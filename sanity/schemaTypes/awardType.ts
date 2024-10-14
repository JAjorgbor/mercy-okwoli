import { Award } from 'react-feather'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const awardType = defineType({
  name: 'awards',
  title: 'Awards',
  type: 'document',
  icon: Award,
  fields: [
    defineField({
      name: 'institutionName',
      title: 'Name of Institution that provided the award',
      type: 'string',
    }),
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'keyPoints',
      description:
        'What key points can you highlight from your obtaining this award?',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        }),
      ],
    }),
    defineField({
      name: 'attatchedImage',
      type: 'image',
      description: 'image of the award',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'attatchedImage',
    },
  },
})
