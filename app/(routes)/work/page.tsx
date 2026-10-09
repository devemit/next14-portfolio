import { Metadata } from 'next'
import Link from 'next/link'
import ProjectCard from '@/components/project-card'
import GithubActivity from '@/components/github-activity'
import { experiences, projects } from '@/utils/projects'
import { createPageMetadata } from '@/lib/site'

export const metadata: Metadata = createPageMetadata(
  'Work',
  'Selected software projects and professional experience by Mitko Iliev, including React, Next.js, .NET, AI, Rust, and native developer tooling.',
  '/work',
)

const formatTime = (time: string) => (time.startsWith("'") ? time : time.replace(/^(\d{2})/, "'$1"))

const page = () => {
  return (
    <div className="space-y-12 text-foreground">
      <section className="space-y-6">
        <h2 className="text-xl italic text-[#e87d7d]">work / github activity</h2>
        <div className="space-y-8">
          {experiences.map((experience) => (
            <article key={experience.workplace} className="space-y-2">
              <Link
                href={experience.href}
                className="inline-flex items-center text-base font-semibold text-foreground hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{experience.workplace}</span>
              </Link>
              <div className="text-muted-foreground">
                <div className="text-sm lowercase">{experience.position}</div>
                <div className="text-sm lowercase text-muted-foreground/80">{formatTime(experience.time)}</div>
              </div>
              <p className="text-sm lowercase leading-relaxed text-muted-foreground">{experience.description}</p>
            </article>
          ))}
        </div>
      </section>

      <h2 className="text-sm text-muted-foreground">projects</h2>
      <section className="grid gap-x-6 gap-y-1 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            imgUrl={project.imgUrl}
            gallery={project.gallery}
            videoUrl={project.videoUrl}
            cropVideoTop={project.cropVideoTop}
            preserveImageAspect={project.preserveImageAspect}
            seeCode={project.seeCode}
            liveSite={project.liveSite}
            tech={project.tech}
            status={project.status}
          />
        ))}
      </section>
      <GithubActivity />
    </div>
  )
}
export default page
