import { ImageResponse } from 'next/og'
import { site } from '@/lib/site'

export const runtime = 'edge'
export const alt = 'Mitko Iliev — Software Developer'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function OpenGraphImage() {
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
        <div style={{ color: '#e87d7d', fontSize: 32, letterSpacing: 2 }}>MITKODEV.COM</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ fontSize: 72, fontWeight: 700 }}>{site.name}</div>
          <div style={{ color: '#facc15', fontSize: 38 }}>Software Developer</div>
        </div>
        <div style={{ color: '#a4a4ac', fontSize: 26 }}>React · TypeScript · Next.js · .NET · AI</div>
      </div>
    ),
    size,
  )
}
