import { defineArrayMember, defineType } from 'sanity'

import {
  icon as workMetaIcon,
  title as workMetaTitle,
  type as workMetaType,
} from '@/schemaTypes/blocks/work-meta'

export const title = 'Page builder'
export const type = 'pageBuilder'

export default defineType({
  name: type,
  title,
  type: 'array',
  of: [
    defineArrayMember({
      type: workMetaType,
      icon: workMetaIcon,
      title: workMetaTitle,
    }),
  ],
})
