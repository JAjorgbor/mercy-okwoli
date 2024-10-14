import { type SchemaTypeDefinition } from 'sanity'

import { adminType } from '@/sanity/schemaTypes/adminType'
import { awardType } from '@/sanity/schemaTypes/awardType'
import { blockContentType } from '@/sanity/schemaTypes/blockContentType'
import { contactType } from '@/sanity/schemaTypes/contactType'
import { educationType } from '@/sanity/schemaTypes/educationType'
import { experienceType } from '@/sanity/schemaTypes/experienceType'
import { projectType } from '@/sanity/schemaTypes/projectType'
import { resumeType } from '@/sanity/schemaTypes/resumeType'
import { toolsType } from '@/sanity/schemaTypes/toolsType'
import { dateRangeType } from '@/sanity/schemaTypes/dateRangeType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Main
    adminType,
    resumeType,
    projectType,
    contactType,
    // Items
    blockContentType,
    educationType,
    experienceType,
    awardType,
    toolsType,
    dateRangeType,
  ],
}
