'use client';
import { useParams } from 'next/navigation';
import blogs from '@/utils/blogs';

export interface Blog {
   slug: string;
   name: string;
   description: string;
   skills: string;
}

export default function Page() {
   const params = useParams();
   const blog: Blog | undefined = blogs.find((blog) => blog.slug === params.id);

   return (
      <div className='text-[#D4D4D4] max-w-md mx-auto py-4 px-6'>
         <h1 className='text-2xl font-bold mb-4'>{blog?.name}</h1>
         <div className='leading-6 mb-4'>{blog?.description}</div>
         <br />
         <p className='text-base my-1 font-semibold'>Tools used:</p>
         <div className='leading-6'>{blog?.skills}</div>
      </div>
   );
}
