import { client } from '../client'

export const getHomePage = (locale: string) =>
  client.fetch(
    `*[_type == "homePage" && language == $locale][0]{ preamble, seoSettings }`,
    {
      locale,
    },
  )
