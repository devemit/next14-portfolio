import Link from 'next/link'
import blogs from '@/utils/blogs'
import { FiArrowUpRight } from 'react-icons/fi'
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
      <main className="flex flex-col gap-2">
        {blogs.map((blog, index) => {
          const isLast = index === blogs.length - 1
          return (
            <ul key={index}>
              <Link href={`/blog/${blog.slug}`}>
                <div className="flex cursor-pointer items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="mb-1 text-xs text-muted-foreground">{blog.date}</div>
                    <div className="text-sm text-foreground xl:text-base">{blog.name}</div>
                    <br />
                    <span className="text-xs text-muted-foreground">{blog.tools}</span>
                    {!isLast && <hr className="mt-4 border-t border-border" />}
                  </div>

                  <div>
                    <span className="text-foreground">
                      <FiArrowUpRight />
                    </span>
                  </div>
                </div>
              </Link>
            </ul>
          )
        })}
      </main>
    </>
  )
}
