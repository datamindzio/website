import { Link } from 'react-router-dom'
import Eyebrow from '../components/primitives/Eyebrow'
import Button from '../components/primitives/Button'
import Card from '../components/primitives/Card'
import BrowserFrame from '../components/primitives/BrowserFrame'
import StatPair from '../components/primitives/StatPair'
import SpecRow from '../components/primitives/SpecRow'
import { ENERGYATLAS_URL } from '../lib/constants'

const CAPS = [
  { t: 'AGGREGATION', h: 'One view of every asset', b: 'Production and usage data for PV, wind, and battery assets, normalized and aggregated into a single coherent model.' },
  { t: 'RETROSPECT & FORECAST', h: 'Look back, plan forward', b: 'Historical analysis alongside forecasting — see how assets performed and what to expect next.' },
  { t: 'MCP INTEGRATION', h: 'Agent-ready by design', b: 'An MCP server exposes the full energy dataset, so AI agents can query, analyze, and report on it directly.' },
]

const SPECS = [
  { label: 'Sector', value: 'ENERGY' },
  { label: 'Assets covered', value: 'PV · WIND · BATTERY' },
  { label: 'Capabilities', value: 'RETROSPECT · FORECAST' },
  { label: 'Integration', value: 'MCP SERVER' },
]

const CASES = [
  {
    eyebrow: 'ENERGY / PLATFORM', title: 'EnergyAtlas — a full energy data platform, from zero',
    body: 'Aggregation across PV, wind, and battery assets with retrospect, forecast, and an MCP server over the full dataset — built entirely on our templates.',
    stats: [{ value: '6 wks', label: 'TO FIRST RELEASE' }, { value: '3', label: 'ASSET CLASSES' }],
    footer: { text: 'VIEW LIVE →', href: ENERGYATLAS_URL },
  },
  {
    eyebrow: 'LOGISTICS / PIPELINES', title: 'One warehouse instead of nine spreadsheets',
    body: 'A mid-size logistics operator ran planning on disconnected exports. We consolidated sources into a governed warehouse with daily operational dashboards.',
    stats: [{ value: '9→1', label: 'DATA SOURCES UNIFIED' }, { value: '-70%', label: 'MANUAL REPORTING' }],
    footer: { text: 'DETAILS ON REQUEST', href: null },
  },
  {
    eyebrow: 'RETAIL / AI · MCP', title: 'Sales data, answered in plain language',
    body: "An MCP server over a retailer's sales warehouse let AI agents answer ad-hoc questions directly — no ticket queue to the analytics team.",
    stats: [{ value: '12', label: 'MCP TOOLS EXPOSED' }, { value: '<1 min', label: 'TO ANSWER, WAS DAYS' }],
    footer: { text: 'DETAILS ON REQUEST', href: null },
  },
]

export default function Projects() {
  return (
    <>
      <section className="hero-grid" style={{ padding: '88px var(--gutter) 64px' }}>
        <Eyebrow>PROJECTS / FEATURED DEMO</Eyebrow>
        <h1 style={{ fontSize: 60, margin: '20px 0 0' }}>EnergyAtlas</h1>
        <p className="lead" style={{ fontSize: 17, maxWidth: 680, margin: '20px 0 0' }}>
          A live showcase of what we build: aggregated energy production and asset usage across PV, wind, and battery — from retrospective analysis to forecast, with agent-ready data access over MCP.
        </p>
        <div style={{ marginTop: 32 }}>
          <Button href={ENERGYATLAS_URL} external>Open the live demo →</Button>
        </div>
      </section>

      <section className="section" style={{ padding: '48px var(--gutter)' }}>
        <BrowserFrame url="energyatlas.datamindz.io">
          <img src="/energyatlas-dashboard.png" alt="EnergyAtlas dashboard" style={{ height: 420 }} />
        </BrowserFrame>
      </section>

      <section className="strip-3" style={{ borderTop: '1px solid var(--border)' }}>
        {CAPS.map((c) => (
          <div key={c.t}>
            <div className="eyebrow">{c.t}</div>
            <div style={{ marginTop: 12, fontWeight: 600, fontSize: 17 }}>{c.h}</div>
            <p className="lead" style={{ fontSize: 14, lineHeight: 1.6, margin: '8px 0 0' }}>{c.b}</p>
          </div>
        ))}
      </section>

      <section className="section" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, padding: '80px var(--gutter)' }}>
        <div>
          <Eyebrow>WHY A DEMO?</Eyebrow>
          <h2 style={{ fontSize: 32, margin: '16px 0 0' }}>Proof, not promises.</h2>
          <p className="lead" style={{ fontSize: 15.5, lineHeight: 1.65, margin: '16px 0 0' }}>
            EnergyAtlas is built entirely on the same templates, connectors, and MCP tooling we use for client work. What you see there is what your project starts from — a working foundation, not a blank page.
          </p>
          <div style={{ marginTop: 24 }}>
            <Link to="/contact" style={{ fontSize: 13.5, color: 'var(--accent)' }}>Discuss a similar build for your domain →</Link>
          </div>
        </div>
        <div style={{ display: 'grid', gap: 10 }}>
          {SPECS.map((s) => <SpecRow key={s.label} label={s.label} value={s.value} />)}
        </div>
      </section>

      <section className="section" style={{ padding: '80px var(--gutter)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
          <h2 style={{ fontSize: 32 }}>Selected work</h2>
          <span className="eyebrow eyebrow--dim">SELECTED WORK / ANONYMIZED</span>
        </div>
        <div className="grid-3" style={{ marginTop: 36 }}>
          {CASES.map((c) => (
            <Card key={c.title}>
              <div style={{ padding: '26px 28px', display: 'flex', flexDirection: 'column', gap: 14, height: '100%' }}>
                <div className="eyebrow eyebrow--dim">{c.eyebrow}</div>
                <div style={{ fontWeight: 600, fontSize: 18, lineHeight: 1.3 }}>{c.title}</div>
                <p className="lead" style={{ fontSize: 14, lineHeight: 1.6, margin: 0 }}>{c.body}</p>
                <div style={{ display: 'flex', gap: 32, paddingTop: 16, marginTop: 'auto', borderTop: '1px solid var(--divider-soft)' }}>
                  {c.stats.map((s) => <StatPair key={s.label} value={s.value} label={s.label} />)}
                </div>
                {c.footer.href
                  ? <a className="mono" style={{ fontSize: 11.5, color: 'var(--accent)', letterSpacing: '.08em' }} href={c.footer.href} target="_blank" rel="noopener">{c.footer.text}</a>
                  : <span className="mono" style={{ fontSize: 11.5, color: 'var(--text-dimmer)', letterSpacing: '.08em' }}>{c.footer.text}</span>}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  )
}
