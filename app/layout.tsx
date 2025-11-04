import { Metadata } from 'next'
import Loading from './loading'

import Navbar from '@/components/navbar'

import { Manrope, JetBrains_Mono } from 'next/font/google'
import { Suspense } from 'react'

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
})

export const metadata: Metadata = {
  title: 'Mitko | Developer, Designer, Creator',
  description: 'Portfolio Application',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#111010] font-sans">
        <Suspense fallback={<Loading />}>
          <div className="mx-4 flex max-w-4xl flex-col gap-12 px-4 py-12 md:mt-20 md:flex-row lg:mx-auto lg:mt-32">
            <Navbar />
            {children}
          </div>
        </Suspense>
      </body>
    </html>
  )
}
