import { defineField, defineType } from 'sanity'

export const type = 'seoSettings'

export default defineType({
  name: type,
  title: 'SEO settings',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Meta title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Meta description',
      type: 'text',
    }),
  ],
})
