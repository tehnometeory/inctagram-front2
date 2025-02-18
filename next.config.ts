import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    domains: ['storage.yandexcloud.net'],
  },
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
}

export default nextConfig
