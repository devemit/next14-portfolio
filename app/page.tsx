import { Metadata } from 'next'
import Link from 'next/link'

import { createPageMetadata, site } from '@/lib/site'
import blogs from '@/utils/blogs'
import { pages } from '@/utils/routes'

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
      sameAs: [site.profiles.github, site.profiles.linkedin, site.profiles.x],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: site.name,
      url: site.url,
    },
  ]

  return (
    <main className="w-full py-2">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />

      <section aria-labelledby="bio-heading">
        <h2 id="bio-heading" className="text-base font-medium text-foreground">
          Bio
        </h2>
        <div className="mt-3 space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            I&apos;m a software developer working on enterprise web products and AI-powered healthcare software. I work across React,
            Next.js, and .NET, building interfaces and systems used in real-world workflows.
          </p>
          <p>
            On the side I&apos;m building{' '}
            <a
              href="https://devemit.github.io/sylvops-docs/"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-foreground underline decoration-[#e87d7d] underline-offset-4 transition-colors hover:text-[#e87d7d]"
            >
              SylvOps
              <span className="sr-only"> documentation</span>
            </a>
            , a local-first mission control for coding agents with Codex and Claude Code integration. The idea is simple: run agents in
            parallel, keep their work isolated, and know when they need you—without terminal juggling or worktree chaos.
          </p>
          <p>
            I&apos;m moving deeper into applied AI engineering, working with Python, FastAPI, RAG, and LLM workflows. I care about useful AI,
            clean interfaces, and software that stays simple to understand and maintain.
          </p>
        </div>
        <nav aria-label="Explore portfolio" className="mt-6">
          <ul className="space-y-2">
            {pages.map((page) => (
              <li key={page.href} className="flex items-center gap-3">
                <span aria-hidden="true" className="h-2 w-2 shrink-0 bg-foreground/70" />
                <Link href={page.href} className="text-base text-foreground hover:underline">
                  {page.homeLabel}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <hr className="mt-8 border-0 border-t border-foreground/25" />
      </section>

      <section className="mt-10" aria-labelledby="blogs-heading">
        <h2 id="blogs-heading" className="text-base font-medium text-foreground">
          Blogs
        </h2>
        <ul className="mt-3 space-y-3">
          {blogs.map((blog) => (
            <li key={blog.slug} className="flex items-baseline justify-between gap-4 border-b border-border pb-3">
              <Link href={`/blog/${blog.slug}`} className="min-w-0 flex-1 text-base text-foreground hover:underline">
                {blog.name}
              </Link>
              <time dateTime={blog.publishedAt} className="shrink-0 text-sm text-muted-foreground">
                {blog.date}
              </time>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
