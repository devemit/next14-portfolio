import { Metadata } from 'next'
import Button from '@/components/button'

export const metadata: Metadata = {
  title: 'What I do',
  description: 'Software developer focused on scalable web applications, maintainable architecture, and AI-driven solutions.',
}
export default function About() {
  return (
    <section className="py-2">
      <h1 className="text-xl italic text-[#e87d7d]">what i do</h1>
      <br />
      <p className="text-sm text-muted-foreground xl:text-base">
        I have nearly three years of professional experience building scalable, user-centered applications with React, TypeScript, and Redux.
        At Technoperia, I worked on Aduvi, an enterprise platform used by 2000+ clients across multiple industries. My core focus included
        building reusable components, implementing efficient state management, and ensuring consistent cross-device performance.
      </p>
      <br />
      <p className="text-sm text-muted-foreground xl:text-base">
        Alongside my core front-end stack, I have solid experience with Blazor .NET, where I developed interactive web components and
        handled complex state logic for enterprise healthcare and business applications. This cross-stack experience helps me deliver robust,
        scalable, and maintainable solutions across different product environments.
      </p>
      <br />
      <p className="text-sm text-muted-foreground xl:text-base">
        I am proficient with modern UI tooling such as Tailwind CSS and Ant Design, and I regularly use Next.js for server-side rendering
        and performance-focused delivery. I also have practical backend experience with Node.js and Express.
        <br />
        <br />
        Currently expanding toward AI engineering, intelligent applications, and data-driven systems.
      </p>
      <br />
      <div className="flex gap-2">
        <Button to={'https://github.com/devemit'}>GitHub</Button>
        <Button to={'https://www.linkedin.com/in/mitko-iliev/'}>LinkedIn</Button>
      </div>
    </section>
  )
}
