import { SquareMenu } from 'lucide-react'
import { defineField, defineType } from 'sanity'

export const icon = SquareMenu
export const title = 'Header'
export const type = 'header'

export default defineType({
  name: type,
  title,
  icon,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description:
        'Shown in the header on all pages and linking to the home page. The same name is used in all languages.',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: 'name' },
    prepare({ title }) {
      return {
        title,
        media: icon,
      }
    },
  },
})
