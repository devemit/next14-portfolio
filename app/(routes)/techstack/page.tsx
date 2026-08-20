import { Metadata } from 'next'
import { createPageMetadata } from '@/lib/site'

export const metadata: Metadata = createPageMetadata(
  'Tech Stack',
  'Technologies and tools Mitko Iliev uses to build modern software products, including TypeScript, React, Next.js, .NET, Python, and AI workflows.',
  '/techstack',
)

const skills = [
  'AI Engineering',
  'Claude Code AI',
  'Cursor CLI',
  'Cursor AI',
  'OpenAI API',
  'Python',
  'Typescript',
  'Javascript ES6+',
  'React',
  'Next',
  'Astro',
  'Tailwind',
  'Ant Design',
  'css',
  'sass',
  'Node',
  'Express',
  'Prisma',
  'PostgreSQL',
  '.NET',
  'C#',
  'Blazor',
  'Git',
  'Docker',
  'Vercel',
  'CI/CD',
  'User Experience',
  'UI Design',
  'Responsive UI',
  'Performance Optimization',
]

export default function TechStack() {
  return (
    <section className="flex flex-col gap-5 py-2">
      <h1 className="text-xl italic text-[#e87d7d]">tech stack</h1>
      <p className="max-w-xl text-sm text-muted-foreground xl:text-base">
        A focused overview of the technologies, frameworks, and AI-assisted development tools I use to build reliable, maintainable, and
        user-centered software.
      </p>

      <div className="mt-6 flex max-w-2xl flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="rounded-sm border border-border bg-card px-2.5 py-1 text-xs text-card-foreground xl:text-sm">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
