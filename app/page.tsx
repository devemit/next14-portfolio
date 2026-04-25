import { Metadata } from 'next'
import { greet, about } from '../utils/info'
import Link from 'next/link'

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

import { ContactForm } from '@/components/contact-form'
import GithubActivity from '@/components/github-activity'

export const metadata: Metadata = {
  title: 'Mitko | Developer, Designer, Creator',
  description: 'Personal portfolio of Mitko, focused on modern web development, clean UI, and scalable frontend solutions.',
}

export default function Home() {
  return (
    <main className="py-2">
      <h1 className="text-lg font-bold text-[#D6D6DC] xl:text-xl">{greet}</h1>
      <p className="my-4 max-w-lg text-sm text-[#D6D6DC] xl:text-base">{about()}</p>
      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-2">
          <Link href="https://github.com/devemit" target="_blank" rel="noopener noreferrer" aria-label="Visit Mitko's GitHub profile">
            <AiFillGithub size={20} className="my-2 cursor-pointer text-[#A3A3A3] hover:text-[#333333]" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mitko-iliev/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Mitko's LinkedIn profile"
          >
            <AiFillLinkedin size={20} className="my-2 cursor-pointer text-[#A3A3A3] hover:text-[#0A66C2]" />
          </Link>
        </div>
        <ContactForm />
      </div>
      <GithubActivity />
    </main>
  )
}
