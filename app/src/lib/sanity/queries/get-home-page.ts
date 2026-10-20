import { defineQuery } from 'next-sanity'

import { client } from '../client'

const homePageQuery =
  defineQuery(`*[_type == "homePage" && language == $locale][0]{
  preamble,
  seoSettings,
  workSection{
    title,
    workItems[]->{
      _id,
      slug,
      urlPath,
      "category": category->title[$locale],
      "projectType": projectType->title[$locale],
      "techStack": techStack[]->title,
      workCard {
        heading,
        publishDate,
        image {
          alt,
          "src": asset->url
        }
      }
    },
  }
}`)

export const getHomePage = (locale: string) =>
  client.fetch(homePageQuery, { locale })
