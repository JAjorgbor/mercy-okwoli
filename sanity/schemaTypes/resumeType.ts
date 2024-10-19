import { DocumentIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const resumeType = defineType({
  name: 'resume',
  title: 'Resume',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'education',
      description: '',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'education' }],
        },
      ],
    }),
    defineField({
      name: 'experience',
      description: '',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'experience' }],
        },
      ],
    }),
    defineField({
      name: 'awards',
      description: '',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'awards' }],
        },
      ],
    }),
    defineField({
      name: 'attachedDocument',
      type: 'file',
      description: 'Your CV',
      fields: [
        {
          name: 'name',
          title: 'File Name',
          type: 'string',
          description: 'A custom name for the uploaded file',
          options: {
            isHighlighted: true, // Highlight the field in the editor UI
          },
        },
      ],
    }),
    defineField({
      name: 'competencies',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
            }),
            defineField({
              name: 'competencyLevel',
              type: 'number',
              validation: (Rule) =>
                Rule.min(0).max(100).error('Value must be between 0 and 100'),
              description: 'Pick a number between 0 and 100',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'tools',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'tools' }] }],
      //   options: {
      //     layout: 'tags', // This ensures the input looks like a tag editor
      //   },
      validation: (rule) => rule.unique().error('Tools must be unique'),
    }),
  ],
})
