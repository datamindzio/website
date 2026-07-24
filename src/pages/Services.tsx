import Eyebrow from '../components/primitives/Eyebrow'
import Button from '../components/primitives/Button'
import Card from '../components/primitives/Card'

const ROWS = [
  {
    n: '01 / AUDIT', title: 'Data audit & strategy',
    body: 'A structured review of your data estate: sources, quality, ownership, and gaps. You get a prioritized roadmap tied to business outcomes — not a shelf report.',
    bullets: ['Source & quality inventory', 'Value & feasibility scoring', 'Roadmap with quick wins first'],
  },
  {
    n: '02 / PIPELINES', title: 'Data pipelines & platforms',
    body: 'Ingestion, transformation, and warehousing built from our service templates and connectors — production-grade from day one, monitored and documented.',
    bullets: ['Batch & streaming ingestion', 'Modeling & warehouse design', 'Observability & data quality checks'],
  },
  {
    n: '03 / INSIGHT', title: 'Dashboards & insights',
    body: 'Reporting designed around the decisions your teams make — retrospective views, live monitoring, and forecasting where the data supports it.',
    bullets: ['KPI & operational dashboards', 'Forecasting & scenario views', 'Self-serve analytics enablement'],
  },
  {
    n: '04 / AI · MCP', title: 'AI agents via MCP',
    body: 'MCP server integrations that expose your data to AI agents — safely, with governed access. From our templates to your production in weeks.',
    bullets: ['MCP servers over warehouses & APIs', 'Agent workflows & tool design', 'Access control & auditability'],
  },
]

const STEPS = [
  { n: '1', title: 'Scope', body: 'A short discovery to agree on outcomes and constraints.' },
  { n: '2', title: 'Assemble', body: 'Templates and connectors get a working skeleton up fast.' },
  { n: '3', title: 'Deliver', body: 'Iterative releases with your team in the loop weekly.' },
  { n: '4', title: 'Hand over', body: 'Docs, training, and support — you own what we build.' },
]

export default function Services() {
  return (
    <>
      <section className="hero-grid" style={{ padding: '88px var(--gutter) 64px' }}>
        <Eyebrow>SERVICES</Eyebrow>
        <h1 style={{ fontSize: 54, margin: '20px 0 0', maxWidth: 820 }}>End to end — or exactly the piece you need.</h1>
        <p className="lead" style={{ fontSize: 17, maxWidth: 640, margin: '20px 0 0' }}>
          Four capabilities that compose into one delivery: understand your data, move it reliably, make it visible, and put it in the hands of AI agents.
        </p>
      </section>

      <section className="section" style={{ padding: '0 var(--gutter)' }}>
        {ROWS.map((r) => (
          <div key={r.n} style={{ display: 'grid', gridTemplateColumns: '220px 1fr 1fr', gap: 32, padding: '40px 0', borderBottom: '1px solid var(--border)' }}>
            <div className="mono" style={{ fontSize: 13, color: 'var(--accent)', letterSpacing: '.08em' }}>{r.n}</div>
            <div>
              <h2 style={{ fontSize: 22 }}>{r.title}</h2>
              <p className="lead" style={{ fontSize: 14.5, margin: '10px 0 0' }}>{r.body}</p>
            </div>
            <ul className="arrow-list">
              {r.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </div>
        ))}
      </section>

      <section className="section" style={{ padding: '80px var(--gutter)' }}>
        <Eyebrow>HOW WE WORK</Eyebrow>
        <div className="grid-4" style={{ marginTop: 28 }}>
          {STEPS.map((s) => (
            <Card key={s.n}>
              <div style={{ padding: '26px 28px' }}>
                <div className="mono" style={{ fontSize: 22, color: 'var(--text-dimmest)' }}>{s.n}</div>
                <div style={{ marginTop: 12, fontWeight: 600, fontSize: 17 }}>{s.title}</div>
                <div style={{ marginTop: 8, fontSize: 14, lineHeight: 1.6, color: 'var(--text-muted)' }}>{s.body}</div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="section cta-band" style={{ padding: '72px var(--gutter)' }}>
        <h2 style={{ fontSize: 32 }}>Not sure where to start? Start with the audit.</h2>
        <Button to="/contact">Get in touch</Button>
      </section>
    </>
  )
}
