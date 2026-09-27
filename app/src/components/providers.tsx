import type { AbstractIntlMessages } from 'next-intl'
import { NextIntlClientProvider } from 'next-intl'
import type { ReactNode } from 'react'

type ProvidersProps = {
  locale: string
  messages: AbstractIntlMessages
  children: ReactNode
}

const Providers = ({ locale, messages, children }: ProvidersProps) => {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
}

export default Providers
