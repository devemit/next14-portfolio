'use client'

import Image from 'next/image'
import { Play, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const videoId = 'KfjkRdKFZyg'

export default function SylvopsDemo() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [thumbnail, setThumbnail] = useState('maxresdefault')
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (!isPlaying) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isPlaying])

  function openPlayer() {
    dialogRef.current?.showModal()
    setIsPlaying(true)
  }

  return (
    <div className="mt-3">
      <div className="relative aspect-video overflow-hidden rounded-lg border border-border bg-black">
          <button
            type="button"
            onClick={openPlayer}
            aria-label="Play SylvOps demo"
            aria-haspopup="dialog"
            className="group absolute inset-0 flex h-full w-full items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-white"
          >
            <Image
              src={`https://i.ytimg.com/vi/${videoId}/${thumbnail}.jpg`}
              onError={() => setThumbnail('mqdefault')}
              onLoad={(event) => {
                if (event.currentTarget.naturalWidth < 200 && thumbnail !== 'mqdefault') {
                  setThumbnail('mqdefault')
                }
              }}
              alt=""
              fill
              sizes="100vw"
              unoptimized
              className="scale-150 object-cover"
            />
            <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/35" />
            <span className="relative flex items-center gap-2 rounded-full bg-black/80 px-5 py-3 text-sm font-medium text-white transition-colors group-hover:bg-black">
              <Play aria-hidden="true" className="h-5 w-5 fill-current" />
              Play demo
            </span>
          </button>
      </div>
      <dialog
        ref={dialogRef}
        aria-labelledby="demo-dialog-heading"
        onClose={() => setIsPlaying(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close()
        }}
        className="m-auto w-[calc(100%-2rem)] max-w-6xl overflow-auto rounded-lg border border-border bg-background p-0 text-foreground shadow-xl backdrop:bg-black/80"
      >
        <div className="flex items-center justify-between gap-4 px-4 py-3">
          <h2 id="demo-dialog-heading" className="text-base font-medium">SylvOps demo</h2>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Close SylvOps demo"
            className="rounded p-2 hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-foreground"
          >
            <X aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>
        <div className="relative aspect-video bg-black">
          {isPlaying && (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
              title="SylvOps demo"
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          )}
        </div>
      </dialog>
      <a
        href={`https://www.youtube.com/watch?v=${videoId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-block text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
      >
        Watch on YouTube
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </div>
  )
}
