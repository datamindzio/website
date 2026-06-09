import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useReveal } from '../hooks/useReveal'

export default function Home() {
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
            <span className="eyebrow">Data consulting &amp; EU-native cloud storage</span>
            <h1>Turn raw data into your <span className="text-grad">strongest strategic asset</span>.</h1>
            <p className="lead">
              Fix data quality, break down silos and unlock real-time insight — backed by our own
              S3-compatible object storage, built and hosted in the EU.
            </p>
            <div className="hero-cta">
              <Link to="/contact" className="btn btn--primary">Book a free data audit</Link>
              <Link to="/storage" className="btn btn--ghost">Explore DATAMINDZ Storage →</Link>
            </div>
            <div className="hero-stats">
              <div>
                <div className="num text-grad">$952M</div>
                <div className="lbl">Polish data market by 2032</div>
              </div>
              <div>
                <div className="num text-grad">15.87%</div>
                <div className="lbl">CAGR, 2025–2032</div>
              </div>
              <div>
                <div className="num text-grad">EU</div>
                <div className="lbl">Data residency by default</div>
              </div>
            </div>
          </div>
          <div className="hero-visual reveal">
            <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="hg" cx="60%" cy="45%" r="70%">
                  <stop offset="0%" stopColor="#33C6E0" stopOpacity=".9" />
                  <stop offset="100%" stopColor="#4F8DFF" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="hln" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#33C6E0" />
                  <stop offset="100%" stopColor="#7A5BFF" />
                </linearGradient>
              </defs>
              <circle cx="240" cy="180" r="150" fill="url(#hg)" />
              <g stroke="url(#hln)" strokeWidth="1" opacity=".55">
                <line x1="240" y1="180" x2="90" y2="70" />
                <line x1="240" y1="180" x2="60" y2="200" />
                <line x1="240" y1="180" x2="120" y2="320" />
                <line x1="240" y1="180" x2="330" y2="90" />
                <line x1="240" y1="180" x2="360" y2="250" />
                <line x1="240" y1="180" x2="250" y2="350" />
                <line x1="90" y1="70" x2="60" y2="200" />
                <line x1="330" y1="90" x2="360" y2="250" />
                <line x1="120" y1="320" x2="250" y2="350" />
                <line x1="60" y1="200" x2="120" y2="320" />
              </g>
              <g fill="#9FE9F6">
                <circle cx="240" cy="180" r="9" fill="url(#hln)" />
                <circle cx="90" cy="70" r="4" />
                <circle cx="60" cy="200" r="3.5" />
                <circle cx="120" cy="320" r="5" />
                <circle cx="330" cy="90" r="4" />
                <circle cx="360" cy="250" r="3.5" />
                <circle cx="250" cy="350" r="4.5" />
                <circle cx="180" cy="130" r="2.5" />
                <circle cx="300" cy="220" r="2.5" />
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* VALUE STRIP */}
      <section className="section--tight">
        <div className="container">
          <div className="value-strip reveal">
            <span className="chip"><b>End-to-end</b> · audits to dashboards</span>
            <span className="chip"><b>Real-time</b> · low-latency pipelines</span>
            <span className="chip"><b>EU-native storage</b> · GDPR-ready</span>
            <span className="chip"><b>One partner</b> · no vendor juggling</span>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section">
        <div className="container">
          <div className="sec-head reveal">
            <span className="eyebrow">What we do</span>
            <h2>One trusted partner, from raw data to real-time intelligence.</h2>
            <p className="lead">
              Most teams don't have a tooling problem — they have a fragmentation problem. We close
              the gap between data and decisions.
            </p>
          </div>
          <div className="grid grid-3">
            <Link to="/services" className="card card--link reveal">
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M9 11l3 3 8-8M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0" />
                </svg>
              </div>
              <h3>Data Audits</h3>
              <p>Assess data quality, governance and maturity before you invest.</p>
            </Link>
            <Link to="/services" className="card card--link reveal">
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3" />
                </svg>
              </div>
              <h3>Strategic Advice</h3>
              <p>Data strategy, the right tech, and a genuinely data-fluent culture.</p>
            </Link>
            <Link to="/services" className="card card--link reveal">
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M6 3v12M18 9v12M6 15a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3M6 3a3 3 0 0 1 3 3" />
                </svg>
              </div>
              <h3>Data Integration</h3>
              <p>Unify disparate sources and eliminate silos for one source of truth.</p>
            </Link>
            <Link to="/services" className="card card--link reveal">
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M4 7h16M4 12h16M4 17h16M8 4v16" />
                </svg>
              </div>
              <h3>Pipelining &amp; Processing</h3>
              <p>Scalable, resilient, real-time pipelines built for low latency.</p>
            </Link>
            <Link to="/services" className="card card--link reveal">
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M4 19V5M4 19h16M8 16V9M12 16V6M16 16v-4M20 16v-8" />
                </svg>
              </div>
              <h3>Analysis &amp; Storytelling</h3>
              <p>Clear, decision-ready visual narratives your stakeholders can act on.</p>
            </Link>
            <Link to="/storage" className="card card--link reveal" style={{ borderColor: 'var(--line-strong)' }}>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <ellipse cx="12" cy="6" rx="8" ry="3" />
                  <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
                </svg>
              </div>
              <h3>
                DATAMINDZ Storage{' '}
                <span style={{ color: 'var(--cyan)', fontSize: '.7rem', verticalAlign: 'middle' }}>SaaS</span>
              </h3>
              <p>S3-compatible object storage — the secure EU foundation under it all.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY NOW */}
      <section className="section">
        <div className="container">
          <div className="panel split reveal">
            <div>
              <span className="eyebrow">Why now</span>
              <h2>The gap is the opportunity.</h2>
              <p className="muted">
                Poland's data design &amp; consulting segment is the fastest-growing slice of a market
                projected to reach <b style={{ color: 'var(--text)' }}>USD 952M by 2032</b>. Yet AI
                adoption (5.9%) and data analytics (19.3%) sit far below EU averages — and national
                programs are channeling an estimated <b style={{ color: 'var(--text)' }}>EUR 12.4B</b>{' '}
                into SME digitalization. We close that gap.
              </p>
            </div>
            <div className="grid" style={{ gap: '14px' }}>
              <div className="feature">
                <span className="tick">✓</span>
                <div>
                  <h4>SMEs</h4>
                  <p>Simplify complex data, prove ROI fast — no in-house data team required.</p>
                </div>
              </div>
              <div className="feature">
                <span className="tick">✓</span>
                <div>
                  <h4>Large enterprises</h4>
                  <p>Untangle legacy systems and silos with scalable, compliant, secure solutions.</p>
                </div>
              </div>
              <div className="feature">
                <span className="tick">✓</span>
                <div>
                  <h4>Compliance built in</h4>
                  <p>GDPR-ready governance and EU data residency from day one.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-banner reveal">
            <h2>Ready to make your data work?</h2>
            <p className="lead">Book a free data audit and see exactly where you stand — no commitment.</p>
            <div className="hero-cta" style={{ justifyContent: 'center', margin: '0' }}>
              <Link to="/contact" className="btn btn--primary">Book a free data audit</Link>
              <Link to="/storage" className="btn btn--ghost">Start a Storage trial →</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
