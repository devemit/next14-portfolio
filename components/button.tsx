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
      className={`flex items-center gap-2 whitespace-nowrap border border-gray-500 px-2 py-1 text-[#D6D6DC] transition ease-in-out hover:-translate-y-1 hover:bg-[#737373]`}
    >
      {children}
      <FiArrowUpRight />
    </Link>
  )
}
