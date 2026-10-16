import { defineRouting } from 'next-intl/routing'
import { contentTypes, locales as localeSettings } from 'shared'

type ContentType = {
  singletonName?: string
  multitonName?: string
  appDirectory?: string
  hasSingletonSlug?: boolean
  hasMultitonSlug?: boolean
  slugs?: { locale: string; slug: string }[]
}

const pathnamesByContentType: Record<string, Record<string, string>> = {}

contentTypes.forEach((contentType: ContentType) => {
  if (!contentType.appDirectory || !Array.isArray(contentType.slugs)) {
    return
  }

  const singleDestinations: Record<string, string> = {}
  const listDestinations: Record<string, string> = {}

  contentType.slugs.forEach(({ locale, slug }) => {
    if (contentType.hasMultitonSlug && contentType.multitonName) {
      singleDestinations[locale] = `/${slug}/[slug]`
    }
    if (contentType.hasSingletonSlug && contentType.singletonName) {
      listDestinations[locale] = `/${slug}`
    }
  })

  if (contentType.hasMultitonSlug && contentType.multitonName) {
    pathnamesByContentType[`/${contentType.appDirectory}/[slug]`] =
      singleDestinations
  }
  if (contentType.hasSingletonSlug && contentType.singletonName) {
    pathnamesByContentType[`/${contentType.appDirectory}`] = listDestinations
  }
})

export const pathnames = {
  '/': '/',
  ...pathnamesByContentType,
}

export const routing = defineRouting({
  locales: localeSettings.locales.map((locale) => locale.code),
  defaultLocale: localeSettings.defaultLocale,
  localePrefix: 'as-needed',
  localeDetection: false,
  pathnames,
})

export type Pathnames = keyof typeof routing.pathnames
export type Locale = (typeof routing.locales)[number]
