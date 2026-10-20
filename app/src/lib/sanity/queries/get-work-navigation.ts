import { defineQuery } from 'next-sanity'

import { client } from '../client'

export type WorkNavigationItem = {
  publishDate?: string | null
  slug?: string | null
  urlPath?: string | null
}

const workNavigationQuery =
  defineQuery(`*[_type == "homePage" && language == $locale][0].workSection.workItems[]->{
  "slug": slug.current,
  urlPath,
  "publishDate": workCard.publishDate
}`)

export const getWorkNavigation = (
  locale: string,
): Promise<WorkNavigationItem[]> =>
  client.fetch(workNavigationQuery, { locale }).then((result) => result ?? [])
