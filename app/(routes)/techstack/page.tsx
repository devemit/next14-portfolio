import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
   title: 'Techstack | Mitko',
   description: 'Generated by create next app',
};

export default function TechStack() {
   const stack = [
      { src: '/css&html.png', label: 'HTML & CSS' },
      { src: '/Javascript.png', label: 'Javascript' },
      { src: '/Typescript.png', label: 'Typescript' },
      { src: '/bl.png', label: '.NET Blazor' },
      { src: '/React.png', label: 'React.js' },
      { src: '/Astro.png', label: 'Astro.js' },
      { src: '/nextjs.png', label: 'Next.js' },
      { src: '/Tailwind CSS.png', label: 'TailwindCSS' },
      { src: '/jest.jpg', label: 'Jest Testing' },
      { src: '/node.png', label: 'Node.js' },
      { src: '/MySQL.png', label: 'MySQL' },
      { src: '/Docker.png', label: 'Docker' },
   ];

   return (
      <section className='flex flex-col gap-4'>
         <h1 className='text-3xl text-[#E5E5E5]'>Tech Stack</h1>
         <p className='max-w-sm md:max-w-md text-md text-[#E5E5E5]'>
            Here is my favourite Tech Stack, languages and frameworks that i use every day in most
            of my projects.
         </p>
         <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10'>
            {stack.map((ele, index) => (
               <div className='flex items-center gap-5' key={index}>
                  <Image src={ele.src} width={50} height={50} alt='' />
                  <span className='text-xl text-[#e5e5e5]'>{ele.label}</span>
               </div>
            ))}
         </div>
      </section>
   );
}
