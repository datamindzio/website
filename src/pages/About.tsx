import Eyebrow from '../components/primitives/Eyebrow'
import Button from '../components/primitives/Button'
import { ENERGYATLAS_URL } from '../lib/constants'

const PRINCIPLES = [
  { t: 'SHIP, THEN POLISH', b: 'A working system in weeks beats a perfect plan in quarters. We deliver in small, usable increments.' },
  { t: 'OWN YOUR STACK', b: 'Everything we build is documented and handed over. No lock-in, no black boxes.' },
  { t: 'AGENT-READY DATA', b: 'We believe the next interface to data is the AI agent — every system we build is MCP-ready.' },
]

const TEAM = [
  { photo: '/team/marcin-gorzynski.jpeg', name: 'Marcin Górzyński', role: 'CO-FOUNDER / DATA ENGINEERING' },
  { photo: '/team/magdalena-gorzynska-lazur.jpeg', name: 'Magdalena Górzyńska-Łazur', role: 'CO-FOUNDER / DATA & ANALYTICS' },
]

export default function About() {
  return (
    <>
      <section className="hero-grid" style={{ padding: '88px var(--gutter) 64px' }}>
        <Eyebrow>ABOUT</Eyebrow>
        <h1 style={{ fontSize: 54, margin: '20px 0 0', maxWidth: 820 }}>A small team that ships working data systems.</h1>
        <p className="lead" style={{ fontSize: 17, maxWidth: 680, margin: '20px 0 0' }}>
          DataMindz was founded on a simple observation: most data projects stall between the slide deck and production. We close that gap with reusable tooling and a delivery-first mindset.
        </p>
      </section>

      <section className="strip-3" style={{ borderTop: '1px solid var(--border)' }}>
        {PRINCIPLES.map((p) => (
          <div key={p.t}>
            <div className="eyebrow">{p.t}</div>
            <p className="lead" style={{ fontSize: 14, lineHeight: 1.6, margin: '10px 0 0' }}>{p.b}</p>
          </div>
        ))}
      </section>

      <section className="section" style={{ padding: '80px var(--gutter)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
          <h2 style={{ fontSize: 32 }}>The team</h2>
          <span className="eyebrow eyebrow--dim">PEOPLE / FOUNDERS</span>
        </div>
        <div className="grid-2" style={{ marginTop: 36, maxWidth: 720 }}>
          {TEAM.map((m) => (
            <div key={m.name}>
              <img src={m.photo} alt={m.name} style={{ aspectRatio: '1 / 1', width: '100%', objectFit: 'cover', objectPosition: 'center', borderRadius: 8, display: 'block' }} />
              <div style={{ marginTop: 14, fontWeight: 600, fontSize: 18 }}>{m.name}</div>
              <div className="mono" style={{ marginTop: 4, fontSize: 11, letterSpacing: '.12em', color: 'var(--text-dim)' }}>{m.role}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section cta-band" style={{ padding: '72px var(--gutter)' }}>
        <h2 style={{ fontSize: 32 }}>Want to see how we work? Start with the demo.</h2>
        <Button href={ENERGYATLAS_URL} external>Explore EnergyAtlas</Button>
      </section>
    </>
  )
}
