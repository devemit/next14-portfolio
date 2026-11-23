import { Metadata } from 'next'
import { createPageMetadata } from '@/lib/site'

export const metadata: Metadata = createPageMetadata(
  'About',
  'Meet Mitko Iliev, a software developer with a React and .NET background, exploring AI agents, intelligent automation, and developer tools through practical projects.',
  '/about',
)
export default function About() {
  return (
    <section className="py-2">
      <h1 className="text-xl italic text-[#e87d7d]">about me</h1>
      <br />
      <p className="text-base leading-relaxed text-muted-foreground">
        I&apos;m a self-taught software developer who transitioned into tech in 2023 after changing careers. Since then, I&apos;ve focused
        on building clear, reliable products and learning through real user problems.
      </p>
      <br />
      <p className="text-base leading-relaxed text-muted-foreground">
        My professional experience spans enterprise React applications and AI-powered healthcare software. I contributed to Aduvi, a CRM
        platform used by more than 2,000 clients, and I currently work on View ECG with Blazor, .NET, C#, and JavaScript.
      </p>
      <br />
      <p className="text-base leading-relaxed text-muted-foreground">
        Working alongside experienced engineers and designers shaped how I approach software: thoughtful interfaces, clean code, strongly
        typed systems, and solutions that remain maintainable as products grow.
      </p>
      <br />
      <p className="text-base leading-relaxed text-muted-foreground">
        I&apos;m exploring AI agents, agentic AI, and intelligent automation through practical projects, including SylvOps, my main AI
        developer tooling project. Alongside it, I&apos;m learning through work with Python, FastAPI, RAG, vector search, and human-reviewed
        LLM workflows. I&apos;m especially interested in developer tools and AI features that stay grounded in real information and give
        people meaningful control.
      </p>
    </section>
  )
}
