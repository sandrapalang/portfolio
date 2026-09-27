import { defineRouting } from 'next-intl/routing'
import { locales as localeSettings } from 'shared'

export const routing = defineRouting({
  locales: localeSettings.locales.map((locale) => locale.code),
  defaultLocale: localeSettings.defaultLocale,
  localePrefix: 'always',
})
