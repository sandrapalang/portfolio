import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/lib/i18n/request.ts')

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.1.125'],
  images: {
    remotePatterns: [{ hostname: 'cdn.sanity.io', protocol: 'https' }],
  },
}

export default withNextIntl(nextConfig)
