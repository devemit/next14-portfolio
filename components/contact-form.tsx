'use client'

import { useEffect, useRef, useState, useTransition } from 'react'
import { sendEmail } from '@/app/actions/contact'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from './ui/textarea'

export const ContactForm = () => {
  const triggerRef = useRef<HTMLButtonElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const nameInputRef = useRef<HTMLInputElement>(null)
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

  useEffect(() => {
    if (!isModalOpen) return

    const previouslyFocusedElement = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    const dialog = dialogRef.current

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false)
        return
      }

      if (event.key !== 'Tab' || !dialog) return

      const focusableElements = Array.from(
        dialog.querySelectorAll<HTMLElement>(
          'button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
        ),
      )
      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement?.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement?.focus()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    nameInputRef.current?.focus()

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
      previouslyFocusedElement?.focus()
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
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="dialog"
        aria-expanded={isModalOpen}
        aria-controls="contact-dialog"
        onClick={() => setIsModalOpen(true)}
        className="rounded-md border border-border bg-card px-3 py-2 text-xs font-medium text-card-foreground hover:bg-muted xl:text-sm"
      >
        Let&apos;s talk
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6" onMouseDown={() => setIsModalOpen(false)}>
          <div
            ref={dialogRef}
            id="contact-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-dialog-title"
            onMouseDown={(event) => event.stopPropagation()}
            className="relative w-96 rounded-lg border border-border bg-card p-6 text-card-foreground shadow-lg"
          >
            <button
              type="button"
              aria-label="Close contact form"
              onClick={() => setIsModalOpen(false)}
              className="absolute right-2 top-2 text-muted-foreground hover:text-foreground"
            >
              ×
            </button>
            <h2 id="contact-dialog-title" className="mb-4 text-xl font-bold">
              Leave a message
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <Label htmlFor="name" className="block text-sm font-medium text-card-foreground">
                  Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  ref={nameInputRef}
                  value={formState.name}
                  onChange={(e) => setFormState((prev) => ({ ...prev, name: e.target.value }))}
                  required
                  className="mt-1 block w-full rounded-md border-border bg-background text-foreground shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-card-foreground">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={(e) => setFormState((prev) => ({ ...prev, email: e.target.value }))}
                  required
                  className="mt-1 block w-full rounded-md border-border bg-background text-foreground shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <Label htmlFor="message" className="block text-sm font-medium text-card-foreground">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={(e) => setFormState((prev) => ({ ...prev, message: e.target.value }))}
                  required
                  rows={4}
                  className="mt-1 block w-full rounded-md border-border bg-background text-foreground shadow-sm focus:border-blue-500 focus:ring-blue-500"
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
              <div
                role="status"
                aria-live="polite"
                className={`mt-4 rounded p-2 ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
              >
                {status.message}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
