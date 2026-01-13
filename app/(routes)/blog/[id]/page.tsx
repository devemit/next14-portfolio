'use client'
import { useParams } from 'next/navigation'
import blogs from '@/utils/blogs'

export interface Blog {
  slug: string
  name: string
  description: string
}

export default function Page() {
  const params = useParams()
  const blog: Blog | undefined = blogs.find((blog) => blog.slug === params.id)

  return (
    <div className="mx-auto max-w-md text-[#D6D6DC]">
      <h1 className="mb-4 text-xl font-bold">{blog?.name}</h1>
      <div className="mb-4 whitespace-pre-line text-sm xl:text-base">{blog?.description}</div>
    </div>
  )
}
