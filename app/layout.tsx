/* eslint-disable @typescript-eslint/no-unused-vars */
import './globals.css'

import { siteConfig } from '@/config'

import { Inter } from 'next/font/google'
import Navbar from './components/Navbar/Navbar'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | AGÊNCIA UP.EXPERT',
    default: 'Agência full service',
  },
  description: 'MARKETIGN DIGITAL EM BRASILIA | (61) 9 8669-2775',
  verification: {
    google: 'google-site-verification=123123123',
  },
  manifest: '/manifest.json',
  viewport: 'width=device-width, initial-scale=1.0',
  themeColor: '#ffffff',
  authors: [{ name: 'AGÊNCIA UP.EXPERT' }],
  metadataBase: new URL(`${siteConfig.url}`),
  openGraph: {
    type: 'website',
    url: `${siteConfig.url}/cover.jpg`,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: 'UP.EXPERT',
    images: [
      {
        url: `${siteConfig.url}/cover.jpg`,
      },
    ],
  },
  robots: 'index, follow',
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/cover.jpg`],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='pt'>
      <body className={inter.className}>
        {/* <Navbar/> */}
        {children}
      </body>
    </html>
  )
}
