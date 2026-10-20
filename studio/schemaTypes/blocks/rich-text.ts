import { Type } from 'lucide-react'
import { defineField, defineType } from 'sanity'

import baseBlockSettings from '@/schemaTypes/objects/base-block-settings'

export const icon = Type
export const title = 'Rich text'
export const type = 'richText'

export default defineType({
  name: type,
  title,
  icon,
  type: 'object',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'settings', title: 'Settings' },
  ],
  fields: [
    defineField({
      name: 'content',
      title: 'Content',
      type: 'richTextAdvanced',
      group: 'content',
    }),
    baseBlockSettings({ paddingTop: 'none', paddingBottom: 'none' }),
  ],
  preview: {
    prepare() {
      return { title, media: icon }
    },
  },
})
