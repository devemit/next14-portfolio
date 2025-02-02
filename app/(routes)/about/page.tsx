import { Metadata } from 'next';
import Button from '@/components/button';

export const metadata: Metadata = {
   title: 'About',
   description: 'Generated by create next app',
};
export default function About() {
   return (
      <section className='py-2'>
         <h1 className='text-[#D4D4D4] text-2xl'>Bio</h1>
         <p className='my-4 text-[#D4D4D4]'>
            Hello! I&apos;m Mitko, a passionate and detail-oriented frontend developer with a knack
            for crafting engaging and responsive user interfaces. My journey in the world of web
            development has equipped me with a diverse skill set that allows me to bring ideas to
            life with precision and creativity.
         </p>
         <p className=' text-[#D4D4D4]'>
            In my toolbox, you&apos;ll find a versatile array of technologies, including JavaScript,
            TypeScript, HTML, CSS, React.js, Tailwind CSS, and Next.js. With these tools at my
            disposal, I craft responsive designs that adapt effortlessly to any device, while
            leveraging the latest trends and best practices to ensure optimal performance.
         </p>
         <br />
         <p className=' text-[#D4D4D4]'>
            Additionally, I have experience working with server-side technologies such as Next.js,
            where I harness its power to create server-rendered React applications. This allows me
            to build robust and performant web applications that combine the flexibility of React
            with the scalability of server-side rendering.
         </p>
         <br />
         <p className=' text-[#D4D4D4]'>
            While my expertise primarily lies in front-end development, I also dabble in the realms
            of C# and .NET, particularly harnessing the power of Blazor to build interactive web
            applications with precision and efficiency.
         </p>
         <br />
         <p className=' text-[#D4D4D4]'>
            Driven by a commitment to excellence and a thirst for innovation, I approach every
            project with a blend of creativity and technical expertise. From concept to execution, I
            strive to exceed expectations and deliver solutions that leave a lasting impression.
         </p>
         <br />
         <p className=' text-[#D4D4D4]'>
            Take a stroll through my portfolio to explore my past creations and discover how we can
            collaborate to bring your vision to life. Let&apos;s embark on this journey together and
            create something extraordinary!
         </p>
         <br />
         <div className='flex gap-2'>
            <Button to={'https://github.com/devemit'}>Github</Button>
            <Button to={'https://www.linkedin.com/in/mitko-iliev/'}>Linkedin</Button>
         </div>
      </section>
   );
}
