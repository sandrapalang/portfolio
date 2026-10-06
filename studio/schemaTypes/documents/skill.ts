import { Code } from 'lucide-react'
import { defineField, defineType } from 'sanity'

export const icon = Code
export const title = 'Skill'
export const type = 'skill'

export default defineType({
  name: type,
  title,
  icon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: { select: { title: 'title' } },
})
