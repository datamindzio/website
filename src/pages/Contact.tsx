import { useState, type FormEvent } from 'react'
import Eyebrow from '../components/primitives/Eyebrow'
import Button from '../components/primitives/Button'
import { validateContact, buildMailto, type ContactErrors } from '../lib/contact'
import { ENERGYATLAS_URL, CONTACT_EMAIL } from '../lib/constants'

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<ContactErrors>({})
  const [sent, setSent] = useState(false)

  function set<K extends keyof typeof values>(k: K, v: string) {
    setValues((prev) => ({ ...prev, [k]: v }))
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    const result = validateContact(values)
    setErrors(result.errors)
    if (!result.valid) return
    window.location.href = buildMailto(values)
    setSent(true)
  }

  const inputCls = (k: keyof ContactErrors) => `field-input ${errors[k] ? 'field-input--error' : ''}`.trim()

  return (
    <div className="split">
      {/* Left panel */}
      <div className="hero-grid" style={{ padding: '88px var(--gutter)' }}>
        <Eyebrow>CONTACT</Eyebrow>
        <h1 style={{ fontSize: 50, margin: '20px 0 0' }}>Tell us about your data.</h1>
        <p className="lead" style={{ fontSize: 16, maxWidth: 460, margin: '20px 0 0' }}>
          Whether you need a full delivery or a second opinion on an existing stack, we'll reply within one business day.
        </p>
        <div style={{ marginTop: 40, display: 'grid', gap: 20 }}>
          <div>
            <div className="eyebrow eyebrow--dim">EMAIL</div>
            <a href={`mailto:${CONTACT_EMAIL}`} style={{ fontSize: 18, color: 'var(--accent)', marginTop: 6, display: 'inline-block' }}>{CONTACT_EMAIL}</a>
          </div>
          <div>
            <div className="eyebrow eyebrow--dim">LIVE DEMO</div>
            <a className="mono" href={ENERGYATLAS_URL} target="_blank" rel="noopener" style={{ fontSize: 14, color: 'var(--accent)', marginTop: 6, display: 'inline-block' }}>energyatlas.datamindz.io →</a>
          </div>
        </div>
      </div>

      {/* Right form */}
      <div style={{ padding: '88px var(--gutter)' }}>
        <form onSubmit={onSubmit} noValidate style={{ maxWidth: 460 }}>
          <div className="field">
            <label className="field-label" htmlFor="name">NAME</label>
            <input id="name" className={inputCls('name')} placeholder="Your name" value={values.name} onChange={(e) => set('name', e.target.value)} />
            {errors.name && <span className="field-error">{errors.name}</span>}
          </div>
          <div className="field">
            <label className="field-label" htmlFor="email">WORK EMAIL</label>
            <input id="email" type="email" className={inputCls('email')} placeholder="you@company.com" value={values.email} onChange={(e) => set('email', e.target.value)} />
            {errors.email && <span className="field-error">{errors.email}</span>}
          </div>
          <div className="field">
            <label className="field-label" htmlFor="message">WHAT ARE YOU WORKING ON?</label>
            <textarea id="message" rows={6} className={inputCls('message')} placeholder="A few sentences about your data, goals, or the problem at hand…" value={values.message} onChange={(e) => set('message', e.target.value)} />
            {errors.message && <span className="field-error">{errors.message}</span>}
          </div>
          <Button>{sent ? "Thanks — we'll be in touch ✓" : 'Send message'}</Button>
        </form>
      </div>
    </div>
  )
}
