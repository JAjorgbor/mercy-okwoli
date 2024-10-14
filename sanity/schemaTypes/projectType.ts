import { Layout } from 'react-feather'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  icon: Layout,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Project description',
      description: '',
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
      name: 'thumbnail',
      type: 'image',
      description: 'Thumbnail image of the project',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'attatchedDocument',
      type: 'file',
      description:
        'Any document that is relevant to this project (e.g slides, article)',
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
      name: 'visiblity',
      description: 'Do you want this project to be visible on the site?',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'status',
      description: "Project's development status",
      type: 'string',
      initialValue: 'completed',
      options: {
        list: [
          { title: 'Completed', value: 'completed' },
          { title: 'Ongoing', value: 'ongoing' },
        ],
      },
    }),
    defineField({
      name: 'tools',
      title: 'Tools Used',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'tools' }] }],
      //   options: {
      //     layout: 'tags', // This ensures the input looks like a tag editor
      //   },
      validation: (rule) => rule.unique().error('Tools must be unique'),
    }),
  ],
})