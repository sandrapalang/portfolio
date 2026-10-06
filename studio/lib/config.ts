import { contentTypes } from 'shared'

type ContentType = {
  hasMultitonSlug?: boolean
  hasSingletonSlug?: boolean
  isMultitonTranslatable?: boolean
  multitonName?: string
  onlyInApp?: boolean
  singletonName?: string
  slugs?: { locale: string; slug: string }[]
}

export const contentTypeSlugs: {
  [key: string]: { locale: string; slug: string }[]
}[] = []
export const linkableSchemaTypes: string[] = []
export const multitonContentTypes: string[] = []
export const singletonContentTypes: string[] = []
export const translatableSchemaTypes: string[] = []

;(contentTypes as ContentType[])
  .filter((entry) => !entry.onlyInApp)
  .forEach((entry) => {
    if (entry.multitonName) {
      multitonContentTypes.push(entry.multitonName)
      if (entry.hasMultitonSlug) {
        linkableSchemaTypes.push(entry.multitonName)
        if (entry.isMultitonTranslatable !== false) {
          translatableSchemaTypes.push(entry.multitonName)
        }
        if (entry.slugs) {
          contentTypeSlugs.push({ [entry.multitonName]: entry.slugs })
        }
      }
    }

    if (entry.singletonName) {
      singletonContentTypes.push(entry.singletonName)
      if (entry.hasSingletonSlug) {
        linkableSchemaTypes.push(entry.singletonName)
        translatableSchemaTypes.push(entry.singletonName)
        if (entry.slugs) {
          contentTypeSlugs.push({ [entry.singletonName]: entry.slugs })
        }
      }
    }
  })
