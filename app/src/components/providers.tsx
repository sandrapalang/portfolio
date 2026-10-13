'use client'

import type { AbstractIntlMessages } from 'next-intl'
import { NextIntlClientProvider } from 'next-intl'
import type { ReactNode } from 'react'

import { LenisScrollProvider } from '@/lib/contexts/lenis'

type ProvidersProps = {
  locale: string
  messages: AbstractIntlMessages
  children: ReactNode
}

const Providers = ({ locale, messages, children }: ProvidersProps) => {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <LenisScrollProvider>{children}</LenisScrollProvider>
    </NextIntlClientProvider>
  )
}

export default Providers
