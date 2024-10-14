import { WrenchIcon } from '@sanity/icons'

import { defineType } from 'sanity'

export const toolsType = defineType({
  name: 'tools',
  title: 'Tools',
  type: 'document', // Make it a document type if you want to use the icon
  icon: WrenchIcon, // `icon` can be used here, on the document level
  fields: [
    {
      name: 'toolName',
      title: 'Tool Name',
      type: 'string',
    },
  ],
})
