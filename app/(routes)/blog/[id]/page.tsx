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
        <div className='text-[#D4D4D4] max-w-md text-sm py-2'>
            <div className='leading-6'>{blog?.description}</div>
            <br />
            <p className='text-base my-1'>Tools used:</p>
            <div className='leading-6'>{blog?.skills}</div>
        </div>
    );
}
