import { ProjectProps } from '@/types/types'
import Button from './button'
import Image from 'next/image'
import { FiArrowUpRight } from 'react-icons/fi'
import TruncatedText from './truncated-text'

export default function ProjectCard({ title, description, tech, seeCode, liveSite, imgUrl, status }: ProjectProps) {
  return (
    <div className="overflow-hidden rounded-lg py-2">
      <div className="flex items-center justify-between pt-3">
        <h2 className="text-base font-semibold text-foreground">{title}</h2>
        {status && <span className="rounded-md bg-red-900/30 px-2 py-1 text-xs text-red-200">{status}</span>}
      </div>
      <div className="group relative my-3 h-[250px] w-full overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-muted-foreground/50">
        <Image
          src={imgUrl}
          alt={`${title} project thumbnail`}
          fill
          className="object-cover object-top transition-all duration-500 group-hover:object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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
    </div>
  )
}
