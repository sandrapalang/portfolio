import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import WorkItemTemplate from '@/components/templates/work-item'
import { getWorkItem } from '@/lib/sanity/queries/get-work-item'
import {
  getWorkNavigation,
  type WorkNavigationItem,
} from '@/lib/sanity/queries/get-work-navigation'
import { isPublished } from '@/lib/utils'

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> => {
  const { locale, slug } = await params
  const workItem = await getWorkItem(locale, slug)

  return {
    title: workItem?.seoSettings?.title,
    description: workItem?.seoSettings?.description,
  }
}

const WorkItemPage = async ({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) => {
  const { locale, slug } = await params
  const [workItem, workItems] = await Promise.all([
    getWorkItem(locale, slug),
    getWorkNavigation(locale),
  ])

  if (!workItem) {
    notFound()
  }

  const published = workItems.filter(
    (item): item is WorkNavigationItem & { urlPath: string } =>
      isPublished(item.publishDate) && typeof item.urlPath === 'string',
  )

  const index = published.findIndex((item) => item.slug === slug)
  const count = published.length

  const neighbor = (offset: number) =>
    index >= 0 && count >= 2
      ? published[(index + offset + count) % count]
      : undefined

  return (
    <div>
      <WorkItemTemplate
        workItem={{ ...workItem, next: neighbor(1), previous: neighbor(-1) }}
      />
    </div>
  )
}

export default WorkItemPage
