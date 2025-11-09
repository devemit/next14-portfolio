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
        <SiMonzo
          className={`${pathname === '/' && 'text-[#D6D6DC]'} text-lg text-[#8B8B9C] transition delay-75 duration-75 ease-in-out`}
          size={26}
        />
      </Link>
      <ul className="flex gap-4 py-4 md:mt-4 md:flex-col">
        {pages.map((page) => (
          <li key={page.label}>
            <Link
              className={`${
                pathname.startsWith(page.href) && 'text-[#D6D6DC]'
              } text-sm text-[#8B8B9C] transition delay-75 duration-75 ease-in-out`}
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
