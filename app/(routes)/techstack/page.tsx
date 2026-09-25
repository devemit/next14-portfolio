import { Metadata } from 'next'
import { createPageMetadata } from '@/lib/site'

export const metadata: Metadata = createPageMetadata(
  'Technical Capabilities',
  'Applied AI, frontend, backend, data, and delivery capabilities used by software developer Mitko Iliev.',
  '/techstack',
)

const capabilities = [
  {
    title: 'AI & backend',
    skills: ['Python', 'FastAPI', 'LLM APIs', 'RAG', 'PostgreSQL + pgvector', 'ASP.NET Core'],
  },
  {
    title: 'Frontend',
    skills: ['TypeScript', 'React', 'Next.js', 'Blazor', 'Tailwind CSS'],
  },
  {
    title: 'Data & delivery',
    skills: ['PostgreSQL', 'Prisma', 'SQLAlchemy', 'Docker', 'Git'],
  },
]

export default function TechStack() {
  return (
    <section className="flex flex-col gap-5 py-2">
      <h1 className="text-xl italic text-[#e87d7d]">technical capabilities</h1>
      <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
        A focused set of technologies I use to build web products and practical AI workflows.
      </p>

      <div className="mt-6 flex max-w-2xl flex-col gap-6">
        {capabilities.map((capability) => (
          <div key={capability.title}>
            <h2 className="mb-2 text-sm font-medium text-foreground">{capability.title}</h2>
            <div className="flex flex-wrap gap-2">
              {capability.skills.map((skill) => (
                <span key={skill} className="rounded-sm border border-border bg-card px-2.5 py-1 text-sm text-card-foreground">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
