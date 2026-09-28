import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import HomePageTemplate from '@/components/templates/home-page'
import { getHomePage } from '@/lib/sanity/queries/get-home-page'

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> => {
  const { locale } = await params
  const homePage = await getHomePage(locale)

  return {
    title: homePage?.seoSettings?.title,
    description: homePage?.seoSettings?.description,
  }
}

const HomePage = async ({
  params,
}: {
  params: Promise<{ locale: string }>
}) => {
  const { locale } = await params
  const homePage = await getHomePage(locale)

  if (!homePage) {
    notFound()
  }

  return (
    <div>
      <HomePageTemplate homePage={homePage} />
    </div>
  )
}

export default HomePage
