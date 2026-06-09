import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useReveal } from '../hooks/useReveal'

export default function Contact() {
  useReveal()
  const [formNote, setFormNote] = useState('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormNote('Thanks — this is a demo form. Wire it to your email/CRM to receive messages.')
    e.currentTarget.reset()
  }

  return (
    <>
      <div className="bg-fx" />
      <div className="grid-overlay" />
      <Header />

      <section className="hero" style={{ paddingBottom: '32px' }}>
        <div className="container">
          <div className="sec-head reveal" style={{ marginBottom: '0' }}>
            <span className="eyebrow">Contact</span>
            <h1>Let's turn your data <span className="text-grad">into decisions</span>.</h1>
            <p className="lead">
              Book a free data audit, request a Storage trial, or just ask us a question. We usually
              reply within one business day.
            </p>
          </div>
        </div>
      </section>

      <section className="section--tight">
        <div className="container contact-grid">
          {/* FORM */}
          <div className="panel reveal">
            <form className="form" onSubmit={handleSubmit}>
              <div className="grid grid-2" style={{ gap: '16px' }}>
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" required placeholder="Jane Kowalski" />
                </div>
                <div className="field">
                  <label htmlFor="email">Work email</label>
                  <input id="email" name="email" type="email" required placeholder="jane@company.com" />
                </div>
              </div>
              <div className="grid grid-2" style={{ gap: '16px' }}>
                <div className="field">
                  <label htmlFor="company">Company</label>
                  <input id="company" name="company" type="text" placeholder="Company sp. z o.o." />
                </div>
                <div className="field">
                  <label htmlFor="need">What you need</label>
                  <select id="need" name="need">
                    <option>Free data audit</option>
                    <option>Consulting</option>
                    <option>DATAMINDZ Storage</option>
                    <option>Something else</option>
                  </select>
                </div>
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us a little about your data challenge…"
                />
              </div>
              <button type="submit" className="btn btn--primary" style={{ justifyContent: 'center' }}>
                Send message
              </button>
              {formNote && (
                <p className="muted" style={{ margin: '0', fontSize: '.9rem', color: 'var(--cyan-2)' }}>
                  {formNote}
                </p>
              )}
            </form>
          </div>

          {/* INFO */}
          <div className="contact-info reveal">
            <div className="row">
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              </div>
              <div>
                <div className="lbl">Email</div>
                <a className="val" href="mailto:hello@datamindz.io">hello@datamindz.io</a>
              </div>
            </div>
            <div className="row">
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 17h4" />
                </svg>
              </div>
              <div>
                <div className="lbl">LinkedIn</div>
                <a
                  className="val"
                  href="https://www.linkedin.com/company/datamindz"
                  target="_blank"
                  rel="noopener"
                >
                  /company/datamindz
                </a>
              </div>
            </div>
            <div className="row">
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 21s-7-5.2-7-11a7 7 0 0 1 14 0c0 5.8-7 11-7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </div>
              <div>
                <div className="lbl">Location</div>
                <div className="val">Poland · Serving the EU</div>
              </div>
            </div>
            <div className="row">
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <ellipse cx="12" cy="6" rx="8" ry="3" />
                  <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
                </svg>
              </div>
              <div>
                <div className="lbl">Product trial</div>
                <Link className="val" to="/storage" style={{ color: 'var(--cyan)' }}>
                  Start a free DATAMINDZ Storage trial →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
