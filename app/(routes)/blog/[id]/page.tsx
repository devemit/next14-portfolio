'use client'

import { useParams } from 'next/navigation'
import blogs from '@/utils/blogs'

export interface Blog {
  slug: string
  name: string
  description: string
  date: string
  tools: string
  category: string
  status: string
}

export default function Page() {
  const params = useParams()
  const { id } = params as { id: string }

  const blog: Blog | undefined = blogs.find((blog) => blog.slug === id)

  if (!blog) {
    return <div className="mx-auto max-w-3xl px-4 py-16 text-center text-sm text-muted-foreground">Blog post not found.</div>
  }

  const paragraphs = blog.description.split('\n\n')

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 text-foreground">
      <header className="mb-10">
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{blog.category}</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{blog.name}</h1>

        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span>{blog.date}</span>
          <span className="h-1 w-1 rounded-full bg-muted-foreground/70" />
          <span className="rounded-full bg-muted px-2 py-1 text-[11px] uppercase tracking-wide text-muted-foreground">{blog.status}</span>
        </div>
      </header>

      <section className="space-y-6 text-sm leading-relaxed text-muted-foreground md:text-base md:leading-relaxed">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph.trim()}</p>
        ))}
      </section>

      {blog.tools.length > 0 && (
        <p className="mt-5 text-sm text-muted-foreground">
          <span className="font-medium text-yellow-400">Tech stack:</span> {blog.tools}
        </p>
      )}
    </article>
  )
}
