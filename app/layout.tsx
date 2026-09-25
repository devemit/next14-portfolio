import { Metadata } from 'next'
import Loading from './loading'

import { Analytics } from '@vercel/analytics/next'
import Navbar from '@/components/navbar'
import { ThemeProvider } from '@/components/theme-provider'

import localFont from 'next/font/local'
import { Suspense } from 'react'
import { site } from '@/lib/site'

import './globals.css'

const iowanOldStyle = localFont({
  src: '../public/fonts/iowanoldstyle_bold.otf',
  display: 'swap',
  fallback: ['Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', 'Georgia', 'serif'],
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: '%s | Mitko Iliev',
  },
  description: site.description,
  alternates: {
    canonical: '/',
  },
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [{ url: site.socialImage, width: 1200, height: 630, alt: site.title }],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
    images: [site.socialImage],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={iowanOldStyle.className}>
      <body className="bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Suspense fallback={<Loading />}>
            <div className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-6 py-10 md:py-16">
              <Navbar />
              {children}
              <Analytics />
            </div>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
