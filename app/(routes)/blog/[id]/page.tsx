'use client';
import { useParams } from 'next/navigation';
import blogs from '@/utils/blogs';

export interface Blog {
    slug: string;
    name: string;
    description: string;
}

export default function Page() {
    const params = useParams();
    const blog: Blog | undefined = blogs.find((blog) => blog.slug === params.id);

    return <div className='text-[#D4D4D4] max-w-md text-sm py-2'>{blog?.description}</div>;
}
