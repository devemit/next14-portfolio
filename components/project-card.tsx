'use client'

import { ProjectProps } from '@/types/types'
import Button from './button'
import Image from 'next/image'
import { FiArrowUpRight } from 'react-icons/fi'
import TruncatedText from './truncated-text'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export default function ProjectCard({
  title,
  description,
  tech,
  seeCode,
  liveSite,
  imgUrl,
  videoUrl,
  cropVideoTop,
  preserveImageAspect,
  status,
}: ProjectProps) {
  const [isMediaOpen, setIsMediaOpen] = useState(false)

  useEffect(() => {
    if (!isMediaOpen) return

    const previousOverflow = document.body.style.overflow
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMediaOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [isMediaOpen])

  return (
    <div className="overflow-hidden rounded-lg py-2">
      <div className="flex items-center justify-between pt-3">
        <h2 className="text-base font-semibold text-foreground">{title}</h2>
        {status && <span className="rounded-md bg-red-900/30 px-2 py-1 text-xs text-red-200">{status}</span>}
      </div>
      <button
        type="button"
        onClick={() => setIsMediaOpen(true)}
        aria-label={`Open a larger ${videoUrl ? 'video' : 'image'} preview of ${title}`}
        className="group relative my-3 block aspect-video w-full cursor-zoom-in overflow-hidden rounded-lg border border-border bg-card text-left transition-all duration-300 hover:border-muted-foreground/50"
      >
        {videoUrl ? (
          <video
            src={videoUrl}
            poster={imgUrl}
            aria-label={`${title} project preview`}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className={`w-full object-fill ${cropVideoTop ? 'h-[104%] -translate-y-[4%]' : 'h-full'}`}
          />
        ) : (
          <Image
            src={imgUrl}
            alt={`${title} project thumbnail`}
            fill
            className={
              preserveImageAspect
                ? 'object-cover object-top transition-all duration-500 group-hover:object-center'
                : 'object-fill'
            }
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </button>
      <div className="pb-4">
        <TruncatedText text={description} maxLength={320} className="my-2 text-sm text-muted-foreground" />
        <div className="my-3">
          {tech.map((el, id) => (
            <button className="mx-1 text-xs text-blue-600 dark:text-blue-400" key={id}>
              {el}
            </button>
          ))}
          <div className="mt-4 flex gap-4">
            {seeCode ? (
              <Button to={seeCode}>See Code</Button>
            ) : (
              <button
                type="button"
                disabled
                className="flex cursor-not-allowed items-center gap-2 whitespace-nowrap rounded border border-border bg-card px-2 py-1 text-xs text-card-foreground opacity-50 xl:text-sm"
              >
                See Code
                <FiArrowUpRight />
              </button>
            )}
            {liveSite ? (
              <Button to={liveSite}>Live Preview</Button>
            ) : (
              <button
                type="button"
                disabled
                className="flex cursor-not-allowed items-center gap-2 whitespace-nowrap rounded border border-border bg-card px-2 py-1 text-xs text-card-foreground opacity-50 xl:text-sm"
              >
                Live Preview
                <FiArrowUpRight />
              </button>
            )}
          </div>
        </div>
      </div>
      {isMediaOpen &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${title} enlarged preview`}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-8"
            onClick={() => setIsMediaOpen(false)}
          >
            <div
              className="relative h-[85vh] w-full max-w-6xl overflow-hidden rounded-lg bg-black shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsMediaOpen(false)}
                aria-label="Close enlarged preview"
                className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-xl text-white transition-colors hover:bg-black"
              >
                ×
              </button>
              {videoUrl ? (
                <video
                  src={videoUrl}
                  poster={imgUrl}
                  aria-label={`${title} enlarged video preview`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  className="h-full w-full object-contain"
                />
              ) : (
                <Image
                  src={imgUrl}
                  alt={`${title} enlarged project preview`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              )}
            </div>
          </div>,
          document.body,
        )}
    </div>
  )
}
