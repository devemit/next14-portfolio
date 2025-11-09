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
          className={`inline-flex items-center border-b-2 border-transparent pb-1 text-lg transition delay-75 duration-75 ease-in-out ${
            pathname === '/' ? 'border-yellow-400 text-[#D6D6DC]' : 'text-[#8B8B9C]'
          }`}
        >
          <SiMonzo size={26} />
        </span>
      </Link>
      <ul className="flex gap-4 py-4 md:mt-4 md:flex-col">
        {pages.map((page) => (
          <li key={page.label}>
            <Link
              className={`text-sm transition delay-75 duration-75 ease-in-out ${
                pathname.startsWith(page.href) ? 'text-[#D6D6DC] underline decoration-yellow-400 underline-offset-8' : 'text-[#8B8B9C]'
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
