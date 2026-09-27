import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Frontend Developer — Sandra Paläng',
}

const RootLayout = ({ children }: LayoutProps<'/'>) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
