type HomePageTemplateProps = {
  homePage: {
    title?: string
    preamble?: string
  }
}

const HomePageTemplate = ({ homePage }: HomePageTemplateProps) => {
  return (
    <main>
      <h1>{homePage?.title}</h1>
      <p>{homePage?.preamble}</p>
    </main>
  )
}

export default HomePageTemplate
