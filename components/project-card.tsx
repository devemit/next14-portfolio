import { ProjectProps } from '@/types/types'
import Button from './button'
import Image from 'next/image'
import TruncatedText from './truncated-text'

export default function ProjectCard({ title, description, tech, seeCode, liveSite, imgUrl, status }: ProjectProps) {
  return (
    <div className="overflow-hidden rounded-lg py-2">
      <div className="flex items-center justify-between pt-3">
        <h2 className="text-xl font-semibold">{title}</h2>
        {status && <span className="rounded-md bg-red-900/30 px-2 py-1 text-xs text-red-200">{status}</span>}
      </div>
      <div className="group relative my-3 h-[250px] w-full overflow-hidden rounded-lg border border-gray-700/30 bg-gray-800/30 transition-all duration-300 hover:border-gray-600/50">
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
        <TruncatedText text={description} maxLength={320} className="my-2 text-base" />
        <div className="my-3">
          {tech.map((el, id) => (
            <button className="mx-1 text-xs text-blue-400" key={id}>
              {el}
            </button>
          ))}
          <div className="mt-4 flex gap-4">
            <Button to={seeCode}>See Code</Button>
            <Button to={liveSite}>Live Preview</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
