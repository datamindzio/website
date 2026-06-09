import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useReveal } from '../hooks/useReveal'

type TeamMember = {
  name: string
  role: string
  bio: string
  photo: string
  linkedin: string
}

const team: TeamMember[] = [
  {
    name: 'Marcin Górzyński',
    role: 'Co-Founder & Lead Engineer',
    bio: 'Engineer with 15 years of experience building real-time data systems — energy trading platforms, blockchain indexers and infrastructure at Polygon, high-performance databases and data pipelines.',
    photo: '/team/marcin-gorzynski.jpeg',
    linkedin: 'https://www.linkedin.com/in/marcin-gorzynski/',
  },
  {
    name: 'Magdalena Górzyńska-Łazur',
    role: 'Co-Founder & Data Analyst',
    bio: 'Data analyst and storyteller specializing in People & Culture analytics. Turns complex business data into clear, decision-ready dashboards that teams actually use.',
    photo: '/team/magdalena-gorzynska-lazur.jpeg',
    linkedin: 'https://www.linkedin.com/in/magdalena-lazur/',
  },
]

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="card team-card reveal">
      <img className="team-avatar" src={member.photo} alt={member.name} />
      <h3>{member.name}</h3>
      <div className="team-role text-grad">{member.role}</div>
      <p>{member.bio}</p>
      <a
        className="team-link"
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-8.5c0-2.03-.04-4.64-2.83-4.64-2.83 0-3.27 2.21-3.27 4.5V24H8V8z" />
        </svg>
        LinkedIn
      </a>
    </div>
  )
}

export default function About() {
  useReveal()

  return (
    <>
      <div className="bg-fx" />
      <div className="grid-overlay" />
      <Header />

      <section className="hero" style={{ paddingBottom: '24px' }}>
        <div className="container">
          <div className="sec-head reveal" style={{ marginBottom: '0' }}>
            <span className="eyebrow">About DATAMINDZ</span>
            <h1>
              Your single, trusted partner for data —{' '}
              <span className="text-grad">strategy and technology under one roof</span>.
            </h1>
            <p className="lead">
              We don't just advise, and we don't just build tools — we do both. Deep consulting
              expertise fused with proprietary SaaS means a seamless flow from raw data to actionable
              intelligence, with no vendor juggling and no gaps.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="section--tight">
        <div className="container grid grid-2">
          <div className="card reveal">
            <div className="ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="12" cy="12" r="1" />
              </svg>
            </div>
            <h3>Our mission</h3>
            <p>
              To transform raw data into strategic assets, enabling businesses to make informed,
              data-driven decisions that drive growth.
            </p>
          </div>
          <div className="card reveal">
            <div className="ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h3>Our vision</h3>
            <p>
              To become the leading partner for data-driven transformation in Poland and beyond —
              known for innovative solutions and measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATOR */}
      <section className="section">
        <div className="container">
          <div className="panel split reveal">
            <div>
              <span className="eyebrow">What makes us different</span>
              <h2>Advice and the tools to act on it.</h2>
              <p className="muted">
                Many organizations juggle disparate tools and fragmented data, leading to inefficiency
                and no unified view. We serve as a single, trusted partner for all data needs — fusing
                human strategic guidance with automated, efficient data delivery through our own
                S3-compatible storage.
              </p>
            </div>
            <div className="grid" style={{ gap: '14px' }}>
              <div className="feature">
                <span className="tick">✓</span>
                <div>
                  <h4>End-to-end, not piecemeal</h4>
                  <p>From the first audit to a live storage backbone.</p>
                </div>
              </div>
              <div className="feature">
                <span className="tick">✓</span>
                <div>
                  <h4>Proprietary SaaS</h4>
                  <p>EU-native object storage we build and operate.</p>
                </div>
              </div>
              <div className="feature">
                <span className="tick">✓</span>
                <div>
                  <h4>Compliance-first</h4>
                  <p>GDPR-ready governance and EU data residency.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section" style={{ paddingTop: '0' }}>
        <div className="container">
          <div className="sec-head center reveal">
            <span className="eyebrow">Our team</span>
            <h2>The people behind DATAMINDZ.</h2>
          </div>
          <div className="grid grid-2 team-grid">
            {team.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* OPPORTUNITY */}
      <section className="section" style={{ paddingTop: '0' }}>
        <div className="container">
          <div className="sec-head center reveal">
            <span className="eyebrow">The opportunity we're built for</span>
            <h2>Poland is ready — the competence gap is real.</h2>
          </div>
          <div className="grid grid-3">
            <div className="card center reveal">
              <div className="num text-grad" style={{ fontSize: '2.2rem', fontWeight: '800' }}>5.9%</div>
              <p>Polish AI adoption — well below the EU average</p>
            </div>
            <div className="card center reveal">
              <div className="num text-grad" style={{ fontSize: '2.2rem', fontWeight: '800' }}>19.3%</div>
              <p>Data analytics adoption — vs 33% EU average</p>
            </div>
            <div className="card center reveal">
              <div className="num text-grad" style={{ fontSize: '2.2rem', fontWeight: '800' }}>€12.4B</div>
              <p>National push to digitalize Polish SMEs</p>
            </div>
          </div>
          <p className="lead center" style={{ margin: '32px auto 0' }}>
            DATAMINDZ exists to bridge that gap — for SMEs that need simplicity and ROI, and for
            enterprises wrestling legacy systems, silos and compliance.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '0' }}>
        <div className="container">
          <div className="cta-banner reveal">
            <h2>Let's build your data advantage.</h2>
            <p className="lead">Start with a free audit, or explore our EU-native storage.</p>
            <div className="hero-cta" style={{ justifyContent: 'center', margin: '0' }}>
              <Link to="/contact" className="btn btn--primary">Get in touch</Link>
              <Link to="/storage" className="btn btn--ghost">Explore Storage →</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
