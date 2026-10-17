import { Languages } from 'lucide-react'
import { defineField, defineType, FieldDefinition } from 'sanity'

type TranslationGroup = {
  groupName: string
  groupTitle: string
  strings: { name: string; title: string }[]
}

const translationGroups: TranslationGroup[] = [
  {
    groupName: 'work',
    groupTitle: 'Work',
    strings: [
      { name: 'comingSoon', title: 'Work card — Coming soon label' },
      { name: 'nextWork', title: 'Work item page — Next work link label' },
      {
        name: 'previousWork',
        title: 'Work item page — Previous work link label',
      },
    ],
  },
]

const fields: FieldDefinition[] = translationGroups.map(
  ({ groupName, groupTitle, strings }) =>
    defineField({
      name: groupName,
      title: groupTitle,
      type: 'object',
      fields: strings.map((string) =>
        defineField({ ...string, type: 'string' }),
      ),
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
)

export const icon = Languages
export const title = 'String translations'
export const titlePlural = 'String Translations'
export const type = 'stringTranslation'

export default defineType({
  name: type,
  title,
  icon,
  type: 'document',
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    ...fields,
  ],
  preview: {
    select: { lang: 'language' },
    prepare({ lang }) {
      return { title: lang ? `${title} — ${lang.toUpperCase()}` : title }
    },
  },
})
