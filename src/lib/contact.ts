import { CONTACT_EMAIL } from './constants'

export interface ContactValues { name: string; email: string; message: string }
export interface ContactErrors { name?: string; email?: string; message?: string }

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContact(v: ContactValues): { valid: boolean; errors: ContactErrors } {
  const errors: ContactErrors = {}
  if (!v.name.trim()) errors.name = 'Please enter your name.'
  if (!EMAIL_RE.test(v.email.trim())) errors.email = 'Please enter a valid email address.'
  if (!v.message.trim()) errors.message = 'Please tell us what you are working on.'
  return { valid: Object.keys(errors).length === 0, errors }
}

export function buildMailto(v: ContactValues): string {
  const subject = `New enquiry from ${v.name.trim()}`
  const body = `Name: ${v.name.trim()}\nEmail: ${v.email.trim()}\n\n${v.message.trim()}`
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
