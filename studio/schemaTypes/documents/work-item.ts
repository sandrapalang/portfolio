import { FileText } from 'lucide-react'
import { defineField, defineType } from 'sanity'

import UrlPath from '@/components/url-path'
import { generateSlug, isUniqueForLanguage, validateSlug } from '@/lib/utils'

export const icon = FileText
export const title = 'Work Item'
export const titlePlural = 'Work Items'
export const type = 'workItem'

export default defineType({
  name: type,
  title,
  icon,
  type: 'document',
  groups: [
    { name: 'content', title: 'Page content', default: true },
    { name: 'workCard', title: 'Work card content' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: (input) => generateSlug(input),
        isUnique: isUniqueForLanguage,
      },
      validation: (rule) =>
        rule.required().custom((slug) => {
          if (slug && !validateSlug(slug.current || '')) {
            return 'Slug can only contain lowercase letters, dashes and numbers.'
          }
          return true
        }),
      group: 'content',
    }),
    defineField(
      {
        name: 'urlPath',
        title: 'Page url',
        type: 'string',
        readOnly: true,
        components: { input: UrlPath },
        group: 'content',
      },
      { strict: false },
    ),
    defineField({
      name: 'projectType',
      title: 'Project type',
      type: 'reference',
      to: [{ type: 'projectType' }],
      validation: (rule) => rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (rule) => rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'contribution',
      title: 'Contribution',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'contribution' }] }],
      group: 'content',
    }),
    defineField({
      name: 'techStack',
      title: 'Tech stack',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'skill' }] }],
      group: 'content',
    }),
    defineField({
      name: 'workCard',
      title: 'Work card fields',
      type: 'object',
      group: 'workCard',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'alt', type: 'string', title: 'Alternative text' }],
        }),
      ],
    }),
    defineField({
      name: 'seoSettings',
      title: 'SEO settings',
      type: 'seoSettings',
      group: 'seo',
    }),
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      initialValue: 'en',
      validation: (rule) => rule.required(),
      readOnly: true,
      hidden: true,
    }),
  ],
  preview: {
    select: { title: 'title', media: 'workCard.image', lang: 'language' },
    prepare({ title, media, lang }) {
      return { title, subtitle: lang ? lang.toUpperCase() : '', media }
    },
  },
})
