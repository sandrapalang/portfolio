import type { SanityDocument, SlugValidationContext } from 'sanity'
import slugify from 'slugify'

import { studioApiVersion } from '@/environment'

import { contentTypeSlugs, singletonContentTypes } from './config'

slugify.extend({ '&': '' })

export const generateSlug = (input: string) => slugify(input, { lower: true })

export const validateSlug = (str: string) => /^[a-z0-9-]+$/.test(str)

export const isUniqueForLanguage = async (
  slug: string,
  context: SlugValidationContext,
) => {
  const { document, getClient } = context
  const client = getClient({ apiVersion: studioApiVersion })
  const id = document?._id.replace(/^drafts\./, '')
  const language = (document as SanityDocument)?.language

  const query = `!defined(*[
    !(_id in [$draft, $published]) &&
    slug.current == $slug &&
    language == $language
  ][0]._id)`

  return client.fetch(query, {
    draft: `drafts.${id}`,
    published: id,
    slug,
    language,
  })
}

export const getContentTypeSlug = (document: SanityDocument) => {
  const entry = contentTypeSlugs.find((item) =>
    Object.prototype.hasOwnProperty.call(item, document._type),
  )
  const slugs = entry?.[document._type]
  const match = slugs?.find((s) => s.locale === document.language)
  return match !== undefined ? `/${match.slug}` : undefined
}

export const getLanguageSlug = (document: SanityDocument) =>
  `/${document.language}`

export const getParentSlug = async (document: SanityDocument) => {
  if (singletonContentTypes.includes(document._type)) {
    return undefined
  }
  return getContentTypeSlug(document)
}
