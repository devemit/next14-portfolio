import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'

interface ButtonProps {
  to: string
  children: React.ReactNode
}

export default function Button({ to, children }: ButtonProps) {
  return (
    <Link
      target="_blank"
      href={to}
      className="flex items-center gap-2 whitespace-nowrap rounded border border-border bg-card px-2 py-1 text-xs text-card-foreground transition ease-in-out hover:-translate-y-1 hover:bg-muted xl:text-sm"
    >
      {children}
      <FiArrowUpRight />
    </Link>
  )
}
