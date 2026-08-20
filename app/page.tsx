import { Metadata } from 'next'
import { greet, about } from '../utils/info'
import Link from 'next/link'

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

import { ContactForm } from '@/components/contact-form'
import GithubActivity from '@/components/github-activity'
import { createPageMetadata, site } from '@/lib/site'

export const metadata: Metadata = createPageMetadata(
  'Software Developer',
  'Portfolio of Mitko Iliev, a software developer building user-focused web applications with React, TypeScript, Next.js, .NET, and AI-powered workflows.',
  '/',
)

export default function Home() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: site.name,
      url: site.url,
      jobTitle: 'Software Developer',
      sameAs: [site.profiles.github, site.profiles.linkedin],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: site.name,
      url: site.url,
    },
  ]

  return (
    <main className="py-2">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
      <h1 className="text-lg font-bold text-foreground xl:text-xl">{greet}</h1>
      <p className="my-4 max-w-lg text-sm text-muted-foreground xl:text-base">{about()}</p>
      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-2">
          <Link href="https://github.com/devemit" target="_blank" rel="noopener noreferrer" aria-label="Visit Mitko's GitHub profile">
            <AiFillGithub size={20} className="my-2 cursor-pointer text-muted-foreground transition-colors hover:text-foreground dark:hover:text-white" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mitko-iliev/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Mitko's LinkedIn profile"
          >
            <AiFillLinkedin size={20} className="my-2 cursor-pointer text-muted-foreground transition-colors hover:text-[#0A66C2]" />
          </Link>
        </div>
        <ContactForm />
      </div>
      <GithubActivity />
    </main>
  )
}
