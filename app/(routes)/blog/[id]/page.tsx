import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { site } from '@/lib/site'
import blogs from '@/utils/blogs'

interface BlogPostPageProps {
  params: { id: string }
}

function getBlog(id: string) {
  return blogs.find((blog) => blog.slug === id)
}

export function generateStaticParams() {
  return blogs.map((blog) => ({ id: blog.slug }))
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const blog = getBlog(params.id)

  if (!blog) {
    return {}
  }

  const description = blog.description.split('\n\n')[0]
  const path = `/blog/${blog.slug}`
  const imagePath = `${path}/opengraph-image`

  return {
    title: blog.name,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: 'article',
      url: path,
      title: blog.name,
      description,
      siteName: site.name,
      publishedTime: blog.publishedAt,
      section: blog.category,
      authors: [site.name],
      images: [{ url: imagePath, width: 1200, height: 630, alt: `${blog.name} by ${site.name}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.name,
      description,
      images: [imagePath],
    },
  }
}

export default function Page({ params }: BlogPostPageProps) {
  const blog = getBlog(params.id)

  if (!blog) {
    notFound()
  }

  const paragraphs = blog.description.split('\n\n')
  const description = paragraphs[0]
  const articleUrl = `${site.url}/blog/${blog.slug}`
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.name,
    description,
    datePublished: blog.publishedAt,
    dateModified: blog.publishedAt,
    mainEntityOfPage: articleUrl,
    url: articleUrl,
    articleSection: blog.category,
    author: {
      '@type': 'Person',
      name: site.name,
      url: site.url,
    },
    publisher: {
      '@type': 'Person',
      name: site.name,
      url: site.url,
    },
    image: `${articleUrl}/opengraph-image`,
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
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
