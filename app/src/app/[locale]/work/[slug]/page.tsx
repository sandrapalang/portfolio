import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import WorkItemTemplate from '@/components/templates/work-item'
import { getWorkItem } from '@/lib/sanity/queries/get-work-item'

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
  const workItem = await getWorkItem(locale, slug)

  if (!workItem) {
    notFound()
  }

  return (
    <div>
      <WorkItemTemplate workItem={workItem} />
    </div>
  )
}

export default WorkItemPage
