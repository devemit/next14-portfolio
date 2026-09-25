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
      className="flex items-center gap-2 whitespace-nowrap rounded border border-border bg-card px-2 py-1 text-sm text-card-foreground hover:bg-muted"
    >
      {children}
      <FiArrowUpRight />
    </Link>
  )
}
