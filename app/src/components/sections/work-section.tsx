'use client'

import { useRef } from 'react'

import HorizontalScroll from '@/components/layout/horizontal-scroll'
import SectionWrapper from '@/components/layout/section-wrapper'
import WorkCard, { type WorkCardImage } from '@/components/work-card'
import { isPublished } from '@/lib/utils'

type WorkSectionData = {
  workItems?: {
    category?: string
    projectType?: string
    slug?: { current: string }
    techStack?: string[]
    urlPath?: string
    workCard?: {
      heading?: string
      image?: WorkCardImage
      publishDate?: string
    }
  }[]
  title?: string
}

type WorkSectionProps = {
  data: WorkSectionData
}

const WorkSection = ({ data }: WorkSectionProps) => {
  const pinRef = useRef<HTMLDivElement>(null)

  if (!data.title) return null

  const items = data.workItems ?? []

  return (
    <div ref={pinRef}>
      <SectionWrapper title={data.title}>
        <HorizontalScroll pinRef={pinRef}>
          {items.map((item, index) => (
            <WorkCard
              category={item.category ?? ''}
              heading={item.workCard?.heading ?? ''}
              image={{
                src: item.workCard?.image?.src ?? '',
                alt: item.workCard?.image?.alt ?? '',
              }}
              isPublished={isPublished(item.workCard?.publishDate)}
              key={item.slug?.current}
              priority={index < 3}
              projectType={item.projectType ?? ''}
              techStack={item.techStack ?? []}
              urlPath={item.urlPath ?? null}
            />
          ))}
        </HorizontalScroll>
      </SectionWrapper>
    </div>
  )
}

export default WorkSection
export type { WorkSectionData }
