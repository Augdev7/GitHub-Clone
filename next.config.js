/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-dupe-keys */
const withPWAInit = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const withPlugins = require('next-compose-plugins')

const isDev = process.env.NODE_ENV !== 'production'

module.exports = withPWAInit({
  dest: 'public',
  // Solution: https://github.com/shadowwalker/next-pwa/issues/424#issuecomment-1399683017
  buildExcludes: ['app-build-manifest.json'],
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  staticPageGenerationTimeout: 1000,
  compiler: {
    removeConsole: !isDev,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [
      'www.google.com',
      'avatar.vercel.sh',
      'faisalman.github.io',
      'github.githubassets.com',
      'avatars.dicebear.com',
      'res.cloudinary.com',
      'pbs.twimg.com',
      'd2vwwcvoksz7ty.cloudfront.net',
      'lh3.googleusercontent.com',
      'media.cleanshot.cloud', // only for staging purposes
    ],
  },
  skipTypescriptChecking: true,
  typescript: {
    transpileOnly: true, // same as ts-node --transpile-only
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  experimental: {
    swcMinify: true,
  },
}

module.exports = nextConfig
