import { Tags } from 'lucide-react'
import { defineField, defineType } from 'sanity'

import {
  ReadOnlyParentInput,
  WorkMetaFieldsNote,
} from '@/components/work-meta-preview'
import baseBlockSettings from '@/schemaTypes/objects/base-block-settings'

export const icon = Tags
export const title = 'Work meta'
export const type = 'workMeta'

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
      name: 'projectType',
      title: 'Project type',
      type: 'reference',
      to: [{ type: 'projectType' }],
      readOnly: true,
      group: 'content',
      components: { input: ReadOnlyParentInput, field: WorkMetaFieldsNote },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      readOnly: true,
      group: 'content',
      components: { input: ReadOnlyParentInput },
    }),
    defineField({
      name: 'contribution',
      title: 'Contribution',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'contribution' }] }],
      readOnly: true,
      group: 'content',
      components: { input: ReadOnlyParentInput },
    }),
    baseBlockSettings({ paddingTop: 'none', paddingBottom: 'none' }),
  ],
  preview: {
    prepare() {
      return { title, media: icon }
    },
  },
})
