'use client'

import { useEffect, useState, useTransition } from 'react'
import { FaRobot } from 'react-icons/fa'
import { sendEmail } from '@/app/actions/contact'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from './ui/textarea'

export const ContactForm = () => {
  const [isPending, startTransition] = useTransition()
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | ''
    message: string
  }>({ type: '', message: '' })
  const [isModalOpen, setIsModalOpen] = useState(false)

  const resetForm = () => {
    setFormState({
      name: '',
      email: '',
      message: '',
    })
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsModalOpen(false)
    }
  }

  useEffect(() => {
    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown)
    } else {
      window.removeEventListener('keydown', handleKeyDown)
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isModalOpen])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    startTransition(async () => {
      try {
        const result = await sendEmail(formData)

        if (result.error) {
          setStatus({
            type: 'error',
            message: result.error,
          })
          return
        }

        setStatus({
          type: 'success',
          message: 'Message sent successfully!',
        })

        resetForm()

        setTimeout(() => {
          setIsModalOpen(false)
          setStatus({ type: '', message: '' })
        }, 2000)
      } catch (error) {
        setStatus({
          type: 'error',
          message: 'An unexpected error occurred. Please try again.',
        })
      }
    })
  }

  return (
    <div>
      <FaRobot className="animate-pulse cursor-pointer text-2xl text-white" onClick={() => setIsModalOpen(true)} />
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-6">
          <div
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                setIsModalOpen(false)
              }
            }}
            className="relative w-96 rounded-lg bg-white p-6 shadow-lg"
          >
            <button onClick={() => setIsModalOpen(false)} className="absolute right-2 top-2 text-gray-500 hover:text-gray-700">
              ×
            </button>
            <h2 className="mb-4 text-xl font-bold">Leave a message!</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <Label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={(e) => setFormState((prev) => ({ ...prev, name: e.target.value }))}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={(e) => setFormState((prev) => ({ ...prev, email: e.target.value }))}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <Label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={(e) => setFormState((prev) => ({ ...prev, message: e.target.value }))}
                  required
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></Textarea>
              </div>

              <button
                type="submit"
                disabled={isPending}
                className={`flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white shadow-sm ${isPending ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
              >
                {isPending ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            {status.message && (
              <div className={`mt-4 rounded p-2 ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {status.message}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
