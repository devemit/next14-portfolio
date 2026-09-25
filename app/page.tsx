import { Metadata } from 'next'
import Link from 'next/link'

import { createPageMetadata, site } from '@/lib/site'
import blogs from '@/utils/blogs'

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
            I&apos;m a self-taught software developer who transitioned into tech in 2023. With experience contributing to enterprise software
            used by more than 2,000 clients and AI-powered healthcare workflows, I build reliable web products across React, Next.js, and
            .NET.
            <br />
            On the side, I&apos;m building SylvOps: a local-first command center for coding agents. The idea is simple: run agents in
            parallel, keep their work isolated, and know when they need you—no terminal juggling, no worktree chaos.
          </p>
          <p>
            With Python, FastAPI, RAG, vector search, and human-reviewed LLM workflows, I&apos;m now focused on applied AI engineering. I
            care about AI that stays grounded in real information, clear interfaces, and maintainable systems.
          </p>
        </div>
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
