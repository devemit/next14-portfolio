import type { Metadata } from 'next'

export const site = {
  name: 'Mitko Iliev',
  title: 'Mitko Iliev | Software Developer focused on AI',
  description: 'Software developer focused on AI, building web applications with React, TypeScript, Next.js, and .NET, and developer tools for AI agents, including SylvOps.',
  url: 'https://www.mitkodev.com',
  socialImage: '/opengraph-image',
  profiles: {
    github: 'https://github.com/devemit',
    linkedin: 'https://www.linkedin.com/in/mitko-iliev/',
    x: 'https://x.com/mitcodes',
  },
} as const

export function createPageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: 'website',
      url: path,
      title,
      description,
      siteName: site.name,
      images: [{ url: site.socialImage, width: 1200, height: 630, alt: site.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [site.socialImage],
    },
  }
}
