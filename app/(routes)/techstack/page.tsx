import Image from 'next/image'
import { Metadata } from 'next'

import { stack } from '@/utils/stack'

export const metadata: Metadata = {
  title: 'Techstack',
  description: 'Technologies, frameworks, and tools I use to build modern web applications.',
}

export default function TechStack() {
  return (
    <section className="flex flex-col gap-4 py-2">
      <h1 className="text-xl italic text-[#e87d7d]">tech stack</h1>
      <p className="max-w-sm text-sm text-muted-foreground md:max-w-md xl:text-base">
        here is my favourite tech stack, languages, frameworks and tools that i use every day in most of my projects.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
        {stack?.map((ele, index) => (
          <div className="flex items-center gap-5" key={index}>
            <div className="relative h-8 w-8 overflow-hidden rounded-sm border border-border bg-card">
              {ele.src && (
                <Image src={ele.src} alt={ele.label} fill sizes="32px" className="object-contain" loading={index < 4 ? 'eager' : 'lazy'} />
              )}
            </div>
            <span className="rounded-sm border border-border bg-card p-1 text-xs tracking-wider text-card-foreground xl:text-sm">{ele.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
