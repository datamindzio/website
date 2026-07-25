import { Link } from 'react-router-dom'
import Eyebrow from '../components/primitives/Eyebrow'
import Button from '../components/primitives/Button'
import Card from '../components/primitives/Card'
import BrowserFrame from '../components/primitives/BrowserFrame'
import { ENERGYATLAS_URL } from '../lib/constants'

const STRIP = [
  { n: '01 / AUDIT', title: 'Data audit & strategy', body: "Map what you have, what it's worth, and what's missing.", accent: false },
  { n: '02 / PIPELINES', title: 'Data pipelines', body: 'Reliable ingestion and modeling, from source to warehouse.', accent: false },
  { n: '03 / INSIGHT', title: 'Dashboards & insights', body: 'Decision-grade reporting your teams actually use.', accent: false },
  { n: '04 / AI · MCP', title: 'AI agents via MCP', body: 'Expose your data to AI agents with MCP server integrations.', accent: true },
]

const TOOLKIT = [
  { t: 'MCP SERVER TEMPLATES', b: 'Stand up an agent-ready data interface over your warehouse or APIs in days.' },
  { t: 'SERVICE TEMPLATES', b: 'Battle-tested scaffolds for ingestion, transformation, and serving layers.' },
  { t: 'CONNECTORS', b: 'Ready-made integrations for common sources, warehouses, and BI tools.' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero-grid" style={{ padding: '104px var(--gutter) 80px' }}>
        <Eyebrow>DATA CONSULTING · PIPELINES · AI AGENTS</Eyebrow>
        <h1 style={{ fontSize: 68, lineHeight: 1.05, letterSpacing: '-0.03em', maxWidth: 860, margin: '22px 0 0' }}>
          From raw data to decisions your business can act on.
        </h1>
        <p className="lead" style={{ fontSize: 19, maxWidth: 620, margin: '28px 0 0' }}>
          DataMindz delivers end-to-end data solutions — audits, pipelines, dashboards, and AI-agent integrations via MCP — built fast on proven templates and connectors.
        </p>
        <div style={{ display: 'flex', gap: 16, marginTop: 44, flexWrap: 'wrap' }}>
          <Button href={ENERGYATLAS_URL} external>Explore EnergyAtlas</Button>
          <Button variant="secondary" to="/services">Our services</Button>
        </div>
      </section>

      {/* Services strip */}
      <section className="services-strip" style={{ borderTop: '1px solid var(--border)' }}>
        {STRIP.map((s) => (
          <Link key={s.n} to="/services" className="service-cell">
            <div className="eyebrow" style={{ color: s.accent ? 'var(--accent)' : 'var(--text-dim)', letterSpacing: '.14em' }}>{s.n}</div>
            <div style={{ marginTop: 12, fontWeight: 600, fontSize: 17 }}>{s.title}</div>
            <div style={{ marginTop: 8, fontSize: 13.5, lineHeight: 1.55, color: 'var(--text-body3)' }}>{s.body}</div>
          </Link>
        ))}
      </section>

      {/* EnergyAtlas feature */}
      <section className="section" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 56, alignItems: 'center', padding: '80px var(--gutter)' }}>
        <div>
          <Eyebrow>FEATURED PROJECT</Eyebrow>
          <h2 style={{ fontSize: 38, margin: '16px 0 0' }}>EnergyAtlas</h2>
          <p className="lead" style={{ fontSize: 15.5, lineHeight: 1.65, margin: '16px 0 0' }}>
            Aggregated energy production across PV, wind, and battery assets — retrospective analysis and forecasting — with an MCP server exposing the full dataset to AI agents.
          </p>
          <div style={{ display: 'flex', gap: 20, marginTop: 26, alignItems: 'center', flexWrap: 'wrap' }}>
            <a className="mono" style={{ fontSize: 13, color: 'var(--accent)' }} href={ENERGYATLAS_URL} target="_blank" rel="noopener">energyatlas.datamindz.io →</a>
            <Link to="/energyatlas" style={{ fontSize: 13.5, color: 'var(--text-nav)' }}>See it live →</Link>
            <Link to="/projects" style={{ fontSize: 13.5, color: 'var(--text-nav)' }}>Project details</Link>
          </div>
        </div>
        <BrowserFrame to="/energyatlas">
          <img src="/energyatlas-dashboard.png" alt="EnergyAtlas dashboard" style={{ height: 300 }} />
        </BrowserFrame>
      </section>

      {/* Why we ship fast */}
      <section className="section" style={{ padding: '80px var(--gutter)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
          <h2 style={{ fontSize: 32 }}>Why we ship fast</h2>
          <span className="eyebrow eyebrow--dim">TOOLKIT / ACCELERATORS</span>
        </div>
        <p className="lead" style={{ fontSize: 15.5, margin: '14px 0 0', maxWidth: 640 }}>
          We don't start from zero. A library of production-tested building blocks gets your solution to first value in weeks, not quarters.
        </p>
        <div className="grid-3" style={{ marginTop: 36 }}>
          {TOOLKIT.map((c) => (
            <Card key={c.t}>
              <div style={{ padding: '26px 28px' }}>
                <div className="eyebrow" style={{ letterSpacing: '.12em' }}>{c.t}</div>
                <div style={{ marginTop: 10, fontSize: 14, lineHeight: 1.6, color: 'var(--text-muted)' }}>{c.b}</div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA band (left text / right button per Home.dc.html) */}
      <section className="section" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'center', padding: '72px var(--gutter)' }}>
        <div>
          <h2 style={{ fontSize: 34 }}>Have data? Let's make it work.</h2>
          <p className="lead" style={{ fontSize: 15.5, margin: '12px 0 0' }}>Tell us where you are — we'll map the fastest route to value.</p>
        </div>
        <Button to="/contact">Get in touch</Button>
      </section>
    </>
  )
}
