import { UserIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const adminType = defineType({
  name: 'admin',
  title: 'Admin',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      description: 'Professional Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'headshot1',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'headshot2',
      description:
        'Headshot that would be used in about page. If left blank headshot1 will be used',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
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
      name: 'whatIDo',
      type: 'array',
      description: 'This field must have exactly 3 values',
      validation: (rule) =>
        rule.length(3).error('You must provide exactly 3 items'),
      of: [
        defineArrayMember({
          type: 'string',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'headshot1',
    },
  },
})
