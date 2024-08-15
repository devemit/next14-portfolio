import Link from 'next/link';
import blogs from '@/utils/blogs';
import { FiArrowUpRight } from 'react-icons/fi';

export default function Blogs() {
    return (
        <>
            <h1 className='text-2xl mb-2 py-2 text-[#D4D4D4]'>Blogs</h1>
            <main className='flex flex-col gap-2'>
                {blogs.map((blog, index) => {
                    return (
                        <ul key={index}>
                            <Link href={`/blog/${blog.slug}`}>
                                <div className='flex items-center justify-between gap-4 border p-2 rounded-md cursor-pointer transition ease-in-out hover:scale-105'>
                                    <div>
                                        <div className='text-[#D4D4D4] text-xs mb-1'>
                                            {blog.date}
                                        </div>
                                        <div className='text-[#D4D4D4]'>{blog.name}</div>
                                        <span className='text-xs text-[#D4D4D4]'>{blog.tools}</span>
                                    </div>

                                    <div>
                                        <span className='text-[#D4D4D4]'>
                                            <FiArrowUpRight />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </ul>
                    );
                })}
            </main>
        </>
    );
}
