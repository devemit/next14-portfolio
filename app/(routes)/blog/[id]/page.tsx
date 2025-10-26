'use client'
import { useParams } from 'next/navigation'
import blogs from '@/utils/blogs'

export interface Blog {
  slug: string
  name: string
  description: string
  skills: string
}

export default function Page() {
  const params = useParams()
  const blog: Blog | undefined = blogs.find((blog) => blog.slug === params.id)

  return (
    <div className="mx-auto max-w-md text-[#D4D4D4]">
      <h1 className="mb-4 text-2xl font-bold">{blog?.name}</h1>
      <div className="mb-4 leading-relaxed">{blog?.description}</div>
      <br />
      <p className="my-1 text-base font-semibold">Tools used:</p>
      <div className="leading-relaxed">{blog?.skills}</div>
    </div>
  )
}
