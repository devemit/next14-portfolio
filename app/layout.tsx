import { Metadata } from 'next'
import Loading from './loading'

import { Analytics } from '@vercel/analytics/next'
import Navbar from '@/components/navbar'
import { ThemeProvider } from '@/components/theme-provider'

import { Manrope, JetBrains_Mono } from 'next/font/google'
import { Suspense } from 'react'
import { site } from '@/lib/site'

import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  style: ['normal', 'italic'],
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
    <html lang="en" suppressHydrationWarning className={`${manrope.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-background text-foreground font-mono transition-colors">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Suspense fallback={<Loading />}>
            <div className="mx-4 flex max-w-4xl flex-col gap-12 px-4 py-12 md:mt-20 md:flex-row lg:mx-auto lg:mt-32">
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
