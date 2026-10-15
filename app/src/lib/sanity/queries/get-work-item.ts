import { client } from '../client'

export const getWorkItem = (locale: string, slug: string) =>
  client.fetch(
    `*[_type == "workItem" && language == $locale && slug.current == $slug][0]{
      title,
      seoSettings,
      "translations": *[_type == "translation.metadata" && references(^._id)][0].translations[].value->{
        language,
        "slug": slug.current
      }
    }`,
    { locale, slug },
  )
