import Link from 'next/link'
import blogs from '@/utils/blogs'
import { Metadata } from 'next'
import { createPageMetadata } from '@/lib/site'

export const metadata: Metadata = createPageMetadata(
  'Blog',
  'Writing by Mitko Iliev about software development, AI-assisted workflows, and the projects he is building.',
  '/blog',
)

export default function Blogs() {
  return (
    <>
      <h1 className="mb-2 py-2 text-xl italic text-[#e87d7d]">blog</h1>
      <main>
        <ul className="mt-4 space-y-4">
          {blogs.map((blog) => (
            <li key={blog.slug} className="border-b border-border pb-4">
              <Link href={`/blog/${blog.slug}`} className="block hover:underline">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="min-w-0 flex-1 text-base text-foreground">{blog.name}</span>
                  <time dateTime={blog.publishedAt} className="shrink-0 text-sm text-muted-foreground">
                    {blog.date}
                  </time>
                </div>
                {blog.tools && <span className="mt-2 block text-sm text-muted-foreground">{blog.tools}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}
