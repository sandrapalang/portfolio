import { defineQuery } from 'next-sanity'

import { client } from '../client'

const stringTranslationQuery = defineQuery(
  `*[_type == "stringTranslation" && language == $locale][0]{ work }`,
)

export const getStringTranslation = async (locale: string) => {
  const data = await client.fetch(stringTranslationQuery, { locale })

  return data ?? { work: {} }
}
