import PageHeader from '../page-header'

type HomePageTemplateProps = {
  homePage: {
    preamble?: string
  }
}

const HomePageTemplate = ({ homePage }: HomePageTemplateProps) => {
  return (
    <main>
      <PageHeader title={homePage.preamble ?? ''} />
    </main>
  )
}

export default HomePageTemplate
