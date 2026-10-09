'use client'

import { ProjectProps } from '@/types/types'
import Button from './button'
import Image from 'next/image'
import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
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
  gallery,
  videoUrl,
  cropVideoTop,
  preserveImageAspect,
  status,
}: ProjectProps) {
  const [isMediaOpen, setIsMediaOpen] = useState(false)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const images = gallery?.length
    ? gallery
    : [
        {
          src: imgUrl,
          alt: `${title} project preview`,
          label: title,
        },
      ]
  const activeImage = images[activeImageIndex]
  const hasGallery = !videoUrl && images.length > 1
  const imageCount = images.length

  const showPreviousImage = () => {
    setActiveImageIndex((current) => (current - 1 + imageCount) % imageCount)
  }

  const showNextImage = () => {
    setActiveImageIndex((current) => (current + 1) % imageCount)
  }

  useEffect(() => {
    if (!isMediaOpen) return

    const previousOverflow = document.body.style.overflow
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMediaOpen(false)
      if (event.key === 'ArrowLeft' && hasGallery) {
        setActiveImageIndex((current) => (current - 1 + imageCount) % imageCount)
      }
      if (event.key === 'ArrowRight' && hasGallery) {
        setActiveImageIndex((current) => (current + 1) % imageCount)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [hasGallery, imageCount, isMediaOpen])

  return (
    <div className="overflow-hidden rounded-lg py-2">
      <div className="flex items-center justify-between pt-3">
        <h2 className="text-base font-semibold text-foreground">{title}</h2>
        {status && <span className="rounded-md bg-red-900/30 px-2 py-1 text-xs text-red-200">{status}</span>}
      </div>
      <div className="relative my-3 aspect-video w-full overflow-hidden rounded-lg border border-border bg-card hover:border-muted-foreground/50">
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
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            className={preserveImageAspect ? 'object-cover object-top' : 'object-fill'}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        <button
          type="button"
          onClick={() => setIsMediaOpen(true)}
          aria-label={`Open a larger ${videoUrl ? 'video' : activeImage.label} preview of ${title}`}
          className="absolute inset-0 z-10 cursor-zoom-in"
        >
          <span className="sr-only">Open preview</span>
        </button>
        {hasGallery && (
          <div className="absolute bottom-2 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1 rounded-full bg-black/75 p-1 text-white shadow-lg backdrop-blur-sm">
            <button
              type="button"
              onClick={showPreviousImage}
              aria-label={`Show previous ${title} screenshot`}
              className="flex h-7 w-7 items-center justify-center rounded-full hover:bg-white/15"
            >
              <FiChevronLeft aria-hidden="true" />
            </button>
            <span className="min-w-20 px-1 text-center text-xs font-medium">
              {activeImage.label} {activeImageIndex + 1}/{images.length}
            </span>
            <button
              type="button"
              onClick={showNextImage}
              aria-label={`Show next ${title} screenshot`}
              className="flex h-7 w-7 items-center justify-center rounded-full hover:bg-white/15"
            >
              <FiChevronRight aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
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
                className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-xl text-white hover:bg-black"
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
                <Image src={activeImage.src} alt={activeImage.alt} fill className="object-contain" sizes="100vw" priority />
              )}
              {hasGallery && (
                <>
                  <button
                    type="button"
                    onClick={showPreviousImage}
                    aria-label={`Show previous ${title} screenshot`}
                    className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-2xl text-white hover:bg-black"
                  >
                    <FiChevronLeft aria-hidden="true" />
                  </button>
                  <div className="absolute bottom-3 left-1/2 z-20 -translate-x-1/2 rounded-full bg-black/75 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
                    {activeImage.label} {activeImageIndex + 1}/{images.length}
                  </div>
                  <button
                    type="button"
                    onClick={showNextImage}
                    aria-label={`Show next ${title} screenshot`}
                    className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-2xl text-white hover:bg-black"
                  >
                    <FiChevronRight aria-hidden="true" />
                  </button>
                </>
              )}
            </div>
          </div>,
          document.body,
        )}
    </div>
  )
}
