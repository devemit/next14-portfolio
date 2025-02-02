import { ProjectProps } from '@/types/types';
import Button from './button';
import Image from 'next/image';

export default function ProjectCard({
   title,
   description,
   tech,
   seeCode,
   liveSite,
   imgUrl,
   status,
}: ProjectProps) {
   return (
      <div className='py-2'>
         <div className='flex justify-between items-center'>
            <h2 className='my-2 text-xl'>{title}</h2>
            <h2 className='my-2 text-[10px] mt-4 text-red-200'>{status}</h2>
         </div>
         <div className='relative w-full h-[200px]'>
            <Image src={imgUrl} alt='project-image' fill />
         </div>
         <p className='my-2 text-base'>{description}</p>
         <div className='my-2'>
            Stack:
            {tech.map((el, id) => (
               <button className='mx-1 text-blue-500' key={id}>
                  {el}
               </button>
            ))}
            <div className='flex my-2 gap-4'>
               <Button to={seeCode}>See Code</Button>
               <Button to={liveSite}>Live Preview</Button>
            </div>
         </div>
      </div>
   );
}
