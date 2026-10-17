import { client } from '../client'

export type WorkNavigationItem = {
  publishDate?: string | null
  slug?: string | null
  urlPath?: string | null
}

export const getWorkNavigation = (
  locale: string,
): Promise<WorkNavigationItem[]> =>
  client.fetch(
    `*[_type == "homePage" && language == $locale][0].workSection.workItems[]->{
      "slug": slug.current,
      urlPath,
      "publishDate": workCard.publishDate
    }`,
    { locale },
  )
