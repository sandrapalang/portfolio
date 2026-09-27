import { Home } from 'lucide-react'
import { defineField, defineType } from 'sanity'

export const icon = Home
export const title = 'Home'
export const type = 'homePage'

export default defineType({
  name: type,
  title,
  icon,
  type: 'document',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'preamble',
      title: 'Preamble',
      type: 'text',
      group: 'content',
    }),
    defineField({
      name: 'seoSettings',
      title: 'SEO settings',
      type: 'seoSettings',
      group: 'seo',
    }),
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
  ],
  preview: {
    select: { title: 'title', lang: 'language' },
    prepare({ title, lang }) {
      return { title, subtitle: lang ? lang.toUpperCase() : '' }
    },
  },
})
