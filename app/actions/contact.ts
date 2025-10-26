'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  if (!process.env.RESEND_API_KEY) {
    return {
      error: 'Email service configuration error',
    }
  }

  if (!process.env.EMAIL_TO) {
    return {
      error: 'Recipient email not configured',
    }
  }

  if (!name || !email || !message) {
    return {
      error: 'Please fill in all fields',
    }
  }

  try {
    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: process.env.EMAIL_TO,
      subject: `New message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
    })

    return { success: true }
  } catch (error) {
    return {
      error: 'Failed to send message. Please try again later.',
    }
  }
}
