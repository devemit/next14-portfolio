import { ProjectProps } from '@/types/types';
import Button from './button';
import Image from 'next/image';
import TruncatedText from './truncated-text';

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
      <div className='py-2  rounded-lg overflow-hidden'>
         <div className='flex justify-between items-center px-4 pt-3'>
            <h2 className='text-xl font-semibold'>{title}</h2>
            {status && (
               <span className='text-xs px-2 py-1 rounded-full bg-red-900/30 text-red-200'>
                  {status}
               </span>
            )}
         </div>
         <div className='relative w-full h-[200px] my-3'>
            <Image
               src={imgUrl}
               alt={`${title} project thumbnail`}
               fill
               className='object-cover object-center'
               sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />
         </div>
         <div className='pb-4'>
            <TruncatedText text={description} maxLength={350} className='my-2 text-base' />
            <div className='my-3'>
               <span className='text-sm text-gray-300 mr-2'>Stack:</span>
               {tech.map((el, id) => (
                  <button className='mx-1 text-blue-400 text-sm hover:underline' key={id}>
                     {el}
                  </button>
               ))}
               <div className='flex mt-4 gap-4'>
                  <Button to={seeCode}>See Code</Button>
                  <Button to={liveSite}>Live Preview</Button>
               </div>
            </div>
         </div>
      </div>
   );
}
