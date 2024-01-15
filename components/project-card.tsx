import { ProjectProps } from '@/types/types';
import Button from './button';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectCard({
  title,
  description,
  tech,
  seeCode,
  liveSite,
  imgUrl,
}: ProjectProps) {
  return (
    <div className='py-6'>
      <h2 className='my-2 text-xl'>{title}</h2>
      <div className='relative w-full h-[200px]'>
        <Image src={imgUrl} alt='project-image' fill />
      </div>
      <p className='my-2 text-base'>{description}</p>
      <div className='my-2'>
        Technology used:
        {tech.map((el, id) => (
          <button className='mx-1 text-indigo-600' key={id}>
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
