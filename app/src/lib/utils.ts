import { routing } from '@/lib/i18n/routing'

export function isPublished(publishDate?: string | null): boolean {
  if (!publishDate) return true

  const today = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Stockholm',
  }).format(new Date())

  return today >= publishDate
}

export const localizeUrlPath = (
  urlPath: string | null | undefined,
  locale: string,
) =>
  locale === routing.defaultLocale
    ? (urlPath ?? '/')
    : `/${locale}${urlPath ?? ''}`
