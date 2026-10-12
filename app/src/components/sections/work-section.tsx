import HorizontalScroll from '@/components/layout/horizontal-scroll'
import SectionWrapper from '@/components/layout/section-wrapper'
import WorkCard, { type WorkCardImage } from '@/components/work-card'

type WorkSectionData = {
  workItems?: {
    category?: string
    projectType?: string
    slug?: { current: string }
    techStack?: string[]
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
  if (!data.title) return null

  const items = data.workItems ?? []

  return (
    <SectionWrapper title={data.title}>
      <HorizontalScroll>
        {items.map((item) => (
          <WorkCard
            category={item.category ?? ''}
            heading={item.workCard?.heading ?? ''}
            image={{
              src: item.workCard?.image?.src ?? '',
              alt: item.workCard?.image?.alt ?? '',
            }}
            key={item.slug?.current}
            projectType={item.projectType ?? ''}
            slug={item.slug?.current ?? ''}
          />
        ))}
      </HorizontalScroll>
    </SectionWrapper>
  )
}

export default WorkSection
export type { WorkSectionData }
