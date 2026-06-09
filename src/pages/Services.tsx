import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useReveal } from '../hooks/useReveal'

export default function Services() {
  useReveal()

  return (
    <>
      <div className="bg-fx" />
      <div className="grid-overlay" />
      <Header />

      {/* PAGE HERO */}
      <section className="hero" style={{ paddingBottom: '32px' }}>
        <div className="container">
          <div className="sec-head reveal" style={{ marginBottom: '0' }}>
            <span className="eyebrow">Services</span>
            <h1>From data to decisions, <span className="text-grad">end to end</span>.</h1>
            <p className="lead">
              A single, trusted path from raw data to real-time intelligence — strategy and technology
              under one roof, with no vendor juggling and no gaps.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES DETAIL */}
      <section className="section--tight">
        <div className="container">
          <div className="grid grid-2">
            <div className="card reveal">
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M9 11l3 3 8-8M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0" />
                </svg>
              </div>
              <h3>Data Audits</h3>
              <p>
                A thorough assessment of your data infrastructure — quality, governance frameworks and
                overall maturity — so you know exactly where you stand before you invest.
              </p>
            </div>
            <div className="card reveal">
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3" />
                </svg>
              </div>
              <h3>Strategic Data Advice</h3>
              <p>
                Expert guidance on data strategy, the right technologies to adopt, and the data literacy
                your team needs to build a genuinely data-fluent culture.
              </p>
            </div>
            <div className="card reveal">
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M6 3v12M18 9v12M6 15a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3M6 3a3 3 0 0 1 3 3" />
                </svg>
              </div>
              <h3>Data Integration</h3>
              <p>
                Connect disparate sources — the ones trapped in isolated systems — into one unified,
                accessible framework. No more silos, no more conflicting versions of the truth.
              </p>
            </div>
            <div className="card reveal">
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M4 7h16M4 12h16M4 17h16M8 4v16" />
                </svg>
              </div>
              <h3>Data Pipelining &amp; Processing</h3>
              <p>
                Resilient, scalable pipelines that move, transform and prepare data efficiently —
                including real-time and micro-batch frameworks for low-latency use cases.
              </p>
            </div>
            <div className="card reveal">
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M4 19V5M4 19h16M8 16V9M12 16V6M16 16v-4M20 16v-8" />
                </svg>
              </div>
              <h3>Data Analysis &amp; Storytelling</h3>
              <p>
                We extract the patterns that matter and translate them into clear, compelling visual
                narratives your stakeholders can act on immediately.
              </p>
            </div>
            <div className="card reveal" style={{ borderColor: 'var(--line-strong)' }}>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <ellipse cx="12" cy="6" rx="8" ry="3" />
                  <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
                </svg>
              </div>
              <h3>
                DATAMINDZ Storage{' '}
                <span style={{ color: 'var(--cyan)', fontSize: '.7rem' }}>SaaS</span>
              </h3>
              <p>
                Our proprietary, S3-compatible object storage — the secure, scalable foundation under
                every pipeline and dashboard we build.{' '}
                <Link to="/storage" style={{ color: 'var(--cyan)' }}>See the product →</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGES TABLE */}
      <section className="section">
        <div className="container">
          <div className="sec-head reveal">
            <span className="eyebrow">Challenges we solve</span>
            <h2>Your pain points, mapped to our solutions.</h2>
          </div>
          <div className="reveal" style={{ overflowX: 'auto' }}>
            <table className="tbl">
              <thead>
                <tr>
                  <th>Your challenge</th>
                  <th>What it costs you</th>
                  <th>How we fix it</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Poor data quality</td>
                  <td>Wrong insights, bad decisions</td>
                  <td>Audits + cleansing, standardization, validation</td>
                </tr>
                <tr>
                  <td>Data silos</td>
                  <td>Missed opportunities, no single view</td>
                  <td>Integration, unified pipelines, governance</td>
                </tr>
                <tr>
                  <td>Scale &amp; volume</td>
                  <td>Slow processing, overwhelmed systems</td>
                  <td>Scalable cloud pipelines + object storage</td>
                </tr>
                <tr>
                  <td>No in-house expertise</td>
                  <td>Stalled projects, locked-up data</td>
                  <td>Managed services + training + self-serve tools</td>
                </tr>
                <tr>
                  <td>Real-time latency</td>
                  <td>Outdated, low-value insight</td>
                  <td>Real-time / micro-batch pipelines</td>
                </tr>
                <tr>
                  <td>Hidden costs</td>
                  <td>Budget strain</td>
                  <td>Audits + cost-optimized pipeline design</td>
                </tr>
                <tr>
                  <td>Security &amp; compliance</td>
                  <td>Regulatory risk</td>
                  <td>GDPR-ready governance, encryption, EU residency</td>
                </tr>
                <tr>
                  <td>Weak visualization</td>
                  <td>Misleading conclusions</td>
                  <td>Expert storytelling + clear dashboards</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '0' }}>
        <div className="container">
          <div className="cta-banner reveal">
            <h2>Not sure where to start?</h2>
            <p className="lead">
              A free data audit shows you exactly where the gaps are — and what they're costing you.
            </p>
            <Link to="/contact" className="btn btn--primary">Book a free data audit</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
