import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useReveal } from '../hooks/useReveal'

export default function Storage() {
  useReveal()

  return (
    <>
      <div className="bg-fx" />
      <div className="grid-overlay" />
      <Header />

      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="reveal">
            <span className="eyebrow">DATAMINDZ Storage · SaaS</span>
            <h1>S3-compatible object storage, <span className="text-grad">built in the EU</span>.</h1>
            <p className="lead">
              Drop-in compatible with the S3 API you already use — but with EU data residency,
              transparent pricing, and a team that actually answers the phone.
            </p>
            <div className="hero-cta">
              <Link to="/contact" className="btn btn--primary">Start free trial</Link>
              <a href="#pricing" className="btn btn--ghost">View pricing →</a>
            </div>
            <div className="chips">
              <span className="chip">S3-compatible API</span>
              <span className="chip">EU data residency</span>
              <span className="chip">99.999999999% durability</span>
              <span className="chip">No card required</span>
            </div>
          </div>
          <div className="hero-visual reveal">
            <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="sb" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#33C6E0" />
                  <stop offset="100%" stopColor="#7A5BFF" />
                </linearGradient>
                <radialGradient id="sgg" cx="50%" cy="40%" r="70%">
                  <stop offset="0%" stopColor="#33C6E0" stopOpacity=".5" />
                  <stop offset="100%" stopColor="#4F8DFF" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="200" cy="170" r="160" fill="url(#sgg)" />
              <g transform="translate(120,110)">
                <ellipse cx="80" cy="20" rx="80" ry="22" fill="none" stroke="url(#sb)" strokeWidth="2" />
                <path d="M0 20 V120 a80 22 0 0 0 160 0 V20" fill="none" stroke="url(#sb)" strokeWidth="2" />
                <ellipse cx="80" cy="70" rx="80" ry="22" fill="none" stroke="url(#sb)" strokeWidth="1.4" opacity=".6" />
                <ellipse cx="80" cy="120" rx="80" ry="22" fill="none" stroke="url(#sb)" strokeWidth="1.4" opacity=".6" />
                <circle cx="80" cy="20" r="5" fill="#9FE9F6" />
              </g>
              <g fill="#9FE9F6" opacity=".8">
                <circle cx="60" cy="80" r="3" />
                <circle cx="340" cy="120" r="3" />
                <circle cx="320" cy="300" r="3.5" />
                <circle cx="80" cy="320" r="3" />
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section">
        <div className="container">
          <div className="sec-head reveal">
            <span className="eyebrow">Why DATAMINDZ Storage</span>
            <h2>Everything you expect from S3 — without the lock-in or the egress traps.</h2>
          </div>
          <div className="grid grid-3">
            <div className="card reveal">
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" />
                </svg>
              </div>
              <h3>S3-compatible API</h3>
              <p>Point your existing tools, SDKs and CLIs at us. No rewrite, no lock-in.</p>
            </div>
            <div className="card reveal">
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
                </svg>
              </div>
              <h3>EU data residency</h3>
              <p>Your objects stay in the EU. GDPR-ready by design.</p>
            </div>
            <div className="card reveal">
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
                </svg>
              </div>
              <h3>Built for durability</h3>
              <p>Redundant, replicated storage engineered for 99.999999999% durability.</p>
            </div>
            <div className="card reveal">
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="4" y="10" width="16" height="11" rx="2" />
                  <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                </svg>
              </div>
              <h3>Secure by default</h3>
              <p>Encryption in transit and at rest, fine-grained access keys and bucket policies.</p>
            </div>
            <div className="card reveal">
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M3 12h4l3 8 4-16 3 8h4" />
                </svg>
              </div>
              <h3>Scales to petabytes</h3>
              <p>From a first bucket to production scale without re-architecting.</p>
            </div>
            <div className="card reveal">
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 1v22M5 6h11a3 3 0 0 1 0 6H8a3 3 0 0 0 0 6h11" />
                </svg>
              </div>
              <h3>Transparent pricing</h3>
              <p>Pay for what you store and transfer. No surprise egress charges.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES + HOW IT WORKS */}
      <section className="section" style={{ paddingTop: '0' }}>
        <div className="container split">
          <div className="panel reveal">
            <span className="eyebrow">Features</span>
            <h3 style={{ fontSize: '1.4rem' }}>Built for real workloads</h3>
            <div className="grid" style={{ gap: '14px', marginTop: '18px' }}>
              <div className="feature">
                <span className="tick">✓</span>
                <div>
                  <h4>Buckets, versioning &amp; lifecycle rules</h4>
                  <p>Organize, retain and expire objects automatically.</p>
                </div>
              </div>
              <div className="feature">
                <span className="tick">✓</span>
                <div>
                  <h4>Presigned URLs &amp; IAM-style keys</h4>
                  <p>Granular, time-bound access without exposing secrets.</p>
                </div>
              </div>
              <div className="feature">
                <span className="tick">✓</span>
                <div>
                  <h4>Multipart upload</h4>
                  <p>Reliable transfer of very large objects.</p>
                </div>
              </div>
              <div className="feature">
                <span className="tick">✓</span>
                <div>
                  <h4>Event notifications &amp; webhooks</h4>
                  <p>Trigger pipelines and apps the moment data lands.</p>
                </div>
              </div>
              <div className="feature">
                <span className="tick">✓</span>
                <div>
                  <h4>Static hosting &amp; CDN-ready</h4>
                  <p>Serve assets fast, close to your users.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="reveal">
            <span className="eyebrow">How it works</span>
            <h3 style={{ fontSize: '1.4rem' }}>Live in minutes, not weeks</h3>
            <div className="steps" style={{ marginTop: '18px' }}>
              <div className="step">
                <span className="n">1</span>
                <div>
                  <h4>Create a bucket</h4>
                  <p>Spin one up from the console in minutes.</p>
                </div>
              </div>
              <div className="step">
                <span className="n">2</span>
                <div>
                  <h4>Point your S3 SDK</h4>
                  <p>Same API, new endpoint — your code barely changes.</p>
                </div>
              </div>
              <div className="step">
                <span className="n">3</span>
                <div>
                  <h4>Build on it</h4>
                  <p>Pipelines, backups, analytics and apps, all on storage that stays in the EU.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section" id="pricing" style={{ paddingTop: '0' }}>
        <div className="container">
          <div className="cta-banner reveal">
            <span className="eyebrow">Pricing</span>
            <h2>Start free. Scale on pay-as-you-go.</h2>
            <p className="lead">
              Transparent storage and transfer pricing — no hidden egress traps. Free trial, no card required.
            </p>
            <div className="hero-cta" style={{ justifyContent: 'center', margin: '0' }}>
              <Link to="/contact" className="btn btn--primary">Start your free trial</Link>
              <Link to="/contact" className="btn btn--ghost">Talk to us →</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
