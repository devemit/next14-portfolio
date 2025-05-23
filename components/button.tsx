import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';

interface ButtonProps {
   to: string;
   children: React.ReactNode;
}

export default function Button({ to, children }: ButtonProps) {
   return (
      <Link
         target='_blank'
         href={to}
         className={`flex gap-6 items-center text-[#D4D4D4] border-gray-500 border hover:bg-[#737373] py-1 px-2  hover:-translate-y-1 transition ease-in-out`}
      >
         {children}
         <FiArrowUpRight />
      </Link>
   );
}
