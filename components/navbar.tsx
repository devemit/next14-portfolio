'use client'

import { pages } from '../utils/routes'
import { SiMonzo } from 'react-icons/si'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav>
      <Link href="/">
        <span
          className={`relative inline-flex items-center text-lg text-[#8B8B9C] transition-colors duration-200 ease-out after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-yellow-400 after:transition-transform after:duration-200 after:ease-out hover:text-[#D6D6DC] hover:after:scale-x-100 ${
            pathname === '/' ? 'text-[#D6D6DC] after:scale-x-100' : ''
          }`}
        >
          <SiMonzo size={26} />
        </span>
      </Link>
      <ul className="flex gap-4 py-4 md:mt-4 md:flex-col">
        {pages.map((page) => (
          <li key={page.label}>
            <Link
              className={`relative inline-flex text-sm text-[#8B8B9C] transition-colors duration-200 ease-out after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-yellow-400 after:transition-transform after:duration-200 after:ease-out hover:text-[#D6D6DC] hover:after:scale-x-100 xl:text-base ${
                pathname.startsWith(page.href) ? 'text-[#D6D6DC] after:scale-x-100' : ''
              }`}
              href={page.href}
            >
              {page.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
