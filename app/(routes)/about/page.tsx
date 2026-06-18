import { Metadata } from 'next'
import Button from '@/components/button'

export const metadata: Metadata = {
  title: 'What I do',
  description:
    'Software developer focused on scalable web applications, maintainable architecture, healthcare platforms, and AI-driven solutions.',
}
export default function About() {
  return (
    <section className="py-2">
      <h1 className="text-xl italic text-[#e87d7d]">what i do</h1>
      <br />
      <p className="text-sm text-muted-foreground xl:text-base">
        I have nearly three years of professional experience building scalable, user-focused web applications with React, TypeScript, Redux,
        and modern UI frameworks. At Technoperia, I worked on Aduvi, an enterprise white-label CRM platform used by 2000+ clients across
        multiple industries. My work focused on reusable front-end components, efficient state management, responsive interfaces, and
        consistent performance across devices.
      </p>
      <br />
      <p className="text-sm text-muted-foreground xl:text-base">
        In my current role, I work with Blazor, .NET, C#, and JavaScript on View ECG, an AI-powered healthcare platform that connects doctors
        and patients through cloud-based ECG monitoring. I contribute to interactive clinical interfaces, complex state flows, real-time
        device data handling, and tools that support ECG analysis, beat classification, and clinician workflows.
      </p>
      <br />
      <p className="text-sm text-muted-foreground xl:text-base">
        Alongside my front-end experience, I use Next.js, Tailwind CSS, Ant Design, Node.js, and Express to build maintainable,
        performance-focused applications. I am also expanding deeper into AI engineering, intelligent applications, and data-driven systems,
        with a focus on practical products that solve real workflow problems.
      </p>
      <br />
      <div className="flex gap-2">
        <Button to={'https://github.com/devemit'}>GitHub</Button>
        <Button to={'https://www.linkedin.com/in/mitko-iliev/'}>LinkedIn</Button>
      </div>
    </section>
  )
}
