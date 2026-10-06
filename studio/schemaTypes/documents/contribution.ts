import { Users } from 'lucide-react'
import { defineField, defineType } from 'sanity'

export const icon = Users
export const title = 'Contribution'
export const type = 'contribution'

export default defineType({
  name: type,
  title,
  icon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        defineField({ name: 'en', title: 'English', type: 'string' }),
        defineField({ name: 'sv', title: 'Swedish', type: 'string' }),
      ],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { titleEn: 'title.en', titleSv: 'title.sv' },
    prepare({ titleEn, titleSv }) {
      return { title: titleSv ? `${titleEn} / ${titleSv}` : titleEn }
    },
  },
})
