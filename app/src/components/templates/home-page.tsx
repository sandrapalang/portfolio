import WorkSection, {
  type WorkSectionData,
} from '@/components/sections/work-section'

import PageHeader from '../page-header'

type HomePageTemplateProps = {
  homePage: {
    preamble?: string
    workSection?: WorkSectionData
  }
}

const HomePageTemplate = ({ homePage }: HomePageTemplateProps) => {
  return (
    <main>
      <PageHeader title={homePage.preamble ?? ''} />
      {homePage?.workSection && <WorkSection data={homePage.workSection} />}
    </main>
  )
}

export default HomePageTemplate
