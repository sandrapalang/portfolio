import type { Metadata } from 'next'
import { getMessages } from 'next-intl/server'
import type { ReactNode } from 'react'

import Providers from '@/components/providers'
import { routing } from '@/lib/i18n/routing'

import '@/styles/globals.scss'

export const metadata: Metadata = {
  title: 'Frontend Developer — Sandra Paläng',
}

export const generateStaticParams = () =>
  routing.locales.map((locale) => ({ locale }))

const RootLayout = async ({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ locale: string }>
}) => {
  const { locale } = await params
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body>
        <Providers locale={locale} messages={messages}>
          {children}
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
