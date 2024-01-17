import Link from 'next/link';
import { blogs } from '@/blogs';
export default function Blog() {
  return (
    <div className='ml-8 lg:ml-20 mb-20 flex flex-col text-white text-2xl font-bold'>
      <h3 className='mb-8 text-slate-300'>my blogs</h3>
      <span className='text-base mb-6'>the blogs are random till mine are finished</span>
      <section className='flex flex-col gap-4'>
        {blogs.blogs.map((blog, id) => {
          return (
            <ul key={id} className='flex flex-col'>
              <li className='text-base text-slate-500'>{blog.title}</li>
              <span className='text-sm text-slate-400'>{blog.description}</span>
              <Link
                className='text-sm mt-4 text-slate-300 max-w-md truncate hover:text-slate-200 cursor-pointer'
                href={blog.link}
                target='_blank'
              >
                {blog.link}
              </Link>
            </ul>
          );
        })}
      </section>
    </div>
  );
}
