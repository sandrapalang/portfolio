import { client } from '../client'

export const getStringTranslation = async (locale: string) => {
  const data = await client.fetch(
    `*[_type == "stringTranslation" && language == $locale][0]{ work }`,
    { locale },
  )

  return data ?? { work: {} }
}
