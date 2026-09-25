'use client'

import { pages } from '../utils/routes'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { FaXTwitter } from 'react-icons/fa6'
import { site } from '@/lib/site'
import { ThemeToggle } from './theme-toggle'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="w-full border-b border-border pb-4" aria-label="Primary navigation">
      <div className="flex items-center justify-between gap-4">
        <Link href="/" className="text-xl font-semibold text-foreground hover:underline">
          @mitcodes
        </Link>
        <div className="flex items-center gap-3">
          <Link href={site.profiles.github} target="_blank" rel="noopener noreferrer" aria-label="Visit Mitko's GitHub profile">
            <AiFillGithub size={18} className="text-muted-foreground hover:text-foreground" />
          </Link>
          <Link href={site.profiles.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Visit Mitko's LinkedIn profile">
            <AiFillLinkedin size={18} className="text-muted-foreground hover:text-foreground" />
          </Link>
          <Link href={site.profiles.x} target="_blank" rel="noopener noreferrer" aria-label="Visit @mitcodes on X">
            <FaXTwitter size={16} className="text-muted-foreground hover:text-foreground" />
          </Link>
          <ThemeToggle />
        </div>
      </div>
      {pathname !== '/' && (
        <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-base">
          {pages.map((page) => (
            <li key={page.label}>
              <Link
                aria-current={pathname.startsWith(page.href) ? 'page' : undefined}
                className={`inline-flex hover:text-foreground hover:underline ${
                  pathname.startsWith(page.href) ? 'font-medium text-foreground' : 'text-foreground/65'
                }`}
                href={page.href}
              >
                {page.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
