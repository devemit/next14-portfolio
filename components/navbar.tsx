'use client';

import { pages } from '../utils/routes';
import { SiMonzo } from 'react-icons/si';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
   const pathname = usePathname();

   return (
      <nav>
         <Link href='/'>
            <SiMonzo className='text-[#D4D4D4]' size={32} />
         </Link>
         <ul className='flex gap-4 py-4 md:flex-col md:mt-4'>
            {pages.map((page) => (
               <li key={page.label}>
                  <Link
                     className={`${
                        pathname.startsWith(page.href) && 'text-[#D4D4D4]'
                     } text-[#737373] text-lg hover:text-[#D4D4D4] transition delay-75 duration-75 ease-in-out`}
                     href={page.href}
                  >
                     {page.label}
                  </Link>
               </li>
            ))}
         </ul>
      </nav>
   );
}
