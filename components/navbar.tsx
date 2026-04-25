'use client'

import { pages } from '../utils/routes'
import { SiMonzo } from 'react-icons/si'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted ? resolvedTheme === 'dark' : true

  return (
    <nav>
      <div className="flex items-center justify-between md:justify-start md:gap-3">
        <Link href="/">
          <span
            className={`relative inline-flex items-center text-lg text-foreground/65 transition-colors duration-200 ease-out after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-yellow-400 after:transition-transform after:duration-200 after:ease-out hover:text-foreground hover:after:scale-x-100 ${
              pathname === '/' ? 'text-foreground after:scale-x-100' : ''
            }`}
          >
            <SiMonzo size={26} />
          </span>
        </Link>
        <button
          type="button"
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
          aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
          className="inline-flex h-6 w-6 items-center justify-center rounded bg-transparent text-card-foreground transition-colors hover:bg-muted md:hidden"
        >
          {isDark ? <Sun size={13} /> : <Moon size={13} />}
        </button>
      </div>
      <ul className="flex gap-4 py-4 md:mt-4 md:flex-col">
        {pages.map((page) => (
          <li key={page.label}>
            <Link
              className={`relative inline-flex text-sm text-foreground/65 transition-colors duration-200 ease-out after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-yellow-400 after:transition-transform after:duration-200 after:ease-out hover:text-foreground hover:after:scale-x-100 xl:text-base ${
                pathname.startsWith(page.href) ? 'text-foreground after:scale-x-100' : ''
              }`}
              href={page.href}
            >
              {page.label}
            </Link>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
        className="hidden h-6 w-6 items-center justify-center rounded bg-transparent text-card-foreground transition-colors hover:bg-muted md:inline-flex"
      >
        {isDark ? <Sun size={13} /> : <Moon size={13} />}
      </button>
    </nav>
  )
}
