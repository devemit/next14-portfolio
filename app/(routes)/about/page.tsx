import { Metadata } from 'next';
import Button from '@/components/button';

export const metadata: Metadata = {
  title: 'About | Mitko',
  description: 'Generated by create next app',
};
export default function About() {
  return (
    <section>
      <h1 className='text-white text-4xl'>About Me.</h1>
      <p className='my-4 text-[#E5E5E5]'>
        Greetings! I am Mitko, a dedicated developer passionate about transforming concepts into
        tangible and user-friendly digital experiences. My journey in software development has been
        fueled by a commitment to crafting clean, efficient, and scalable code.
        <br />
        <br /> Proficient in
        <span className='text-indigo-600 font-semibold '> Javascript</span> and{' '}
        <span className='text-indigo-600 font-semibold '> Typescript</span>, I specialize in
        building dynamic applications that resonate across web and mobile platforms. With{' '}
        <span className='text-indigo-600 font-semibold '> React</span> and{' '}
        <span className='text-indigo-600 font-semibold '> React Native </span>, I focus on creating
        visually appealing interfaces that seamlessly merge aesthetics with intuitive user
        experiences. My styling expertise encompasses{' '}
        <span className='text-indigo-600 font-semibold '> CSS </span> and{' '}
        <span className='text-indigo-600 font-semibold '> Tailwind CSS </span>, ensuring
        applications boast not just functionality, but also a responsive and visually engaging
        design. In the realm of server components, I harness the power of{' '}
        <span className='text-indigo-600 font-semibold '> Nextjs </span>
        to optimize performance, delivering fast and efficient user experiences. This commitment to
        both form and function underscores my approach to development.
        <br />
        <br /> Beyond coding, I actively stay abreast of industry trends, collaborate with cross
        functional teams, and relish the challenge of continuous skill refinement. Exploring new
        technologies, contributing to open source projects, and infusing creativity into my
        endeavors are integral parts of my journey. Lets connect and explore the exciting
        possibilities of bringing your ideas to life!
      </p>
      <div className='flex gap-2'>
        <Button to={'https://github.com/devemit'}>Github</Button>
        <Button to={'https://www.linkedin.com/in/mitko-iliev/'}>Linkedin</Button>
      </div>
    </section>
  );
}
