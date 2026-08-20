import { ImageResponse } from 'next/og'
import { notFound } from 'next/navigation'
import blogs from '@/utils/blogs'

export const runtime = 'edge'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

interface BlogImageProps {
  params: { id: string }
}

export default function OpenGraphImage({ params }: BlogImageProps) {
  const blog = blogs.find((post) => post.slug === params.id)

  if (!blog) {
    notFound()
  }

  return new ImageResponse(
    (
      <div
        style={{
          background: '#171719',
          color: '#d8d8dc',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-between',
          padding: '72px',
          width: '100%',
        }}
      >
        <div style={{ color: '#e87d7d', fontSize: 28, letterSpacing: 2, textTransform: 'uppercase' }}>{blog.category}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ fontSize: 62, fontWeight: 700, lineHeight: 1.15 }}>{blog.name}</div>
          <div style={{ color: '#facc15', fontSize: 28 }}>mitkodev.com</div>
        </div>
        <div style={{ color: '#a4a4ac', fontSize: 24 }}>{blog.date}</div>
      </div>
    ),
    size,
  )
}
